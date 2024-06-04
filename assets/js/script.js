//function to only load in JS content once the webpage is fully loaded
//as learned in the Love Maths project
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("pull-1-button").addEventListener('click', rollOnce);
    document.getElementById("pull-1-button").addEventListener('click', rollTen);
});

function rollOnce() {
    
}

function rollTen() {}

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

function displayResults() {}

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
