let playersSessionObject = JSON.parse(sessionStorage.getItem("activePlayersPayload"))

console.log(playersSessionObject)

class TicTacToeMatch {
    constructor(player1, player2, player1Name, player2Name) {
        this.player1 = player1
        this.player2 = player2
        this.player1Name = player1Name
        this.player2Name = player2Name
        this.board = [["", "", ""], ["", "", ""], ["", "", ""]]
        this.turn = 0



    }

    Player1Turn() {

        CheckIf3()
        PlacePiece()
        Player2Turn()
        this.turn++
    }

    Player2Turn() {
        CheckIf3()
        PlacePiece()
        Player1Turn()
        this.turn++
    }




}

const player1 = playersSessionObject[0].player
const player2 = playersSessionObject[1].player
const player1Name = playersSessionObject[0].playerName
const player2Name = playersSessionObject[1].playerName

let activeGame = new TicTacToeMatch(player1, player2, player1Name, player2Name)

let cell00 = document.getElementById("ttt-cell-00")
let cell01 = document.getElementById("ttt-cell-01")
let cell02 = document.getElementById("ttt-cell-02")
// this.cell10 = document.getElementById("ttt-cell-10")
// this.cell11 = document.getElementById("ttt-cell-11")
// this.cell12 = document.getElementById("ttt-cell-12")
// this.cell20 = document.getElementById("ttt-cell-20")
// this.cell21 = document.getElementById("ttt-cell-21")
// this.cell22 = document.getElementById("ttt-cell-22")
cell00.onclick = () => { console.log("click success") }

console.log(activeGame)

activeGame.Player1Turn()

