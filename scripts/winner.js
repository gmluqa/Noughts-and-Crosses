let winrar = sessionStorage.getItem("winner")
console.log(winrar)

let winningPlayer = document.getElementById("winning-player")

if (winrar == null) {
    winningPlayer.innerHTML = `Please start <a href=./../index.html>again!</a>`
} else {
    winningPlayer.innerHTML = `${winrar} is the winner!`
}




sessionStorage.removeItem("winner")