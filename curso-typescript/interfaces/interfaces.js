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
    idade: 27,
    saudar(sobrenome) {
        console.log(`Olá meu nome é ${this.nome} ${sobrenome}`);
    }
};
saudarComOla(pessoa);
mudaNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({nome: 'Lucas ', idade: 28, xpto: 4786})
pessoa.saudar('Silva');
class Cliente {
    constructor() {
        this.nome = '';
    }
    saudar(sobrenome) {
        console.log(`Olá eu sou o cliente ${this.nome} ${sobrenome}`);
    }
}
const novoCliente = new Cliente;
novoCliente.nome = 'Teste';
novoCliente.saudar('XPTO');
let potencia;
potencia = (base, expoente) => Math.pow(base, expoente);
console.log(potencia(3, 10));
class RealABD {
    b() {
        throw new Error("Method not implemented.");
    }
    a() {
        throw new Error("Method not implemented.");
    }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 2;
const z = 2;
x.log();
y.log();
z.log();
