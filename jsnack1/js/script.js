//1A: Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla Peso = 10

//creo la variabile palla
let nome = 'palla';
let peso = 10;
const palla = {
    nome,
    peso
};

console.log(palla);//metodo classico

console.log(`
    Il peso inizale della ${nome} è: ${peso}

`);


//1B: Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
peso = parseInt(prompt("Modifichiamo il peso della palla")); //modifico il peso con il numero inserito dall'utente
//console.log(palla); //non funziona
console.log(`
    Il peso della nuova ${nome} è: ${peso}
    
`);


/*************ESERCIZIO SENZA L'USO DI ES6**********************/
/*
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
*/