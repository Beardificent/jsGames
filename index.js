
let rockButton = document.getElementById('rock').onclick = playGame;
let paperButton = document.getElementById('paper').onclick = playGame;
let scissorsButton = document.getElementById('scissors').onclick = playGame;
let charmanderButton = document.getElementById('charmander').onclick = playGame;
let spockButton = document.getElementById('spock').onclick = playGame;

let rock = 'rock';
let paper ='paper';
let scissors = 'scissors';
let charmander = 'charmander';
let spock = 'spock';

let choices =  {rock : {name: 'rock', defeats : [charmander, scissors] },
                paper : {name: 'paper', defeats : [rock, spock]},
                scissors: {name: 'paper', defeats : [paper, charmander]},
                charmander: {name: 'charmander', defeats : [paper, spock]},
               spock : {name: 'spock', defeats : [scissors, rock]}
};

async function playGame () {
    let userChoice = this.id;
    document.getElementById('playerChoice').innerHTML = `You chose ${userChoice}`;

    let cpuChoice = Math.random();

    if (cpuChoice < 0.2) {
        cpuChoice = 'rock';
        document.getElementById('cpuChoice').innerHTML = `Opponent threw a ${cpuChoice}`;
    } else if (cpuChoice <= 0.4) {
        cpuChoice = 'paper';
        document.getElementById('cpuChoice').innerHTML = `Opponent came at you with a piece of ${cpuChoice}`;
    } else if (cpuChoice <= 0.6) {
        cpuChoice = 'scissors';
        document.getElementById('cpuChoice').innerHTML = `Opponent retaliated by trying to shank you with a pair of ${cpuChoice}`;
    } else if (cpuChoice <= 0.8) {
        cpuChoice = 'charmander';
        document.getElementById('cpuChoice').innerHTML = `Opponent called out ${cpuChoice}`;
    } else {
        cpuChoice = 'spock';
        document.getElementById('cpuChoice').innerHTML = `Opponent beamed down ${cpuChoice}`;
    }
    let result = compareChoices()
    //TRYOUT = Get result printed in result div
    document.getElementById('result').innerHTML = `${result}`;

function compareChoices (choiceOne, choiceTwo){
    if (userChoice === cpuChoice) {
        return 'The result is a tie!';
    }
    if (userChoice === 'rock'){
        if (cpuChoice === 'scissors'){
            return "Smashing victory!";
        } else if (cpuChoice === 'charmander'){
            return "You bashed Charmander's head open, you psycho!";
        } else if (cpuChoice === 'paper'){
            return "For some reason, a rock loses to a piece of paper so...you lost!";
        } else {
            return "Spock took your rock and considered it a rubber duck. It's gone now. You lost";
        }
    }

}




}
