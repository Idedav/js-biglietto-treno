
// VARIABILI DI ETA CHILOMETRI PREZZO SCONTO E MESSAGGIO
const kilometres = parseInt(prompt('inserire numero chilometri che vuoi percorrere'));
const age = parseInt(prompt('inserire la tua età'));
let discount;
let price = kilometres * 0.21
let priceFixed = price.toFixed(2)
let message = 'Ciao! In base ai chilometri che vuoi percorrere (' + kilometres + 'km) e in base ai nostri prezzi di 0.21€ per chilometro, il prezzo finale del biglietto è di: ' + priceFixed + '€. Grazie per averci scelto e buon viaggio! :D'

// VARIABILI CHE CAMBIANO IN BASE ALL ETA DELL UTENTE
if(age < 18){
    discount = price * 20 / 100;
    discountFixed = discount.toFixed(2)
    price = price - discount
    priceFixed = price.toFixed(2)
    message = 'Ciao! in base ai chilometri che vuoi percorrere (' + kilometres + 'km) e in base ai nostri prezzi di 0.21€ per chilometro abbiamo calcolato il prezzo del biglietto. Ma data la tua età di ' + age + ' anni, abbiamo applicato uno sconto di ' + discountFixed + '€. Il prezzo finale del biglietto quindi è di ' + priceFixed + '€. Grazie per averci scelto e buon viaggio! :D'
}else if(age > 65){
    discount = price * 40 / 100;
    discountFixed = discount.toFixed(2)
    price = price - discount
    priceFixed = price.toFixed(2)
    message = 'Ciao! in base ai chilometri che vuoi percorrere (' + kilometres + 'km) e in base ai nostri prezzi di 0.21€ per chilometro abbiamo calcolato il prezzo del biglietto. Ma data la tua età di ' + age + ' anni, abbiamo applicato uno sconto di ' + discountFixed + '€. Il prezzo finale del biglietto quindi è di ' + priceFixed + '€. Grazie per averci scelto e buon viaggio! :D'
}

// OUTPUT
document.getElementById('output').innerHTML = message