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
    }

    Player1Turn = () => {
        this.turn++
        this.activePlayer = this.player1Name
        CheckIf3()
        PlacePiece()
        Player2Turn()

    }

    CheckIf3Pieces = () => {

        // if there are 3 of any same piece ? check for 6 total : 
    } // scans the array and sees if there are 3 of any piece
    // if true, program runs CheckWinner() 
    // if false, do nothing

    Player2Turn = () => {
        this.turn++
        this.activePlayer = this.player2Name
        CheckIf3()
        PlacePiece()
        Player1Turn()

    }





}

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

cell00.onclick = () => { /* ActivePlayer(), DoAction(action) */ }
cell01.onclick = () => { /* ActivePlayer(), DoAction(action) */ }
cell02.onclick = () => { /* ActivePlayer(), DoAction(action) */ }
cell10.onclick = () => { /* ActivePlayer(), DoAction(action) */ }
cell11.onclick = () => { /* ActivePlayer(), DoAction(action) */ }
cell12.onclick = () => { /* ActivePlayer(), DoAction(action) */ }
cell20.onclick = () => { /* ActivePlayer(), DoAction(action) */ }
cell21.onclick = () => { /* ActivePlayer(), DoAction(action) */ }
cell22.onclick = () => { /* ActivePlayer(), DoAction(action) */ }

// ASIGNING PLAYER VARS, INITIATE NEW GAME WITH THOSE VARS

const player1 = playersSessionObject[0].player
const player2 = playersSessionObject[1].player
const player1Name = playersSessionObject[0].playerName
const player2Name = playersSessionObject[1].playerName

let activeGame = new TicTacToeMatch(player1, player2, player1Name, player2Name)




for (let i = 0; i < activeGame.board.length; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`cell ${i}${j} `)
    }
}

