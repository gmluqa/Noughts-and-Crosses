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
        console.log('it is turn ' + this.turn)
        this.CheckIf3(1)
        this.activePlayer = this.player1Name
        console.log('turn:' + this.activePlayer)
        console.log('current action is ' + this.action)
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

    }

    CheckWinner = (playerNumber) => {
        console.log(`checking if ${playerNumber} has won`)

    }

    Player2Turn = () => {
        console.log('it is turn ' + this.turn)
        this.CheckIf3(2)
        this.activePlayer = this.player2Name
        console.log('turn:' + this.activePlayer)
        console.log('current action is ' + this.action)


    }

    isEven = num => num % 2 === 0;

    PlayerMove = cell => {
        switch (activeGame.action) {
            case 'place':
                if (this.EmptyCheck(cell) == 'empty') {
                    if (!activeGame.isEven(activeGame.turn)) {
                        activeGame.board[cell[0]][cell[1]] = "x"
                        document.getElementById(`ttt-cell-${cell[0]}${cell[1]}`).innerHTML = ("x")
                        console.log('x placed')
                        this.turn++
                        activeGame.Player2Turn()

                    } else if (activeGame.isEven(activeGame.turn)) {
                        activeGame.board[cell[0]][cell[1]] = "o"
                        document.getElementById(`ttt-cell-${cell[0]}${cell[1]}`).innerHTML = ("o")
                        console.log('o placed')
                        this.turn++
                        activeGame.Player1Turn()
                    }
                }
                break;
            case 'remove':
                if (this.EmptyCheck(cell) == 'occupied') {
                    if (!activeGame.isEven(activeGame.turn)) {
                        activeGame.board[cell[0]][cell[1]] = ""
                        document.getElementById(`ttt-cell-${cell[0]}${cell[1]}`).innerHTML = ("")
                        this.action = 'place'
                        console.log('player 1 to place')

                    } else if (activeGame.isEven(activeGame.turn)) {
                        activeGame.board[cell[0]][cell[1]] = ""
                        document.getElementById(`ttt-cell-${cell[0]}${cell[1]}`).innerHTML = ("")
                        this.action = 'place'
                        console.log('player 2 to place')
                    }
                }
        }
    }

    EmptyCheck = (cell) => {
        if (activeGame.board[cell[0]][cell[1]] == "") {
            console.log('space is empty')
            return "empty"
        }
        else if (activeGame.board[cell[0]][cell[1]] == "o" || activeGame.board[cell[0]][cell[1]] == "x") {
            console.log('space is occupied')
            return "occupied"
        }


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

cell00.onclick = () => { activeGame.PlayerMove([0, 0]) }
cell01.onclick = () => { activeGame.PlayerMove([0, 1]) }
cell02.onclick = () => { activeGame.PlayerMove([0, 2]) }
cell10.onclick = () => { activeGame.PlayerMove([1, 0]) }
cell11.onclick = () => { activeGame.PlayerMove([1, 1]) }
cell12.onclick = () => { activeGame.PlayerMove([1, 2]) }
cell20.onclick = () => { activeGame.PlayerMove([2, 0]) }
cell21.onclick = () => { activeGame.PlayerMove([2, 1]) }
cell22.onclick = () => { activeGame.PlayerMove([2, 2]) }


// cell00.onclick = () => {
//     switch (activeGame.action) {
//         case "place":
//             if (!isEven(activeGame.turn)) {
//                 activeGame.board[0][0] = "x"
//                 console.log(activeGame.board[0][0])
//                 this.turn++
//                 activeGame.Player2Turn()
//             }
//             break;
//         case "remove":

//             switch (activeGame.turn) {
//                 case value:

//                     break;

//                 default:
//                     break;
//             }


//             if (activeGame.board[0][0] = "x" || activeGame.board[0][0] == "o") {

//             }

//         default:
//             break;
//     }
// }

