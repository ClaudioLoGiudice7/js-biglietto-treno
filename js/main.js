// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// Il prezzo del biglietto è definito in base ai km(0.21 € al km).

// Va applicato uno sconto del 20 % per i minorenni.

// Va applicato uno sconto del 40 % per gli over 65.

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// CHIEDERE NUMERO KM DA PERCORRERE
let km = parseInt(prompt("Quanti KM devi percorrere?"));
console.log("Quanti KM devi percorrere?", km);

// CHIEDERE ETÀ
let age = parseInt(prompt("Quanti anni hai?"));
console.log("Quanti anni hai?", age);

// CALCOLARE PREZZO BIGLIETTO
let price = (0.21 * km);
console.log(price);

// SE LA PERSONA È MINORENNE, 20% DI SCONTO
if (age < 18) {
    // SCONTO 20%
    alert(price - (20 / 100) * (price));
}

// SE LA PERSONA È OVER 65, 40% DI SCONTO
else if (age > 65) {
    // SCONTO 40%
    alert(price - (40 / 100) * (price));
}

else {
    alert(price)
}

// ARROTONDARE A 2 CIFRE
price = price.toFixed(2)

// PREZZO FINALE
document.getElementById("final-price").innerHTML = ("Il prezzo del biglietto è " + "€" + price);
console.log("Il prezzo del biglietto è " + "€" + price);