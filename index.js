
let Rock = document.getElementById('Rock').onclick = playGame;
let Paper = document.getElementById('Paper').onclick = playGame;
let Scissors = document.getElementById('Scissors').onclick = playGame;
let Charmander = document.getElementById('Charmander').onclick = playGame;
let Spock = document.getElementById('Spock').onclick = playGame;


async function playGame () {
    let userChoice = this.id;
    document.getElementById("playerChoice").innerHTML = `You chose ${await userChoice}`;
    let cpuChoice = Math.random();
    if (cpuChoice < 0.2) {
        cpuChoice = 'Rock';
    } else if (cpuChoice <= 0.4) {
        cpuChoice = 'Paper';
    } else if (cpuChoice <= 0.6) {
        cpuChoice = 'Scissors';
    } else if (cpuChoice <= 0.8) {
        cpuChoice = 'Charmander';
    } else {
        cpuChoice = 'Spock'
    }
    document.getElementById("cpuChoice").innerHTML = `Opponent retaliated with ${cpuChoice}`;


}
