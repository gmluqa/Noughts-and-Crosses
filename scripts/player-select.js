sessionStorage.clear()

let playerSelectForm = document.getElementById("player-select-form")

playerSelectForm.addEventListener('submit', function (event) {
    event.preventDefault()
    let player1 = document.querySelector("input[name='player1']:checked").value
    let player1Name = document.getElementById("player1-name").value
    let player2 = document.querySelector("input[name='player2']:checked").value
    let player2Name = document.getElementById("player2-name").value

    const PlayerPayloadJsonify = (player1, player1Name, player2, player2Name) => [{ player: player1, playerName: player1Name }, { player: player2, playerName: player2Name }]
    let activePlayersPayload = PlayerPayloadJsonify(player1, player1Name, player2, player2Name)
    CheckEmptyNamesAndReplace(activePlayersPayload)

    // sessionStorage.setItem("")

    console.log(activePlayersPayload)



})


const CheckEmptyNamesAndReplace = (activePlayersPayload) => {
    for (let i = 0; i < activePlayersPayload.length; i++) {
        (activePlayersPayload[i].playerName == "") ? activePlayersPayload[i].playerName = "Player " + (i + 1) : void (0)
    }
}