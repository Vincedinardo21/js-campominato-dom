// Variabili
let livello;
let sizeGriglia;
let qualeGriglia;
let griglia = document.querySelector(".grid");

// Inserisco il livello di difficoltà
// Controllo che il livello sia da 1 - 3
do {
    livello = parseInt(prompt("Inserisci il livello di difficoltà da 1 a 3:"));
} while(livello > 3 || livello <= 0);

// Analizzo i vari livelli
switch(livello){
    case 1:
    default:
        console.log("livello 1");
        sizeGriglia = 100; 
        qualeGriglia = "square1";
        break;
    case 2:
        console.log("livello 2");
        sizeGriglia = 81;
        qualeGriglia = "square2";
        break;
    case 3:
        console.log("livello 3");
        sizeGriglia = 49;
        qualeGriglia = "square3";
        break;
}

//let myNewArrayRandom = createRandomUniqueNumber(sizeGriglia, 1, 10);

// Costruisco la griglia
for(let i = 0; i < sizeGriglia; i++){
    let divEl = createMyElement();
    let showRandom = randomNumber(1, sizeGriglia);
    //showRandom = myNewArrayRandom[i];
    divEl.append(showRandom);

    divEl.addEventListener("click", 
        function(){
            console.log("clicked");
            this.classList.add("clicked");
        }
    );

    griglia.append(divEl);      
}

// Le mie funzioni
function createMyElement(){
    let node = document.createElement("div");
    node.className = qualeGriglia;
    return node;
}

// Genero un numero random unico
function randomNumber(rangeMin, rangeMax){
    let rand = Math.floor(Math.random() * (rangeMax - rangeMin) + rangeMin);
    return rand;
}

// Creo un array contenente n numeri random
// function createRandomUniqueNumber(numItems, min, max){
//     let arrInt = [];
//     while(arrInt.length < numItems){
//         let randomUnIt = Math.floor(Math.random() * (max - min) + min);
//         if(!arrInt.includes(randomUnIt)){
//             arrInt.push(randomUnIt);
//         }
//     }
//     return arrInt;
// }

