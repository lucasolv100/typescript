"use strict";
let seraQuePode = "?"; //hoisting
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    // var acao = 'Colocar casaco';
    let acao = 'Colocar casaco';
}
//console.log(acao);
//destructing array
const caracteristica = ['Motor', 2020];
// const motor = caracteristica[0]
// const ano = caracteristica[1]
const [motor, ano] = caracteristica;
console.log(motor);
console.log(ano);
const item = {
    nome: 'SSD 400GB',
    preco: 200
};
const { nome: n, preco } = item;
console.log(n);
console.log(preco);
