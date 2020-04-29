var rpsChoices = ["r", "p", "s"];
// console.log(rpsChoices);
var wins = 0;
var losses = 0;
var ties = 0;

var userPickText = document.getElementById('user-pick');
var compPickText = document.getElementById('comp-pick');
var winsText = document.getElementById('wins');
var lossesText = document.getElementById('losses');
var tiesText = document.getElementById('ties');

// Whenever a key is pressed, alert "pressed a button".
document.getElementById("rock").onclick = function(event, userPick) {
    userPick = document.getElementById("rock").value;
    console.log("this is the rock button")
    console.log("this is the rock button value", userPick);
    computerPick();
    runGame(userPick);
};

document.getElementById("paper").onclick = function(event, userPick) {
    userPick = document.getElementById("paper").value;
    console.log("this is the paper button")
    console.log("this is the paper button value", userPick);
    computerPick();
    runGame(userPick);
};

document.getElementById("scissors").onclick = function(event, userPick) {
    userPick = document.getElementById("scissors").value;
    console.log("this is the scissors button")
    console.log("this is the scissors button value", userPick);
    computerPick();
    runGame(userPick);
};

    // logic for computer pick/letter 
function computerPick(compPick) {
    compPick = rpsChoices[Math.floor(Math.random() * rpsChoices.length)]
    console.log("This is my random letter", compPick)
}

function runGame(userPick, compPick) {
    // if ((userPick === "r") || (userPick === "p") || (userPick === "s")){
        if (userPick === "r" && compPick === "s" || userPick === "p" && compPick === "r" || userPick === "s" && compPick === "p") {
            wins++;
            console.log("user pick - if statement", userPick);
            console.log("comp pick - if statement", compPick);
            }
            else if(userPick === compPick) {
            ties++;
            console.log("user pick - else if statement", userPick);
            console.log("comp pick - else if statement", compPick);
            }
            else {
            losses++;
            console.log("user pick - else statement", userPick);
            console.log("comp pick - else statement", compPick);
        }
        userPickText.innerHTML = "You chose: " + userPick;
        compPickText.innerHTML = "Computer chose: " + compPick;
        winsText.innerHTML = "Wins: " + wins;
        lossesText.innerHTML = "Losses: " + losses;
        tiesText.innerHTML = "Ties: " + ties;
        
        reset();
      }
    //    else {
    //   alert ("You must choose R, P, or S to play the game")
    //  }
// }





    function reset() {
        if (wins === 5 || losses === 3) {
            wins = 0;
            losses = 0;
            ties = 0;
        }
    }