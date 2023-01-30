// Prendo i miei elementi
const textRed = document.querySelector("#red-color");
console.log(textRed);
const textGreen = document.querySelector("#green-color");
// Button
const buttonProceed = document.querySelector(".btn-number");

// Creo un'array di numeri
const numberArray = [10, 30, 28, 45, 89, 21, 35, 88, 12, 3];
const boxElements = document.querySelector(".box-elements");
boxElements.innerHTML += "10, 30, 28, 45, 89, 21, 35, 88, 12, 3";



buttonProceed.addEventListener(
    "click",
    function () {

        for (let i = 0; i < numberArray.length; i++) {
            const currentNumber = numberArray[i];


            if (currentNumber % 2 == 0) {

                textRed.innerHTML += " - " + currentNumber;
                console.log(textRed);

            } else if (currentNumber % 2 != 0) {
                textGreen.innerHTML += " - " + currentNumber;

            }
        }
    }
)

