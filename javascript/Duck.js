//Defines
var kanten = ["N", "E", "S", "W", "NE", "SE", "SW", "NW"];
const snelheid = 100;
var Ducktop = 175;
var Duckleft = 600;
var hitpunt = 0;
var misspunt = 0;
var randomKant;

var Eend = document.getElementById("Duck");
    Eend.onclick = SchietenHit;

var Achtergrond = document.getElementById("Achtergrond");
    Achtergrond.onclick = SchietenMiss;

var miss = document.getElementById("Miss");
var hit = document.getElementById("Hit");

function SchietenMiss(){
    misspunt++;
    miss.innerHTML = misspunt;
    if(misspunt == 20){
        alert("Je hebt verloren Je punten: " + hitpunt + " Hit " + misspunt + " Miss ");
    }
}

function SchietenHit(event){
    hitpunt++;
    hit.innerHTML = hitpunt;
    if(hitpunt == 20){
        alert("Je hebt gewonnen. Je punten: " + hitpunt + " Hit " + misspunt + " Miss ");
    }
    event.stopPropagation();
}
//Game starten
function DeGame(){
    Eend.style.top = Ducktop + "px";
    Eend.style.left = Duckleft + "px";
    setInterval(vliegEend, 500);
}

//If en else
function vliegEend(){
    randomKant = kanten[Math.floor(Math.random() * kanten.length)];
    console.log(randomKant);

    switch(randomKant){
        //N tot W
        case "N":
            var MoveNoord = parseInt(Eend.style.top, 10) - snelheid;
            Eend.style.top = MoveNoord + "px";
            break;

        case "E":
            var MoveOost = parseInt(Eend.style.left, 10) + snelheid;
            Eend.style.left = MoveOost + "px";
            break;

        case "S":
            var MoveZuid = parseInt(Eend.style.top, 10) + snelheid;
            Eend.style.top = MoveZuid + "px";
            break;

        case "W":
            var MoveWest = parseInt(Eend.style.left, 10) - snelheid;
            Eend.style.left = MoveWest + "px";
            break;
        //NE tot ZW
        case "NE":
            MoveNoord = parseInt(Eend.style.top, 10) - snelheid;
            MoveOost = parseInt(Eend.style.left, 10) + snelheid;
            Eend.style.top = MoveNoord + "px";
            Eend.style.left = MoveOost + "px";
            break;
        
        case "SE":
            MoveZuid = parseInt(Eend.style.top, 10) + snelheid;
            MoveOost = parseInt(Eend.style.left, 10) + snelheid;
            Eend.style.top = MoveZuid + "px";
            Eend.style.left = MoveOost + "px";
            break;
        
        case "SW":
            MoveZuid = parseInt(Eend.style.top, 10) + snelheid;
            MoveWest = parseInt(Eend.style.left, 10) - snelheid;
            Eend.style.top = MoveZuid + "px";
            Eend.style.left = MoveWest + "px";
            break;
        
        case "NW":
            MoveNoord = parseInt(Eend.style.top, 10) - snelheid;
            MoveWest = parseInt(Eend.style.left, 10) - snelheid;
            Eend.style.top = MoveNoord + "px";
            Eend.style.left = MoveWest + "px";
            break;
    }
}

DeGame();