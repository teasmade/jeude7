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

function rollRound() {

}



setupGame();

while (p1.totalScore < gameState.playTo || p2.totalScore < gameState.playTo) {
    rollRound();
}