//function to only load in JS content once the webpage is fully loaded
//as learned in the Love Maths project
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("pull-1-button").addEventListener('click', rollOnce);
    document.getElementById("pull-1-button").addEventListener('click', rollTen);
    document.getElementById("reset-button").addEventListener('click', resetGame);
});

function rollOnce() {
    
}

//function that calls the rollOnce() function 10 times
function rollTen() {
    if(checkHistory() < 10){
        alert("Less than 10 rolls remaining, please roll x1");
    }
    else{
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

    if(odds <=100){
        result = "Normal";
    } else if(odds > 100 && odds <= 195){
        result = "Rare";
    } else if(odds > 195){
        result = "Ultra Rare";
    } else{
        console.log("Error: Unexpected result");
        throw "Error: Unexpected result";
    }
}

//function to push show JS modal of results
//and add them to the history section
function displayResults() {}

//function to clear and reset all history
function resetGame(){

}

//functions to check how many rolls a user has made to give expected rewards
//or inform them they've made their max of 100
function checkHistory() {
    fullHistory = parseInt(document.getElementById("fullHistory").innerText);
    return fullHistory;
}

function checkRareHistory() {
    rareHistory = parseInt(document.getElementById("rareHistory").innerText);
    return rareHistory;
}

function checkUltraHistory() {
    ultraHistory = parseInt(document.getElementById("ultraHistory").innerText);
    return ultraHistory;
}

//functions to update roll counters for giving correct rewards at guartantees
//and to provide those numbers to the user
function incrementHistory() {
    fullHistory = parseInt(document.getElementById("fullHistory").innerText);
    document.getElementById("fullHistory").innerText = --fullHistory;
}
function incrementRareHistory() {
    rareHistory = parseInt(document.getElementById("rareHistory").innerText);
    document.getElementById("rareHistory").innerText = --rareHistory;
}
function incrementUltraHistory() {
    ultraHistory = parseInt(document.getElementById("ultraHistory").innerText);
    document.getElementById("ultraHistory").innerText = --ultraHistory;
}
