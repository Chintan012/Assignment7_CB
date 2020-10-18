var userInput;
var computerInput

/**
 * take input from user and select a random input from computer
 */
function userAndComputerInputs() {
    "use strict";
    window.alert("Welcome to rock paper scissors game");
    userInput = window.prompt("Choose Rock(R), Paper(P) or Scissors(S). To lock down your choice, enter the letter provided in the brackets");
    userInput = userInput.toUpperCase();
    if (!(userInput == "R" || userInput == "P" || userInput == "S")) {
        window.alert("Invalid input. Please select again");
        userAndComputerInputs();
    }
    else {
        computerInput = Math.random();
        if (computerInput < 0.34) {
            computerInput = "R";
        } else if (computerInput <= 0.67) {
            computerInput = "P";
        } else {
            computerInput = "S";
        }
    }
    playGame(userInput, computerInput);
}

/**
 * 
 * @param {*} userInput input taken from user
 * @param {*} computerInput input generated by the computer
 */
function playGame(userInput, computerInput) {

    "use strict";
    if (userInput == computerInput) {
        return "You both selected " + userInput + ". Its a tie."
    }

    if (userInput == "R") {
        if (computerInput == "P") {
            window.alert("You loose... Paper covers rock! Computer selected: " + computerInput);
        } else if (computerInput == "S") {
            window.alert("You win... Rock destroys scissors! Computer selected: " + computerInput);
        }
    }

    if (userInput == "P") {
        if (computerInput == "R") {
            window.alert("You win... Paper covers rock! Computer selected: " + computerInput);
        } else if (computerInput == "S") {
            window.alert("You loose... Scissors cut paper! Computer selected: " + computerInput);
        }
    }

    if (userInput === "S") {
        if (computerInput === "P") {
            window.alert("You win... Scissor cut paper! Computer selected: " + computerInput);
        } else if (computerInput == "R") {
            window.alert("You loose... Rock destroys scissors! Computer selected: " + computerInput);
        }
    }

    var again = window.prompt("Do you wish to play again ? ");
    if (again == "y") userAndComputerInputs();
}

function main() {
    userAndComputerInputs();
}
main();