console.log("Hello Bonjour World");

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
    playingNow: 0,
    wins: 0
};

//p2 Object
let p2 = {
    name: "",
    totalScore: 0,
    playingNow: 0,
    wins: 0
};

//Game Setup function
function setupGame() {
    alert("Bienvenu au Jeu de 7");
    inputPlayTo();
    inputPlayerNames();

}

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
    gameSate.whosTurn = Math.round(Math.random());
}



setupGame();