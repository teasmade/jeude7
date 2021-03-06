console.log("Hello Bonjour World");
//player.playingNow property no longer needed?

//Game State Object
let gameState = {
    active: false,
    playTo: 0,
    whosTurn: undefined,
    p1Score: undefined,
    p2Score: undefined
};

//p1 Object
let p1 = {
    name: "",
    totalScore: 0,
    // playingNow: 0,
    wins: 0
};

//p2 Object
let p2 = {
    name: "",
    totalScore: 0,
    // playingNow: 0,
    wins: 0
};

//round State Object
let currentRound = {
    player: undefined,
    roundScore: 0,
    rollAgain: 0
};

//Game Setup function
function setupGame() {
    alert("Bienvenu au Jeu de 7");
    inputPlayTo();
    inputPlayerNames();
    decideFirstPlayer();

    function inputPlayTo() {
        while (gameState.playTo < 1) {
            gameState.playTo = parseInt(prompt("How many games do you want to play to?"));
            if (gameState.playTo >= 1) {
                alert(`The first player to win ${gameState.playTo} rounds will be the Champion!`);
            } else {
                alert("That doesn't look like a number - try again!");
                gameState.playTo = 0;
            }
            // Ternary operator here was nice but not for the reset to zero???
            // gameState.playTo >= 1 ? alert(`First player to win ${gameState.playTo} rounds will be the Champion!`) : alert("That doesn't look like a number - try again!");
        }
    }

    function inputPlayerNames() {
        while (p1.name === "") {
            p1.name = prompt("Please enter the name of Player 1");
            p1.name === "" ? alert("You have to enter a name!") : alert(`Welcome to the game, ${p1.name}`);
        }
        while (p2.name === "") {
            p2.name = prompt("Please enter the name of Player 2");
            p2.name === "" ? alert("You have to enter a name!") : alert(`Welcome to the game, ${p2.name}`);
        }
    }

    function decideFirstPlayer() {
        alert("We have randomly decided that the first player will be...");
        gameState.whosTurn = Math.round(Math.random()) + 1;
        if (gameState.whosTurn === 1) {
            // p1.playingNow = 1;
            currentRound.player = p1;
            alert(`... you, ${p1.name}`);
        } else {
            // p2.playingNow = 1;
            currentRound.player = p2;
            alert(`... you, ${p2.name}`);
        }
        gameState.p1Score = 0;
        gameState.p2Score = 0;
        gameState.active = true;
    }
}

let runningTotal = 0;

function rollRound() {

    let die1 = Math.ceil(Math.random() * 6);
    alert(`${currentRound.player.name} rolls a ${die1}...`);
    let die2 = Math.ceil(Math.random() * 6);
    alert(`... and a ... ${die2}`);
    let rollTotal = die1 + die2;
    if (die1 + die2 === 7) {
        runningTotal = 0;
        alert(`Oh no! ${currentRound.player.name} has rolled a total of 7, they score nothing this round!`);
        // tidy up work, pass the round to the next player
    } else {
        runningTotal += rollTotal;
        alert(`${currentRound.player.name} has rolled a total of ${rollTotal}`);
        alert(`${currentRound.player.name} has a total score this round of ${runningTotal}`);
        alert(`${currentRound.player.name}, do you want to continue to roll? Remember, if you roll a 7 your score will become zero!`);

        if (getContinueInput() === "Y") {
            die1 = 0;
            die2 = 0;
            alert(`OK ${currentRound.player.name}, roll the dice again...`)
            rollRound();
        } else {
            alert(`OK ${currentRound.player.name}, you scored ${runningTotal}.`)
        }
    }

    function getContinueInput() {
        let continueInput = "";
        while (continueInput != "Y" || continueInput != "N") {
            let input = prompt("Type Y to continue rolling; Type N to stop rolling.");
            continueInput = input.toUpperCase();
            return continueInput;
        }

    }
}




setupGame();

// while (p1.totalScore < gameState.playTo || p2.totalScore < gameState.playTo) {
//     rollRound();
// }