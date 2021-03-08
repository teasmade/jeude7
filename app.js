<<<<<<< HEAD

// Game State Object
=======
console.log("Hello Bonjour World");
//player.playingNow property no longer needed?

//Game State Object
>>>>>>> 8963422f1b1ca898444184eef44af529e1075815
let gameState = {
    active: false,
    playTo: 0,
    roundsRolled: 0,
<<<<<<< HEAD
};

// Player 1 Object
let p1 = {
    name: "",
    roundRollTotal: 0,
    roundWins: 0
};

// Player 2 Object
let p2 = {
    name: "",
    roundRollTotal: 0,
    roundWins: 0
};

// Round State Object
=======
    whosTurn: undefined,
    p1Score: undefined, // possibly not needed
    p2Score: undefined  // possibly not needed
};

//p1 Object
let p1 = {
    name: "",
    roundRollTotal: 0,
    // playingNow: 0,
    roundWins: 0
};

//p2 Object
let p2 = {
    name: "",
    roundRollTotal: 0,
    // playingNow: 0,
    roundWins: 0
};

//round State Object
>>>>>>> 8963422f1b1ca898444184eef44af529e1075815
let currentRound = {
    rollingPlayer: undefined,
    firstPlayer: undefined,
    secondPlayer: undefined,
    roundOver: false
<<<<<<< HEAD
};


// Game Setup function
function setupGame() {
    console.log("Bienvenu au Jeu de 7");
=======
    // roundScore: 0,
    // rollAgain: 0
};

//Game Setup function
function setupGame() {
    alert("Bienvenu au Jeu de 7");
>>>>>>> 8963422f1b1ca898444184eef44af529e1075815
    inputPlayTo();
    inputPlayerNames();
    decideFirstPlayer();

    // get and parse input for how many games to play
    function inputPlayTo() {
        while (gameState.playTo < 1) {
            gameState.playTo = parseInt(prompt("How many games do you want to play to?"));
            if (gameState.playTo >= 1) {
<<<<<<< HEAD
                console.log(`The first player to win ${gameState.playTo} rounds will be the Champion!`);
            } else {
                console.log("That doesn't look like a number - try again!");
=======
                alert(`The first player to win ${gameState.playTo} rounds will be the Champion!`);
            } else {
                alert("That doesn't look like a number - try again!");
>>>>>>> 8963422f1b1ca898444184eef44af529e1075815
                gameState.playTo = 0;
            }
        }
    }

    // get and parse input for player names
    function inputPlayerNames() {
        while (p1.name === "") {
            p1.name = prompt("Please enter the name of Player 1");
<<<<<<< HEAD
            p1.name === "" ? console.log("You have to enter a name!") : console.log(`Welcome to the game, ${p1.name}`);
        }
        while (p2.name === "") {
            p2.name = prompt("Please enter the name of Player 2");
            p2.name === "" ? console.log("You have to enter a name!") : console.log(`Welcome to the game, ${p2.name}`);
=======
            p1.name === "" ? alert("You have to enter a name!") : alert(`Welcome to the game, ${p1.name}`);
        }
        while (p2.name === "") {
            p2.name = prompt("Please enter the name of Player 2");
            p2.name === "" ? alert("You have to enter a name!") : alert(`Welcome to the game, ${p2.name}`);
>>>>>>> 8963422f1b1ca898444184eef44af529e1075815
        }
    }

    // randomly choose first player
    function decideFirstPlayer() {
<<<<<<< HEAD
        console.log("We have randomly decided that the first player will be...");
=======
        alert("We have randomly decided that the first player will be...");
>>>>>>> 8963422f1b1ca898444184eef44af529e1075815
        gameState.whosTurn = Math.round(Math.random()) + 1;
        if (gameState.whosTurn === 1) {
            // p1.playingNow = 1;
            currentRound.rollingPlayer = p1;
            currentRound.firstPlayer = p1;
            currentRound.secondPlayer = p2;
<<<<<<< HEAD
            console.log(`... you, ${p1.name}`);
=======
            alert(`... you, ${p1.name}`);
>>>>>>> 8963422f1b1ca898444184eef44af529e1075815
        } else {
            // p2.playingNow = 1;
            currentRound.rollingPlayer = p2;
            currentRound.firstPlayer = p2;
            currentRound.secondPlayer = p1;
<<<<<<< HEAD
            console.log(`... you, ${p2.name}`);
        }
    }
}


// Main game play function
function rollRound() {
    let runningTotal = 0;
=======
            alert(`... you, ${p2.name}`);
        }
        gameState.p1Score = 0;
        gameState.p2Score = 0;
        gameState.active = true;
    }
}

let runningTotal = 0; // can this go inside the rollRound function???

// roll the dice, tally rounds, continue or not
function rollRound() {
>>>>>>> 8963422f1b1ca898444184eef44af529e1075815
    gameState.roundsRolled++;

    // generate 2 dice scores
    let die1 = Math.ceil(Math.random() * 6);
<<<<<<< HEAD
    console.log(`${currentRound.rollingPlayer.name} rolls a ${die1}...`);
    let die2 = Math.ceil(Math.random() * 6);
    console.log(`... and a ... ${die2}`);
=======
    alert(`${currentRound.rollingPlayer.name} rolls a ${die1}...`);
    let die2 = Math.ceil(Math.random() * 6);
    alert(`... and a ... ${die2}`);
>>>>>>> 8963422f1b1ca898444184eef44af529e1075815
    let rollTotal = die1 + die2;
    // check for the 7 roll
    if (die1 + die2 === 7) {
        runningTotal = 0;
<<<<<<< HEAD
        console.log(`Oh no! ${currentRound.rollingPlayer.name} has rolled a total of 7, they score nothing this round!`);
=======
        alert(`Oh no! ${currentRound.rollingPlayer.name} has rolled a total of 7, they score nothing this round!`);
>>>>>>> 8963422f1b1ca898444184eef44af529e1075815
        scoreRoll();
    } else {
        // update round total for currently rolling player
        runningTotal += rollTotal;
<<<<<<< HEAD
        console.log(`${currentRound.rollingPlayer.name} has rolled a total of ${rollTotal}`);
        console.log(`${currentRound.rollingPlayer.name} has a total score this round of ${runningTotal}`);
        // check if currently rolling player wants to continue to roll
        console.log(`${currentRound.rollingPlayer.name}, do you want to continue to roll? Remember, if you roll a 7 your score will become zero!`);
=======
        alert(`${currentRound.rollingPlayer.name} has rolled a total of ${rollTotal}`);
        alert(`${currentRound.rollingPlayer.name} has a total score this round of ${runningTotal}`);
        // check if currently rolling player wants to continue to roll
        alert(`${currentRound.rollingPlayer.name}, do you want to continue to roll? Remember, if you roll a 7 your score will become zero!`);
>>>>>>> 8963422f1b1ca898444184eef44af529e1075815
        // wants to roll again
        if (getContinueInput() === "Y") {
            die1 = 0;
            die2 = 0;
<<<<<<< HEAD
            console.log(`OK ${currentRound.rollingPlayer.name}, roll the dice again...`)
            rollRound();
        } else {
            // does not want to roll again
            console.log(`OK ${currentRound.rollingPlayer.name}, you scored ${runningTotal}.`)
=======
            alert(`OK ${currentRound.rollingPlayer.name}, roll the dice again...`)
            rollRound();
        } else {
            // does not want to roll again
            alert(`OK ${currentRound.rollingPlayer.name}, you scored ${runningTotal}.`)
>>>>>>> 8963422f1b1ca898444184eef44af529e1075815
            scoreRoll();
        }
    }

    // get and parse input for continue to roll or not
    function getContinueInput() {
        let continueInput = "";
        while (continueInput != "Y" || continueInput != "N") {
            let input = prompt("Type Y to continue rolling; Type N to stop rolling.");
            continueInput = input.toUpperCase();
            return continueInput;
        }

    }

    // RESET RUNNING TOTAL ANYWHERE ELSE?
    function scoreRoll() {
        // update current player's roll total for this round
        currentRound.rollingPlayer.roundRollTotal = runningTotal;
        // check to see whether player who just rolled was first or second this round
        // if first, second player needs to roll
        if (currentRound.rollingPlayer === currentRound.firstPlayer) {
<<<<<<< HEAD
            console.log(`OK, ${currentRound.rollingPlayer.name} has finished rolling. ${currentRound.rollingPlayer.roundRollTotal} is the score to beat...`)
            // set second player to be rolling
            currentRound.rollingPlayer = currentRound.secondPlayer;
            console.log(`Right, ${currentRound.rollingPlayer.name}, your turn to throw the dice!`);
=======
            alert(`OK, ${currentRound.rollingPlayer.name} has finished rolling. ${currentRound.rollingPlayer.roundRollTotal} is the score to beat...`)
            // set second player to be rolling
            currentRound.rollingPlayer = currentRound.secondPlayer;
            alert(`Right, ${currentRound.rollingPlayer.name}, your turn to throw the dice!`);
>>>>>>> 8963422f1b1ca898444184eef44af529e1075815
            // reset runningTotal
            runningTotal = 0;
            rollRound();
        } else {
            // end the round, compare scores, update total wins
            if (p1.roundRollTotal === p2.roundRollTotal) {
                //players have scored the same, alert and don't increment Wins
<<<<<<< HEAD
                console.log(`${p1.name} and ${p2.name} both scored ${p1.roundRollTotal} - that's a draw!`);
                console.log(`Scores remain unchanged, ${p1.name} has won ${p1.roundWins} rounds and ${p2.name} has won ${p2.roundWins} rounds. First player to win ${gameState.playTo} rounds will win!`);
            } else if (p1.roundRollTotal > p2.roundRollTotal) {
                //p1 wins the round, alert and increment wins
                console.log(`${p1.name} wins that round, they rolled ${p1.roundRollTotal}, ${p2.name} could only manage to roll ${p2.roundRollTotal}!`);
                p1.roundWins++;
            } else {
                //p2 wins the round, alert and increment wins
                console.log(`${p2.name} wins that round, they rolled ${p2.roundRollTotal}, ${p1.name} could only manage to roll ${p1.roundRollTotal}!`);
                p2.roundWins++;
            }

            // on any round after the first, if someone hasn't won, swap who rolls first in next round
=======
                alert(`${p1.name} and ${p2.name} both scored ${p1.roundRollTotal} - that's a draw!`);
                alert(`Scores remain unchanged, ${p1.name} has won ${p1.roundWins} rounds and ${p2.name} has won ${p2.roundWins} rounds. First player to win ${gameState.playTo} rounds will win!`);
            } else if (p1.roundRollTotal > p2.roundRollTotal) {
                //p1 wins the round, alert and increment wins
                alert(`${p1.name} wins that round, they rolled ${p1.roundRollTotal}, ${p2.name} could only manage to roll ${p2.roundRollTotal}!`);
                p1.roundWins++;
            } else {
                //p2 wins the round, alert and increment wins
                alert(`${p2.name} wins that round, they rolled ${p2.roundRollTotal}, ${p1.name} could only manage to roll ${p1.roundRollTotal}!`);
                p2.roundWins++;
            }

            // on any round after the first, swap who rolls first in next round.
>>>>>>> 8963422f1b1ca898444184eef44af529e1075815
            // at the end of each round:
            // rolling player (old) is second player (old)
            // second player (new) = first player (old)
            // first player (new) = rolling player (old)
<<<<<<< HEAD
            if (gameState.roundsRolled > 0 && p1.roundWins < gameState.playTo && p2.roundWins < gameState.playTo) {
                currentRound.secondPlayer = currentRound.firstPlayer;
                currentRound.firstPlayer = currentRound.rollingPlayer;
                console.log(`Next round... ${currentRound.firstPlayer.name} will roll first this time...`);
                console.log(`The score is currently...\n
=======
            if (gameState.roundsRolled > 0) {
                currentRound.secondPlayer = currentRound.firstPlayer;
                currentRound.firstPlayer = currentRound.rollingPlayer;
                alert(`Next round... ${currentRound.firstPlayer.name} will roll first this time...`);
                alert(`The score is currently...\n
>>>>>>> 8963422f1b1ca898444184eef44af529e1075815
                ${p1.name} : ${p1.roundWins} wins\n
                ${p2.name} : ${p2.roundWins} wins\n
                First player to ${gameState.playTo} will win the game!`);
                runningTotal = 0;
                p1.roundRollTotal = 0;
                p2.roundRollTotal = 0;
            }
        }
    }
}

<<<<<<< HEAD
// End of game winner message
function scoreGame() {
    if (p1.roundWins > p2.roundWins) {
        console.log(`That's it! ${p1.name} has won the game, beating ${p2.name}, ${p1.roundWins} rounds to ${p2.roundWins}`);
    } else {
        console.log(`That's it! ${p2.name} has won the game, beating ${p1.name}, ${p2.roundWins} rounds to ${p1.roundWins}`);
    }
}


=======
function scoreGame() {
    if (p1.roundWins > p2.roundWins) {
        alert(`That's it! ${p1.name} has won the game, beating ${p2.name}, ${p1.roundWins} rounds to ${p2.roundWins}`);
    } else {
        alert(`That's it! ${p2.name} has won the game, beating ${p1.name}, ${p2.roundWins} rounds to ${p1.roundWins}`);
    }
}

>>>>>>> 8963422f1b1ca898444184eef44af529e1075815
setupGame();

while (p1.roundWins < gameState.playTo && p2.roundWins < gameState.playTo) {
    rollRound();
}

scoreGame();