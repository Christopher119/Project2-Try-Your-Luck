//telling JSHint which version of JavaScript to check against
/* jshint esversion: 11 */

//function to only load in JS content once the webpage is fully loaded
//as learned in the Love Maths project
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("pull-1-button").addEventListener('click', rollOnce);
    document.getElementById("pull-10-button").addEventListener('click', rollTen);
    document.getElementById("reset-button").addEventListener('click', resetGame);
    document.getElementById("start-button").addEventListener('click', startGame);
});

function rollOnce() {

    let result = calculateLuck();
    decrementHistory('rare');
    decrementHistory('ultra');

    if(checkHistory('full') <= 0){
        noRollsRemaining();
    }else if(checkHistory('ultra') == 0 || result == "Ultra Rare"){
        displayResults('ultra');
        //reset ultra history for logic
        resetGuarantee('ultra', 100);
        //catch to prevent any issues if an Ultra rare happens to roll at the same time
        //that a rare should roll, guaranteeing the rare on the next roll
        if(checkHistory('rare') == 0){
            resetGuarantee('rare', 1);
        }
    }else if(checkHistory('rare') == 0 || result == "Rare"){
        displayResults('rare');
        //reset rare history for logic
        resetGuarantee('rare', 10);
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
        noRollsRemaining();
    } else if(checkHistory('full') < 10){
        //using dialog boxes to create modals instead of alerts
        let popup = document.getElementById("popup");
        popup.showModal();
        popup.innerHTML = `<form method="dialog">
            <h2>Less than 10 rolls remaining!</h2>
            <p>Please roll x1!</p>
            <br>
            <button type="submit" id="popup-button">Okay</button>
            <br>
        </form>`;
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

    //Roughly 1% odds for ultra rare, 10% for rare
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

    resultDiv.setAttribute("id", `${rollResult}`);
    resultDiv.style.background = addResultPic(rollResult);

    //add the div to the results area
    document.getElementById("result-area").appendChild(resultDiv);
}

function addResultPic(rollResult){
    //array containing various images for the roll rewards
    let possibleRolls = [];

    //populating the array with "normal" roll result images
    if(rollResult == "normal"){
        possibleRolls = [`url("assets/images/roll-results/${rollResult}/${rollResult}-ring-1.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-ring-2.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-ring-3.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-ring-4.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-ring-5.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-ring-6.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-ring-7.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-ring-8.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-1.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-2.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-3.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-4.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-5.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-6.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-7.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-8.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-9.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-10.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-11.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-12.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-13.webp")`,
            `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-14.webp")`,
        ];
    }//populating the array with "rare" roll result images
    else if(rollResult == "rare"){
        possibleRolls = [`url("assets/images/roll-results/${rollResult}/${rollResult}-ring-1.webp")`,
        `url("assets/images/roll-results/${rollResult}/${rollResult}-ring-2.webp")`,
        `url("assets/images/roll-results/${rollResult}/${rollResult}-ring-3.webp")`,
        `url("assets/images/roll-results/${rollResult}/${rollResult}-ring-4.webp")`,
        `url("assets/images/roll-results/${rollResult}/${rollResult}-ring-5.webp")`,
        `url("assets/images/roll-results/${rollResult}/${rollResult}-ring-6.webp")`,
        `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-1.webp")`,
        `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-2.webp")`,
        `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-3.webp")`,
        `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-4.webp")`,
        `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-5.webp")`,
        `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-6.webp")`,
        `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-7.webp")`,
        `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-8.webp")`,
        `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-9.webp")`,
        ];
    }//populating the array with "ultra" roll result images
    else if(rollResult == "ultra"){
        possibleRolls = [`url("assets/images/roll-results/${rollResult}/${rollResult}-ring-1.webp")`,
        `url("assets/images/roll-results/${rollResult}/${rollResult}-ring-2.webp")`,
        `url("assets/images/roll-results/${rollResult}/${rollResult}-ring-3.webp")`,
        `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-1.webp")`,
        `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-2.webp")`,
        `url("assets/images/roll-results/${rollResult}/${rollResult}-sword-3.webp")`,
        ];
    }//catch in the event of a roll error
    else{
        console.log(`Error: Invalid roll result ${rollResult}`);
        throw(`Error: Invalid roll result ${rollResult}`);
    }

    //picking a random image
    let result = Math.floor(Math.random() * possibleRolls.length);
    //returning that random image
    return possibleRolls[result];
}

//function to reset rare or ultra guarantee amounts after rolling one
function resetGuarantee(historyType, amount){
    document.getElementById(`${historyType}History`).innerText = amount;
}

//simple function to set all remaining rolls to 0 once the user has
//rolled 100 times and disable the roll buttons
function noRollsRemaining(){
    //using dialog boxes to create modals instead of alerts
    let popup = document.getElementById("popup");
    popup.showModal();
    popup.innerHTML = `<form method="dialog">
        <h2>You've used all your rolls!</h2>
        <p>Please reset and try again!</p>
        <br>
        <button type="submit" id="popup-button">Okay</button>
        <br>
    </form>`;
    
    document.getElementById("fullHistory").innerText = 0;
    document.getElementById("rareHistory").innerText = 0;
    document.getElementById("ultraHistory").innerText = 0;

    document.getElementById("pull-1-button").disabled = true;
    document.getElementById("pull-10-button").disabled = true;
}

//function to hide intro div and display the two divs for the game area
function startGame() {
    document.getElementById("intro-area").style.display = "none";
    document.getElementById("button-area").style.display = "block";
    document.getElementById("history-area").style.display = "block";
}

//function to clear and reset all history and enable roll buttons
function resetGame() {
    document.getElementById("result-area").innerHTML = "";
    document.getElementById("fullHistory").innerText = 100;
    document.getElementById("rareHistory").innerText = 10;
    document.getElementById("ultraHistory").innerText = 100;

    document.getElementById("pull-1-button").disabled = false;
    document.getElementById("pull-10-button").disabled = false;
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