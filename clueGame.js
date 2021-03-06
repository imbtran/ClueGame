//Player Functions
function isPlayersTurn() {
    if (document.getElementById("p1Turn"))
        return 'p1';
    if (document.getElementById("p2Turn"))
        return 'p2';
    if (document.getElementById("p3Turn"))
        return 'p3';
    if (document.getElementById("p4Turn"))
        return 'p4';
    if (document.getElementById("p5Turn"))
        return 'p5';
    if (document.getElementById("p6Turn"))
        return 'p6';
}

function movementAction(el) {
    const playerNum = isPlayersTurn().charAt(1);
    const playerImg = `<img id=${isPlayersTurn()} class='playerImg' src='img/${isPlayersTurn()}.png'/>`;
    if (movementAllowed(el)) {
        if (document.getElementById(`${isPlayersTurn()}`)) {
            document.getElementById(`${isPlayersTurn()}`).remove();
        }
        document.getElementById(el).innerHTML = playerImg;
        displayMessage(`Player ${playerNum} moved to ${el}`);
    }
}

function movementAllowed(el) {
    if (document.getElementById(el).innerHTML.includes('img')) {
        alert("You cannot move there");
        return false;
    }
    return true;
}

function displayMessage(message) {
    document.getElementById("textarea").innerHTML += message + '&#13;&#10;';
}

function endTurn(id) {
    const playerNum = parseInt(id.charAt(1), 10);
    let nextPlayerNum;
    if (playerNum === 6)
        nextPlayerNum = 1;
    else
        nextPlayerNum = playerNum + 1;
    document.getElementById(`player${nextPlayerNum}`).innerHTML = `<h3>Your Turn</h3><button onclick='makeAccusation(${nextPlayerNum})'>Accuse</button><br/><button onclick='makeSuggestion(${nextPlayerNum})'>Suggest</button><br/><button id='p${nextPlayerNum}Turn' onclick='endTurn(this.id)'>End Turn</button><br/><br/>`;
    document.getElementById(`player${playerNum}`).innerHTML = '';
    displayMessage(`Player ${playerNum} ended their turn`);
}

function makeAccusation(playerNum) {
    displayMessage(`Player ${playerNum} made an accusation`);
}

function makeSuggestion(playerNum) {
    displayMessage(`Player ${playerNum} made a suggestion`);
}

function win() {

}


//Room Functions
function getCoordinates() {

}

function hasSecretPassage() {

}
