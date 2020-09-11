//BUTTONS

let rockButton = document.getElementById('rock').onclick = playGame;
let paperButton = document.getElementById('paper').onclick = playGame;
let scissorsButton = document.getElementById('scissors').onclick = playGame;
let charmanderButton = document.getElementById('charmander').onclick = playGame;
let spockButton = document.getElementById('spock').onclick = playGame;

//INITIAL SCORING (HIDES SCORE UNTIL 1 POINT HAS BEEN MADE)

let playerScore = 1;
let computerScore = 1;
let rounds = 1;

//PLAY GAME
function playGame () {


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

    //WIN OR LOSE
    //displayOutcome()
    let result = compareChoices()
    //TRYOUT = Get result printed in result div
    document.getElementById('result').innerHTML = `${result}`;

function compareChoices (choiceOne, choiceTwo) {

        //TIE
        if (userChoice === cpuChoice) {
            document.getElementById('rounds').innerHTML = 'Rounds ' + rounds++;
            return "A wild Tie-fighter appeared! It's a draw!";

        }
        //PLAYER CHOICE ROCK

        if (userChoice === 'rock') {
            if (cpuChoice === 'scissors') {
                document.getElementById('playerScore').innerHTML = 'Wins' + playerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds ' + rounds++;
                return "In a flurry of panic, you throw your rock at your opponent, hitting his knee, tripping him. He falls on his scissors and dies! You win!";
            } else if (cpuChoice === 'charmander') {
                document.getElementById('playerScore').innerHTML = 'Wins ' + playerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds ' + rounds++;
                return "You bashed Charmander's head open, you psycho! You win!";
            } else if (cpuChoice === 'paper') {
                document.getElementById('computerScore').innerHTML = 'Losses' + computerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds  ' + rounds++;
                return "For some reason, a rock loses to a piece of paper so...you lost!";
            } else {
                document.getElementById('computerScore').innerHTML = 'Losses' + computerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds  ' + rounds++;
                return "Spock took your rock and considered it a rubber duck. It's gone now. You lost";
            }
        }
        //PLAYER CHOICE PAPER

        if (userChoice === 'paper') {
            if (cpuChoice === 'rock') {
                document.getElementById('playerScore').innerHTML = 'Wins ' + playerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds  ' + rounds++;
                return "Puny Rock, it has nothing on your piece of paper. Your piece of paper wraps around the rock and crushes it until all that is left is pebbles. You win!";
            } else if (cpuChoice === 'scissors') {
                document.getElementById('computerScore').innerHTML = 'Losses' + computerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds  ' + rounds++;
                return "You're opponent's eyes turn red with rage as he runs towards you, with scissors! Feeling the cold steel piercing your skin, you think to yourself 'He can't run with scissors, that's illegal'. You lost!";
            } else if (cpuChoice === 'charmander') {
                document.getElementById('computerScore').innerHTML = 'Losses ' + computerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds  ' + rounds++;
                return "You fold the paper into a nice origami flower and give it Charmander, he incinerates you in an instant. You lost."
            } else {
                document.getElementById('playerScore').innerHTML = 'Wins ' + playerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds  ' + rounds++;
                return "You whip out a pen and start disproving Spock, he can't handle it and fades away into sci-fi history. You win!"
            }
        }

//PLAYER CHOICE SCISSORS
        if (userChoice === 'scissors') {
            if (cpuChoice === 'rock') {
                document.getElementById('computerScore').innerHTML = 'Losses ' + computerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds  ' + rounds++;
                return "As you start running, he hits your knee with the rock and you fall down. Stabbing yourself in the eye during the fall. You lost. DON'T RUN WITH SCISSORS!"
            } else if (cpuChoice === 'paper') {
                document.getElementById('playerScore').innerHTML = 'Wins ' + playerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds  ' + rounds++;
                return "'Hahaha, he has a piece of paper!'you think to yourself whilst rushing at your opponent, scissors in hand. Slicing through his paper and skin alike. You win!"
            } else if (cpuChoice === 'charmander') {
                document.getElementById('computerScore').innerHTML = 'Losses ' + computerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds  ' + rounds++;
                return "'What a cute lizard' are your last thoughts as your skin melts from your bones and the smell of barbeque fills your nose. You lost."
            } else {
                document.getElementById('computerScore').innerHTML = 'Losses ' + computerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds  ' + rounds++;
                return "You run at Spock, trying to cut him. He disarms you in an instant and Vulcan Chops you to death. You lost."
            }
        }

//PLAYER CHOICE LIZARD/CHARMANDER
        if (userChoice === 'charmander') {
            if (cpuChoice === 'rock') {
                document.getElementById('computerScore').innerHTML = 'Losses ' + computerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds  ' + rounds++;
                return "'Go Charmander!' you shout as you throw your pokéball, Charmander erupts from his podlike prison and lets out a mighty 'Chaaaar!' before falling to the floor. A rock lodged in his forehead. You lost."
            } else if (cpuChoice === 'paper') {
                document.getElementById('playerScore').innerHTML = 'Wins ' + playerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds  ' + rounds++;
                return "'Charmander, flamethrower!' A stream of fire flies across the field, burning your opponent and his flimsy paper to a crisp. You win!"
            } else if (cpuChoice === 'scissors') {
                document.getElementById('playerScore').innerHTML = 'Wins ' + playerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds  ' + rounds++;
                return "As you see the madman running towards you with scissors, you whisper sweet nothings in Charmander's ear, which causes him to heat up, releasing a heatwave that melts your opponents into a soup of human residue. You win!"
            } else {
                document.getElementById('computerScore').innerHTML = 'Losses ' + computerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds  ' + rounds++;
                return "You order Charmander to burn Spock, but it would appear Charmander is part Vulcan and won't attack Spock. Instead they both attack and eat you. You lost."
            }
        }

//PLAYER CHOICE SPOCK
        if (userChoice === 'spock') {
            if (cpuChoice === 'rock') {
                document.getElementById('playerScore').innerHTML = 'Wins ' + playerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds  ' + rounds++;
                return "Making use of Spock's fighting abilities, you order him to Rubber Duck your opponent. He's in for a rude awakening. You win!"
            } else if
            (cpuChoice === 'paper') {
                document.getElementById('computerScore').innerHTML = 'Losses ' + computerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds  ' + rounds++;
                return "Spock hides behind you. Not sure why, you push him to the front and watch as he suddenly disappears into nothing. Maybe Spock was never real? You lost."
            } else if
            (cpuChoice === 'scissors') {
                document.getElementById('playerScore').innerHTML = 'Wins ' + playerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds  ' + rounds++;
                return "Spock takes the lead as he sees your opponent running with scissors. 'Not logical' you hear him saying as he screwdrives the madman into the ground. You win!"
            } else {
                document.getElementById('playerScore').innerHTML = 'Wins ' + playerScore++;
                document.getElementById('rounds').innerHTML = 'Rounds  ' + rounds++;
                return "Pokemon are part Vulcan, Spock knows that! He beckons Charmander over and together they vaporise your opponent and start snorting the remaining ashes. You win!"
            }
        }

    }


    if (playerScore > computerScore){
        console.log("*******************\nYou win!\n*******************");
    }
    else if (playerScore < computerScore){
        console.log("*******************\nComputer wins!\n*******************");
    }
    else {
        console.log("*******************\nIt's a gremlin tie!\n*******************");
    }
//DELAYS
        setTimeout(function(){
            document.getElementById('playerChoice').style.visibility = "visible";
        }, 0);
        setTimeout(function(){
            document.getElementById('cpuChoice').style.visibility = "visible";
        },500);
        setTimeout(function(){
            document.getElementById('result').style.visibility = "visible";
        },1000);


    if(playerScore > computerScore && rounds === 6){
        alert('You have won! This means nothing! Unless you chose scissors, the game was in your favor!');
        window.location.reload();
    }else if (playerScore < computerScore && rounds === 6){
        alert('You have died.');
        window.location.reload();
    }else if (playerScore === computerScore && rounds === 6){
        alert("What's a cool neck accessory? A TIE!");
            window.location.reload();
        }


}



//RESET BUTTON
const refreshButton = document.querySelector('.resetButton');

const refreshPage = () => {
    location.reload();
}

refreshButton.addEventListener('click', refreshPage);