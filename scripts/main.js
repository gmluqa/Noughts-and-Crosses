/* User clicks on START, let activeGame = new TicTacToeMatch(player1,player2) */

class TicTacToeMatch {
    constructor(player1, player2) {

        this.player1 = player1
        this.player2 = player2
        this.matchStart()
        this.asignPlayers(player1, player2)
    }

    // methods

    asignPlayers = (player1, player2) => ({ player1, player2 })

    matchStart(player1) {
        switch (player1) {
            case 'human':
                this.humanTurn()
                break;

            case 'cpu':
                this.cpuTurn()
                break;

            default:
                break;
        }
    }

    humanTurn() {
        // Displays on screen that it is the humans turn
    }

}

// 
let activeGame = new TicTacToeMatch("human", "cpu")