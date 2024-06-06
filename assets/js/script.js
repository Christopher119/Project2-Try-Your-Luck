//telling JSHint which version of JavaScript to check against
/* jshint esversion: 11 */

//function to only load in JS content once the webpage is fully loaded
//as learned in the Love Maths project
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("pull-1-button").addEventListener('click', rollOnce);
    document.getElementById("pull-10-button").addEventListener('click', rollTen);
    document.getElementById("reset-button").addEventListener('click', resetGame);
});

function rollOnce() {

    let result = calculateLuck();
    decrementHistory('rare');
    decrementHistory('ultra');

    if(checkHistory('full') <= 0){
        alert("You've used all your rolls, please reset and try again!");
        document.getElementById("fullHistory").innerText = 0;
        document.getElementById("rareHistory").innerText = 0;
        document.getElementById("ultraHistory").innerText = 0;
    }else if(checkHistory('ultra') == 0 || result == "Ultra Rare"){
        displayResults('ultra');
        //reset ultra history for logic
        document.getElementById("ultraHistory").innerText = 100;
        //catch to prevent any issues if an Ultra rare happens to roll at the same time
        //that a rare should roll, guaranteeing the rare on the next roll
        if(document.getElementById("rareHistory").innerText = 0){
            document.getElementById("rareHistory").innerText = 1;
        }
    }else if(checkHistory('rare') == 0 || result == "Rare"){
        displayResults('rare');
        //reset rare history for logic
        document.getElementById("rareHistory").innerText = 10;
    }else if(result == "Normal"){
        displayResults('normal');
    }else{
        alert(`error, unknown result: ${result}`);
    }

    decrementHistory('full');
}

//function that calls the rollOnce() function 10 times
function rollTen() {
    if(checkHistory('full') <= 0){
        alert("You've used all your rolls, please reset and try again!");
        document.getElementById("fullHistory").innerText = 0;
        document.getElementById("rareHistory").innerText = 0;
        document.getElementById("ultraHistory").innerText = 0;
    } else if(checkHistory('full') < 10){
        alert("Less than 10 rolls remaining, please roll x1");
    } else{
        for(let i = 0; i < 10; i++){
            rollOnce();
        }
    }
}

//function to hold the "luck" of each roll
function calculateLuck() {
    //random number between 1 and 200
    let odds = Math.floor(Math.random() * 200) + 1;
    let result;

    if(odds <=175){
        result = "Normal";
    } else if(odds >= 176 && odds <= 198){
        result = "Rare";
    } else if(odds > 198){
        result = "Ultra Rare";
    } else{
        console.log(`Error: Unexpected result: ${result}`);
        throw "Error: Unexpected result";
    }

    return result;
}

//function to push show JS dialog with results
//and add them to the history section
function displayResults(rollResult) {
    //create a new div to hold and assign the correct result
    let resultDiv = document.createElement("div");
    resultDiv.setAttribute("class", `${rollResult}-result`);
    //add the div to the results area
    document.getElementById("result-area").appendChild(resultDiv);
}

//function to clear and reset all history
function resetGame() {
    document.getElementById("result-area").innerHTML = "";
    document.getElementById("fullHistory").innerText = 100;
    document.getElementById("rareHistory").innerText = 10;
    document.getElementById("ultraHistory").innerText = 100;
}

//function to check how many rolls a user has made to give expected rewards
//or inform them they've made their max of 100
function checkHistory(historyType) {
    let history = parseInt(document.getElementById(`${historyType}History`).innerText);
    return history;
}

//functions to update roll counters for giving correct rewards at guartantees
//and to provide those numbers to the user
function decrementHistory(historyType) {
    let history = parseInt(document.getElementById(`${historyType}History`).innerText);
    document.getElementById(`${historyType}History`).innerText = history > 0 ? --history : 0;
}