
let rock = document.getElementById('rock').onclick = playGame;
let paper = document.getElementById('paper').onclick = playGame;
let scissors = document.getElementById('scissors').onclick = playGame;
function playGame () {
    let userChoice = this.id;
    console.log(`You selected ${userChoice}`);

};