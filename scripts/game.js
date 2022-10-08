let p = sessionStorage.getItem("activePlayersPayload")
p = JSON.parse(p)

class TicTacToeMatch {
    constructor() {
        this.player1 = ""
        this.player2 = ""
        this.player1Name = "Player 1"
        this.player2Name = "Player 2"
        this.board = [["", "", ""], ["", "", ""], ["", "", ""]]
        this.turn = 0
    }

}