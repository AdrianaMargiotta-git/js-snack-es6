/*Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti*/

//creo l'array di oggetti
const squadre = [ 
    {
        'nome' : 'Milan',
        'punti' : 0,
        'falli' : 0
    },
    {
        'nome' : 'Napoli',
        'punti' : 0,
        'falli' : 0
    },
    {
        'nome' : 'Sampdoria',
        'punti' : 0,
        'falli' : 0
    },
    {
        'nome' : 'Palermo',
        'punti' : 0,
        'falli' : 0
    }
];

console.log(squadre);

//applico il ciclo forEach sull'array di oggetti
squadre.forEach((element) => {
    element.punti = Math.floor(Math.random()*10);;
    element.falli = Math.floor(Math.random()*10);;
    //console.log(element.nome + ' ha totalizzato ' + element.punti + ' punti e ha subito ' + element.falli + ' falli'); //metodo classico
    console.log(`
    ${element.nome} ha totalizzato ${element.punti} punti e ha subito ${element.falli} falli
    
    `);
});



/*************ESERCIZIO SENZA L'USO DI ES6**********************/
/*var squadre = [ 
    {
        'nome' : 'Milan',
        'punti' : 0,
        'falli' : 0
    },
    {
        'nome' : 'Napoli',
        'punti' : 0,
        'falli' : 0
    },
    {
        'nome' : 'Sampdoria',
        'punti' : 0,
        'falli' : 0
    },
    {
        'nome' : 'Palermo',
        'punti' : 0,
        'falli' : 0
    }
];
console.log(squadre);*/
/***************FUNZIONI**********************/
/*function random_punti(){
    var numPunti = Math.floor(Math.random()*10);
    return numPunti;
};
function random_falli(){
    var numFalli = Math.floor(Math.random()*10);
    return numFalli;
};*/
/********************************************/
/*for (var i = 0; i < squadre.length; i++) {
    squadre[i].punti = random_punti();
    squadre[i].falli = random_falli();
    console.log(squadre[i].nome + ' ha totalizzato ' + squadre[i].punti + ' punti e ha subito ' + squadre[i].falli + ' falli');
}*/