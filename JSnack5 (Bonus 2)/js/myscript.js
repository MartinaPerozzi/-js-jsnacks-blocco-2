// Dato un array contenente i risultati di una squadra (vittorie, pareggi e sconfitte) [W, W, L, X, X, W, L, X], stampare a video il numero di vittorie, il numero di pareggi ed il numero di sconfitte.

// Creo l'Array

const playResult = ["W", "W", "L", " X", "X", "W", "L", "X"];

let vincitori = 0;
let loser = 0;
let evenresult = 0;
// Ciclo for
for (let i = 0; i < playResult.length; i++) {

    const risult = playResult[i];

    if (risult == "W") {
        vincitori++;

    } else if (risult == "L") {
        loser++;

    } else {
        evenresult++;
    }
}

const resultMessage = document.querySelector(".message").innerHTML = `Le vittorie sono  ${vincitori},  le partite perse sono  ${loser}, i pareggi sono  ${evenresult}`;