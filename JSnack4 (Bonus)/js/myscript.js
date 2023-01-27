// Creo due Array
const firstArr = [12, 34, 56, 88, 85, 23, 56, 89, 98, 12, 34, 56];
const message = document.querySelector(".message").innerHTML = "I'm longer! " + firstArr;

const secondArr = [12, 56, 88, 23, 56, 98, 12, 34];
let messageTwo = document.querySelector(".message-two").innerHTML = secondArr;

let somma = (firstArr.length - secondArr.length);

// Button per risultato
const helpButton = document.querySelector(".help-btn");

// Creo un ciclo -Finchè il numero di elementi di firstArr = numeri di elementi di SecondArr
helpButton.addEventListener(
    "click",
    function () {


        for (i = 0; i < somma; i++) {

            secondArr.push(10);
            console.log(secondArr);
            messageTwo = document.querySelector(".message-two").innerHTML = "Happy face " + secondArr;
            document.querySelector(".smile").innerHTML = ":)";

            const sadFace = document.querySelector(".sad-face");
            console.log(sadFace);
            sadFace.classList.add("d-none");

        }
        // Fai sparire button come metodo alternativo di fermare la cosa
        helpButton.classList.add("d-none");

    }
)


