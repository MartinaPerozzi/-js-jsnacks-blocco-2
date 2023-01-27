// Per dichiarare in seguito il numero
const currentNumber = document.querySelector(".number-current");

// Button per dati utenti
const submitButton = document.querySelector(".submit-button");

// Prendo il valore numerico inserito dall'utente al click 
submitButton.addEventListener(
    "click",
    function () {
        let userNumber = document.querySelector(".number-user").value;
        console.log(userNumber)
        // Condizione 1 - numeri pari
        if (userNumber % 2 == 0) {

            currentNumber.innerHTML = userNumber + " è un numero pari.";
            // Condizione 2- numero dispari
        } else if (userNumber % 2 != 0) {
            userNumber++;
            currentNumber.innerHTML = userNumber;
        }
    }
);


