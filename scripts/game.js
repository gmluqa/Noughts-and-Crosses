// PARSE THE SESSIONSTORAGE STRING INTO JSON

let playersSessionObject = JSON.parse(sessionStorage.getItem("activePlayersPayload"))

// DEFINING CLASS THAT WILL BE ABLE TO UTILIZE THE JSON AS INPUT PARAMS

// example {player: 'cpu', playerName: 'Player 1'}, {player: 'cpu', playerName: 'Player 2'} 

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
    }

    StartGame = () => {
        this.turn++
        this.Player1Turn()
    }

    Player1Turn = () => {
        this.CheckIf3(1)
        this.activePlayer = this.player1Name
        console.log(this.activePlayer)
        // PlacePiece()
        // Player2Turn()

    }

    CheckIf3 = playerNumber => {
        this.xCount = 0;
        this.oCount = 0;
        for (let i = 0; i < activeGame.board.length; i++) {
            for (let j = 0; j < activeGame.board[i].length; j++) {
                if (activeGame.board[i][j] == "x") { this.xCount++ }
                if (activeGame.board[i][j] == "o") { this.oCount++ }
            }
        }
        if (playerNumber == 1 && this.xCount > 2) {
            console.log('player 1 has > 2 x')
            this.CheckWinner(playerNumber)
            this.action = "remove"
        } else if (playerNumber == 1) {
            return this.action = "place"
        }
        if (playerNumber == 2 && this.oCount > 2) {
            console.log('player 2 has > 2 o')
            this.CheckWinner(playerNumber)
            this.action = "remove"
        }
        console.log(this.xCount)
        console.log(this.oCount)
    }

    CheckWinner = (playerNumber) => {
        console.log(`checking if ${playerNumber} has won`)

    }

    Player2Turn = () => {
        this.CheckIf3(2)
        this.activePlayer = this.player2Name
        console.log(this.activePlayer)

    }





}


// ASIGNING PLAYER VARS, INITIATE NEW GAME WITH THOSE VARS

const player1 = playersSessionObject[0].player
const player2 = playersSessionObject[1].player
const player1Name = playersSessionObject[0].playerName
const player2Name = playersSessionObject[1].playerName

let activeGame = new TicTacToeMatch(player1, player2, player1Name, player2Name)

activeGame.StartGame()


// CELL CONTROLLING BUTTONS

let cell00 = document.getElementById("ttt-cell-00")
let cell01 = document.getElementById("ttt-cell-01")
let cell02 = document.getElementById("ttt-cell-02")
let cell10 = document.getElementById("ttt-cell-10")
let cell11 = document.getElementById("ttt-cell-11")
let cell12 = document.getElementById("ttt-cell-12")
let cell20 = document.getElementById("ttt-cell-20")
let cell21 = document.getElementById("ttt-cell-21")
let cell22 = document.getElementById("ttt-cell-22")

console.log(` action is ${activeGame.action}`)
console.log(activeGame.turn)
cell00.onclick = () => {
    switch (activeGame.action) {
        case "place":
            if (!isEven(activeGame.turn)) {
                activeGame.board[0][0] = "x"
                console.log(activeGame.board[0][0])
                this.turn++
                activeGame.Player2Turn()
            }

            break;

        default:
            break;
    }
}
cell01.onclick = () => { /* ActivePlayer(), DoAction(action) */ }
cell02.onclick = () => { /* ActivePlayer(), DoAction(action) */ }
cell10.onclick = () => { /* ActivePlayer(), DoAction(action) */ }
cell11.onclick = () => { /* ActivePlayer(), DoAction(action) */ }
cell12.onclick = () => { /* ActivePlayer(), DoAction(action) */ }
cell20.onclick = () => { /* ActivePlayer(), DoAction(action) */ }
cell21.onclick = () => { /* ActivePlayer(), DoAction(action) */ }
cell22.onclick = () => { /* ActivePlayer(), DoAction(action) */ }

const isEven = num => num % 2 === 0;