let playersSessionObject = JSON.parse(sessionStorage.getItem("activePlayersPayload"))

class TicTacToeMatch {
    constructor(player1, player2, player1Name, player2Name) {
        this.player1 = player1
        this.player2 = player2
        this.player1Name = player1Name
        this.player2Name = player2Name
        this.board = [["", "", ""], ["", "", ""], ["", "", ""]]
        this.turn = 0
        this.activePlayer = ""
        this.action = ""
        this.xCount = 0
        this.oCount = 0
        this.replacingCell = []
    }

    startGame = () => {
        this.turn++
        this.player1Turn()
        this.displayCurrentTurn(this.turn)
    }

    player1Turn = () => {
        this.checkIf3(1)
        this.checkWinner(2)
        this.displayCurrentTurn(this.turn)
        this.activePlayer = this.player1Name
        if (this.turn == 1) {
            this.currentAction = 'place'
        }
        this.ifCpuMove(1)
    }

    checkIf3 = playerNumber => {
        this.xCount = 0;
        this.oCount = 0;
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if (this.board[i][j] == "x") { this.xCount++ }
                if (this.board[i][j] == "o") { this.oCount++ }
            }
        }
        if (playerNumber == 1 && this.xCount > 2) {
            this.action = "remove"
        } else if (playerNumber == 1) {
            return this.action = "place"
        }
        else if (playerNumber == 2 && this.oCount > 2) {
            this.action = "remove"
        }
    }

    checkWinner = (playerNum) => {
        if (playerNum == 1) {
            if ((this.board[0][0] + this.board[0][1] + this.board[0][2] === "xxx") ||
                (this.board[1][0] + this.board[1][1] + this.board[1][2] === "xxx") ||
                (this.board[2][0] + this.board[2][1] + this.board[2][2] === "xxx") ||
                (this.board[0][0] + this.board[1][0] + this.board[2][0] === "xxx") ||
                (this.board[0][1] + this.board[1][1] + this.board[2][1] === "xxx") ||
                (this.board[0][2] + this.board[1][2] + this.board[2][2] === "xxx") ||
                (this.board[0][0] + this.board[1][1] + this.board[2][2] === "xxx") ||
                (this.board[2][0] + this.board[1][1] + this.board[0][2] === "xxx")) {
                sessionStorage.setItem("winner", this.player1Name)
                window.location.href = "./winner-screen.html"
            }
        }
        else if (playerNum == 2) {
            if ((this.board[0][0] + this.board[0][1] + this.board[0][2] === "ooo") ||
                (this.board[1][0] + this.board[1][1] + this.board[1][2] === "ooo") ||
                (this.board[2][0] + this.board[2][1] + this.board[2][2] === "ooo") ||
                (this.board[0][0] + this.board[1][0] + this.board[2][0] === "ooo") ||
                (this.board[0][1] + this.board[1][1] + this.board[2][1] === "ooo") ||
                (this.board[0][2] + this.board[1][2] + this.board[2][2] === "ooo") ||
                (this.board[0][0] + this.board[1][1] + this.board[2][2] === "ooo") ||
                (this.board[2][0] + this.board[1][1] + this.board[0][2] === "ooo")) {
                sessionStorage.setItem("winner", this.player2Name)
                window.location.href = "./winner-screen.html"
            }
        }
    }

    player2Turn = () => {
        this.checkIf3(2)
        this.checkWinner(1)
        this.displayCurrentTurn(this.turn)
        this.activePlayer = this.player2Name
        this.ifCpuMove(2)
    }

    ifCpuMove = (playerNum) => {
        switch (playerNum) {
            case 1:
                if (this.isEven(this.turn) == false) {
                    if (this.player1 == "cpu") {
                        if (this.action == 'remove') {
                            this.cpuRemove("x")
                        }
                        this.cpuPlace("x")
                        this.checkWinner(1)
                        this.player2Turn()
                    }
                    break;
                }
            case 2:
                if (this.isEven(this.turn)) {
                    if (this.player2 == "cpu") {
                        if (this.action == 'remove') {
                            this.cpuRemove("o")
                        }
                        this.cpuPlace("o")
                        this.checkWinner(2)
                        this.player1Turn()
                    }
                    break;
                }

            default:
                break;
        }
    }

    cpuRemove = pieceType => {
        let rng1 = this.cpuRng()
        let rng2 = this.cpuRng()
        while (this.board[rng1][rng2] != pieceType) {
            rng1 = this.cpuRng()
            rng2 = this.cpuRng()
        }

        setTimeout(() => {
            document.getElementById(`ttt-cell-${rng1}${rng2}`).innerHTML = ""
            this.board[rng1][rng2] = ""

        }, 1000);
        this.action = 'place'

    }

    cpuPlace = pieceType => {
        let rng1 = this.cpuRng()
        let rng2 = this.cpuRng()
        while (this.board[rng1][rng2] != "") {
            rng1 = this.cpuRng()
            rng2 = this.cpuRng()
        }
        setTimeout(() => {
            this.board[rng1][rng2] = pieceType
            document.getElementById(`ttt-cell-${rng1}${rng2}`).innerHTML = pieceType
            this.checkWinner(1)
            this.checkWinner(2)
        }, 1000);
        this.turn++
        this.checkWinner(1)
        this.checkWinner(2)
        this.player1Turn()
    }

    cpuRng = () => {
        return [Math.floor(Math.random() * (2 - 0 + 1) + 0)]
    }



    isEven = num => num % 2 === 0;

    displayCurrentTurn = turnNum => {
        document.getElementById("turn-counter").innerHTML = `<b>It is turn ${turnNum}</b>`
    }

    playerMove = cell => {
        switch (this.action) {
            case 'place':
                if (this.emptycheck(cell) == 'empty') {
                    if (!this.isEven(this.turn)) {
                        if (cell.toString() == this.replacingCell.toString()) {
                            return null;
                        }
                        this.board[cell[0]][cell[1]] = "x"
                        document.getElementById(`ttt-cell-${cell[0]}${cell[1]}`).innerHTML = ("x")
                        this.turn++
                        this.player2Turn()
                    } else if (this.isEven(this.turn)) {
                        if (cell.toString() == this.replacingCell.toString()) {
                            return null;
                        }
                        this.board[cell[0]][cell[1]] = "o"
                        document.getElementById(`ttt-cell-${cell[0]}${cell[1]}`).innerHTML = ("o")
                        this.turn++
                        this.player1Turn()
                    }
                }
                break;
            case 'remove':
                if (this.emptycheck(cell) == 'occupied') {
                    if (!this.isEven(this.turn) && this.board[cell[0]][cell[1]] == "x") {
                        if (this.board[cell[0]][cell[1]] == "x") {
                            this.board[cell[0]][cell[1]] = ""
                            document.getElementById(`ttt-cell-${cell[0]}${cell[1]}`).innerHTML = ("")
                            this.replacingCell = cell;
                            this.action = 'place'
                        }
                    } else if (this.isEven(this.turn)) {
                        if (this.board[cell[0]][cell[1]] == "o") {
                            this.board[cell[0]][cell[1]] = ""
                            document.getElementById(`ttt-cell-${cell[0]}${cell[1]}`).innerHTML = ("")
                            this.replacingCell = cell;
                            this.action = 'place'
                        }
                    }
                }
        }
    }

    emptycheck = (cell) => {
        if (this.board[cell[0]][cell[1]] == "") {
            return "empty"
        }
        else if (this.board[cell[0]][cell[1]] == "o" || this.board[cell[0]][cell[1]] == "x") {
            return "occupied"
        }
    }
}

const player1 = playersSessionObject[0].player
const player2 = playersSessionObject[1].player
const player1Name = playersSessionObject[0].playerName
const player2Name = playersSessionObject[1].playerName

let activeGame = new TicTacToeMatch(player1, player2, player1Name, player2Name)

activeGame.startGame()

let player1InfoTab = document.getElementById("player-1-info")
player1InfoTab.innerHTML = ` <b> Player 1's name: ${activeGame.player1Name} </b>`

let player2InfoTab = document.getElementById("player-2-info")
player2InfoTab.innerHTML = `<b> Player 2's name: ${activeGame.player2Name} </b>`

let cell00 = document.getElementById("ttt-cell-00")
let cell01 = document.getElementById("ttt-cell-01")
let cell02 = document.getElementById("ttt-cell-02")
let cell10 = document.getElementById("ttt-cell-10")
let cell11 = document.getElementById("ttt-cell-11")
let cell12 = document.getElementById("ttt-cell-12")
let cell20 = document.getElementById("ttt-cell-20")
let cell21 = document.getElementById("ttt-cell-21")
let cell22 = document.getElementById("ttt-cell-22")

cell00.onclick = () => { activeGame.playerMove([0, 0]) }
cell01.onclick = () => { activeGame.playerMove([0, 1]) }
cell02.onclick = () => { activeGame.playerMove([0, 2]) }
cell10.onclick = () => { activeGame.playerMove([1, 0]) }
cell11.onclick = () => { activeGame.playerMove([1, 1]) }
cell12.onclick = () => { activeGame.playerMove([1, 2]) }
cell20.onclick = () => { activeGame.playerMove([2, 0]) }
cell21.onclick = () => { activeGame.playerMove([2, 1]) }
cell22.onclick = () => { activeGame.playerMove([2, 2]) }