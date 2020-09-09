
let rock = document.getElementById('rock').onclick = playGame;
let paper = document.getElementById('paper').onclick = playGame;
let scissors = document.getElementById('scissors').onclick = playGame;
let charmander = document.getElementById('charmander').onclick = playGame;
let spock = document.getElementById('spock').onclick = playGame;

let choices =  {rock : {name: "rock", defeats : [charmander, scissors] },
                paper : {name: "paper", defeats : [rock, spock]},
                scissors: {name: "paper", defeats : [paper, charmander]},
                charmander: {name: "charmander", defeats : [paper, spock]},
               spock : {name: "spock", defeats : [scissors, rock]}
};


    choices  =  {rock : {name: "Rock", defeats: ["scissors","lizard"]},
        paper: {name: "Paper", defeats: ["rock", "spock"]},
        scissors: {name: "Scissors", defeats: ["paper", "lizard"]},
        lizard: {name: "Lizard", defeats:["paper","spock"]},
        spock: {name: "Spock", defeats:["scissors","rock"]}
    };





async function playGame () {
    let userChoice = this.id;

    document.getElementById("playerChoice").innerHTML = `You chose ${await userChoice}`;

    let cpuChoice = Math.random();

    if (cpuChoice < 0.2) {
        cpuChoice = 'Rock';
        document.getElementById("cpuChoice").innerHTML = `Opponent threw a ${cpuChoice}`;
    } else if (cpuChoice <= 0.4) {
        cpuChoice = 'Paper';
        document.getElementById("cpuChoice").innerHTML = `Opponent came at you with a piece of ${cpuChoice}`;
    } else if (cpuChoice <= 0.6) {
        cpuChoice = 'Scissors';
        document.getElementById("cpuChoice").innerHTML = `Opponent retaliated by trying to shank you with a pair of ${cpuChoice}`;
    } else if (cpuChoice <= 0.8) {
        cpuChoice = 'Charmander';
        document.getElementById("cpuChoice").innerHTML = `Opponent called out ${cpuChoice}`;
    } else {
        cpuChoice = 'Spock'
        document.getElementById("cpuChoice").innerHTML = `Opponent beamed down ${cpuChoice}`;
    }


}
