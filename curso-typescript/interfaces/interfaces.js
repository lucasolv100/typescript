"use strict";
// function saudarComOla(pessoa: {nome: string}){
//     console.log('Olá' + pessoa.nome)
// }
function saudarComOla(pessoa) {
    console.log('Olá' + pessoa.nome);
}
function mudaNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27
};
saudarComOla(pessoa);
mudaNome(pessoa);
saudarComOla(pessoa);
saudarComOla({ nome: 'Lucas ', idade: 28, xpto: 4786 });
