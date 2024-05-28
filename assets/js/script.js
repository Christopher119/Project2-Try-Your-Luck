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

//function to check how many rolls a user has made to give expected rewards
//or inform them they've made their max of 100
function checkHistory() {
    let history = {
        fullHistory: 0,
        rareHistory: 0,
        ultraHistory: 0
    };
}

function incrementHistory() {}
function incrementRareHistory() {}
function incrementUltraHistory() {}
