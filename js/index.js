var button = document.querySelector('#button');
button.addEventListener('click', letsRoll);

function letsRoll(e) {
    e.preventDefault();

    // Picking Random Dice for Player One;

    var randomNumberOne = Math.floor(Math.random() * 6) + 1;

    var randomDiceImageOne = "dice" + randomNumberOne + ".png";

    var randomImageSourceOne = "images/" + randomDiceImageOne;

    var diceOne = document.querySelector("#diceOne");

    diceOne.setAttribute("src", randomImageSourceOne);


    // Picking Random Dice for Player Two;

    var randomNumberTwo = Math.floor(Math.random() * 6) + 1;

    var randomDiceImageTwo = "dice" + randomNumberTwo + ".png";

    var randomImageSourceTwo = "images/" + randomDiceImageTwo;

    var diceTwo = document.querySelector("#diceTwo");

    diceTwo.setAttribute("src", randomImageSourceTwo);


    // Control Flows - Picking the Winner;

    if (randomNumberOne > randomNumberTwo) {
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins! 🚩";
    }
    else if (randomNumberTwo > randomNumberOne) {
        document.querySelector("h1").innerHTML = "🚩 Player 2 Wins! 🚩";
    }
    else {
        document.querySelector("h1").innerHTML = "🙂 Draw! 🙂";
    }

}