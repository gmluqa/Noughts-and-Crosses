let winrar = sessionStorage.getItem("winner")
console.log(winrar)

let winningPlayer = document.getElementById("winning-player")

if (winrar == null) {
    winningPlayer.innerHTML = `<b>Please start <a href=./../index.html>again!</a></b>`
} else {
    winningPlayer.innerHTML = `<b>${winrar} is the winner! Start <a href=./../index.html>again?</a>   </b> `
}




sessionStorage.removeItem("winner")