/*Partendo da un array semplice tipo: var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente*/

//definisco un array di nomi
const nomi = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
console.log(nomi);

//chiedo all'utente due numeri mediante prompt
let arrayNumeriUser = []; //array contenente i due nuemri inseriti dall'utente

//tramite un ciclo for chiedo all'utente i due numeri e li pusho in arrayNumeriUser
for (let i = 0; i < 2; i++) {
    var numeroUser = parseInt(prompt("inserisci un numero da 0 a 5"));
    //i numeri inseriti non possono ripetersi, non possono esseere minori o maggiori alla lunghezza dell'array nomi (gestione casi limite)
    while (arrayNumeriUser.includes(numeroUser) || (numeroUser < 0) || (numeroUser > 5)) {
        alert("Attenzione! Il numero inserito non è corretto");
        numeroUser = parseInt(prompt("inserisci un numero da 0 a 5"));
    };
    arrayNumeriUser.push(numeroUser);
    console.log(arrayNumeriUser);
};

//ordino i numeri inseriti dall'utente in ordine crescente e gestione caso limite (utente inserisce prima il numero maggiore)
arrayNumeriUser.sort();
console.log(arrayNumeriUser);

//creo un nuovo array con gli elementi che hanno una posizione compresa fra i numeri inseriti dall'utente
const newNomi = nomi.filter((element, index) => {
    return index >= arrayNumeriUser[0] && index <= arrayNumeriUser[1];
});
console.log(newNomi);


/*************ESERCIZIO SENZA L'USO DI ES6**********************/
//definiscono un array di nomi
// var nomi = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// console.log(nomi);

// //chiedo all'utente due numeri mediante il prompt
// var arrayNumeriUser = []; //array contenente i due nuemri inseriti dall'utente

// //tramite un ciclo for chiedo all'utente i due numeri e li pusho in arrayNumeriUser
// for (var i = 0; i < 2; i++) {
//     var numeroUser = parseInt(prompt("inserisci un numero da 0 a 5"));
//     //i numeri inseriti non possono ripetersi, non possono esseere minori o maggiori alla lunghezza dell'array nomi
//     while (arrayNumeriUser.includes(numeroUser) || (numeroUser < 0) || (numeroUser > 5)) {
//         alert("Attenzione! Il numero inserito non è corretto");
//         numeroUser = parseInt(prompt("inserisci un numero da 0 a 5"));
//     };
//     arrayNumeriUser.push(numeroUser);
//     console.log(arrayNumeriUser);
// };

// var sliced = nomi.slice(arrayNumeriUser[0], (arrayNumeriUser[1] + 1)); //aggiungo il +1 per includere anche il nome finale finale
// console.log(sliced);
