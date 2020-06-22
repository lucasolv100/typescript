"use strict";
//string
let nome = "lucas";
console.log("nome", nome);
// nome= 12; //errro
//tuplas
let endereco = [['Avenida', 'teste'], [99, 100]];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Vermelho"] = 2] = "Vermelho";
})(Cor || (Cor = {}));
let corAleatoria = Cor.Cinza;
console.log("corAleatoria", corAleatoria);
function returnaNome() {
    return nome;
}
console.log(returnaNome());
const multiplicar = (a, b) => {
    return a * b;
};
console.log(multiplicar(3, 3));
//Tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(8, 9));
//objetos
let usuario = {
    nome: "joão",
    idade: 21
};
let nota;
nota = 10;
console.log("nota", nota);
nota = "10";
console.log("nota", nota);
//never
const falha = (msg) => {
    throw new Error(msg);
};
const produto = {
    nome: 'Sabão',
    preco: 2,
    validarProduto() {
        if (!this.nome && this.nome.trim().length === 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco < 0) {
            falha('Preço invalido');
        }
    }
};
produto.validarProduto();
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        return this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
