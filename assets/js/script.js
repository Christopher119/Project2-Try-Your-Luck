//function to only load in JS content once the webpage is fully loaded
//as learned in the Love Maths project
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("pull-1-button").addEventListener('click', rollOnce);
    document.getElementById("pull-10-button").addEventListener('click', rollTen);
    document.getElementById("reset-button").addEventListener('click', resetGame);
});

function rollOnce() {

    let result = calculateLuck();
    decrementRareHistory();
    decrementUltraHistory();

    if(checkHistory() <= 0){
        alert("You've used all your rolls, please reset and try again!")
        document.getElementById("fullHistory").innerText = 0;
        document.getElementById("rareHistory").innerText = 0;
        document.getElementById("ultraHistory").innerText = 0;
    }else if(result == "Ultra Rare"){
        //create a new div to hold and assign the correct result
        let resultDiv = document.createElement("div");
        resultDiv.setAttribute("class", "ultra-result");
        //add the div to the results area
        document.getElementById("result-area").appendChild(resultDiv);
        //reset ultra history for logic
        document.getElementById("ultraHistory").innerText = 100;
    }else if(result == "Rare"){
        //create a new div to hold and assign the correct result
        let resultDiv = document.createElement("div");
        resultDiv.setAttribute("class", "rare-result");
        //add the div to the results area
        document.getElementById("result-area").appendChild(resultDiv);
        //reset rare history for logic
        document.getElementById("rareHistory").innerText = 10;
    }else if(result == "Normal"){
        //create a new div to hold and assign the correct result
        let resultDiv = document.createElement("div");
        resultDiv.setAttribute("class", "normal-result");
        //add the div to the results area
        document.getElementById("result-area").appendChild(resultDiv);
    }else{
        alert(`error, unknown result: ${result}`);
    }

    decrementHistory();
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

    if(odds <=150){
        result = "Normal";
    } else if(odds > 151 && odds <= 198){
        result = "Rare";
    } else if(odds > 198){
        result = "Ultra Rare";
    } else{
        console.log(`Error: Unexpected result: ${result}`);
        throw "Error: Unexpected result";
    }

    return result;
}

//function to push show JS modal of results
//and add them to the history section
function displayResults() {}

//function to clear and reset all history
function resetGame() {
    document.getElementById("result-area").innerHTML = "";
    document.getElementById("fullHistory").innerText = 100;
    document.getElementById("rareHistory").innerText = 10;
    document.getElementById("ultraHistory").innerText = 100;
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
function decrementHistory() {
    fullHistory = parseInt(document.getElementById("fullHistory").innerText);
    document.getElementById("fullHistory").innerText = --fullHistory;
}
function decrementRareHistory() {
    rareHistory = parseInt(document.getElementById("rareHistory").innerText);
    document.getElementById("rareHistory").innerText = --rareHistory;
}
function decrementUltraHistory() {
    ultraHistory = parseInt(document.getElementById("ultraHistory").innerText);
    document.getElementById("ultraHistory").innerText = --ultraHistory;
}


