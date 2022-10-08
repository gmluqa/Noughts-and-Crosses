sessionStorage.clear()

let playerSelectForm = document.getElementById("player-select-form")

playerSelectForm.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log("works")
})

console.log("script loads")