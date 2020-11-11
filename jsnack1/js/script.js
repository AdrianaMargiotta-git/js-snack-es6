//1A: Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla Peso = 10

//creo la variabile palla
var palla = {
    'nome' : 'palla',
    'peso' : 10
};

console.log(palla);

//1B: Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

var nuovoPeso = parseInt(prompt("Modifichiamo il peso della palla")); //l'utente inserisce il nuovo peso

palla['peso'] = nuovoPeso; //modifico il peso

console.log(palla);