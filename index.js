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
document.getElementById("rock").onclick = function(event) {
    // var userPick = button.val("rock");
    console.log("this is the rock button")
    computerPick();
   
};
document.getElementById("paper").onclick = function(event) {

    console.log("this is the paper button")
    computerPick();
};
document.getElementById("scissors").onclick = function(event) {

    console.log("this is the scissors button")
    computerPick();
};
    // logic for computer pick/letter 
function computerPick() {
    var compPick = rpsChoices[Math.floor(Math.random() * rpsChoices.length)]
    console.log("This is my random letter", compPick)
}


    // logic for game - conditionals 
// if ((userPick === "r") || (userPick === "p") || (userPick === "s")){
//     if (userPick === "r" && compPick === "s" || userPick === "p" && compPick === "r" || userPick === "s" && compPick === "p") {
//         wins++;
//         }else if(userPick === compPick) {
//         ties++;
//         }else {
//         losses++;
//     }
//     userPickText.innerHTML = "You chose: " + userPick;
//     compPickText.innerHTML = "Computer chose: " + compPick;
//     winsText.innerHTML = "Wins: " + wins;
//     lossesText.innerHTML = "Losses: " + losses;
//     tiesText.innerHTML = "Ties: " + ties;
    
//     reset();
//   } else {
//   alert ("You must choose R, P, or S to play the game")
//  }


    function reset() {
        if (wins === 5 || losses === 3) {
            wins = 0;
            losses = 0;
            ties = 0;
        }
    }