let beginButton = document.getElementById("begin-button")

beginButton.onclick = () => { sessionStorage.clear(), window.location.href = "../pages/player-select.html" }




// let bb = document.getElementById("begin-button")

// bb.onclick = function () {
//     let activeGame = new TicTacToeMatch()
//     console.log(activeGame)
//     activeGame.LogFunction()
//     sessionStorage.setItem("activeGame", JSON.stringify(activeGame))
//     console.log(sessionStorage.getItem("activeGame"))
//     console.log(JSON.parse(sessionStorage.getItem("activeGame")))
//     let activeGameSS = console.log(JSON.parse(sessionStorage.getItem("activeGame")))
//     activeGameSS.LogFunction()
// }

// class TicTacToeMatch {
//     constructor() {
//         this.player1 = ""
//         this.player2 = ""
//         this.player1Name = ""
//         this.player2Name = ""
//         this.board = [["", "", ""], ["", "", ""], ["", "", ""]]
//     }

//     LogFunction = () => console.log('log success')
// }


// sets the session, save JSON string as session storage
// JSON.stringify global method exists
// sessionStorage.setItem("key", "value")

// console.log(sessionStorage.getItem("key"))



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