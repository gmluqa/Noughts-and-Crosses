let winrar = sessionStorage.getItem("winner")
console.log(winrar)

if (winrar == null) {
    console.log("start again lol")
} else {
    console.log(winrar + " is the winner")
}

let winningPlayer = document.getElementById("winning-player")

winningPlayer.innerHTML = `${winrar} is the winner!`

sessionStorage.removeItem("winner")