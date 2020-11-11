//Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

//creo l'array di oggetti
const bici = [
    { 
        'nome' : 'bici da corsa',
        'peso' : 40
    },
    { 
        'nome' : 'bici da passeggio',
        'peso' : 37
    },
    { 
        'nome' : 'mountabike',
        'peso' : 60
    },
    { 
        'nome' : 'bici pieghevole',
        'peso' : 100
    },
    { 
        'nome' : 'bici in fibra di carbonio',
        'peso' : 59
    }
];

console.log(bici); //stampo su console la lista delle bici

//con un ciclo forEach trovo la bici più leggera è la stampo
let piuLeggera = bici[0];
bici.forEach((element) => {
    if(piuLeggera.peso > element.peso){
        piuLeggera = element;
    };
});
console.log(piuLeggera);
console.log("La bici più leggera è la " + piuLeggera.nome + " che pesa " + piuLeggera.peso + "Kg");


/*************ESERCIZIO SENZA L'USO DI ES6**********************/
/*
//creo l'array di oggetti
var bici = [
    { 
        'nome' : 'bici da corsa',
        'peso' : 40
    },
    { 
        'nome' : 'bici da passeggio',
        'peso' : 37
    },
    { 
        'nome' : 'mountabike',
        'peso' : 60
    },
    { 
        'nome' : 'bici pieghevole',
        'peso' : 100
    },
    { 
        'nome' : 'bici in fibra di carbonio',
        'peso' : 59
    }
];
console.log(bici);

/******************SOLUZIONE 1******************/
/*var piuLeggera = bici[0];
for (var i = 0; i < bici.length; i++) {
    if(piuLeggera.peso > bici[i].peso){
        piuLeggera = bici[i];
    } 
}
console.log(piuLeggera);*/
//document.getElementById("print").innerHTML = piuLeggera;

/******************SOLUZIONE 2******************/
/*bici.sort(function(a, b) {
    return a.peso - b.peso
});
var piuLeggera = bici[0];
console.log(piuLeggera);*/