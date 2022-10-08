
let tet = document.getElementById("begin-button")

tet.onClick = () => alert('hel')


// sets the session, save JSON string as session storage
// JSON.stringify global method exists
// sessionStorage.setItem("key", "value")

// console.log(sessionStorage.getItem("key"))

class TicTacToeMatch {
    constructor() {
        this.player1 = "something"
        this.player2 = "cpu"
    }
}

// /* User clicks on START, let activeGame = new TicTacToeMatch(player1,player2) */

// class TicTacToeMatch {
//     constructor(player1, player2) {

//         this.player1 = player1
//         this.player2 = player2
//         this.matchStart()
//         this.asignPlayers(player1, player2)
//     }

//     // methods

//     asignPlayers = (player1, player2) => ({ player1, player2 })

//     matchStart(player1) {
//         switch (player1) {
//             case 'human':
//                 this.humanTurn()
//                 break;

//             case 'cpu':
//                 this.cpuTurn()
//                 break;

//             default:
//                 break;
//         }
//     }

//     humanTurn() {
//         // Displays on screen that it is the humans turn
//     }

// }

// // 
// let activeGame = new TicTacToeMatch("human", "cpu")