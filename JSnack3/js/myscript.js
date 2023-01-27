// Creo un array di numeri
const numbersArr = [10, 15, 35, 23, 89, 45, 21, 74, 85];

// Seleziono solo i numeri dispari

const odds = numbersArr.filter((num) => num % 2 === 1);
console.log(odds);
const displayId = document.querySelector("h2").innerHTML = odds;

// Sommare
let somma = 0;
// Per l'intero ciclo
for (let i = 0; i < odds.length; i++) {
    somma += odds[i];
    console.log(somma);
}
