"use strict";
//string
var nome = "lucas";
console.log("nome", nome);
// nome= 12; //errro
//tuplas
var endereco = [['Avenida', 'teste'], [99, 100]];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Vermelho"] = 2] = "Vermelho";
})(Cor || (Cor = {}));
var corAleatoria = Cor.Cinza;
console.log("corAleatoria", corAleatoria);
function returnaNome() {
    return nome;
}
console.log(returnaNome());
var multiplicar = function (a, b) {
    return a * b;
};
console.log(multiplicar(3, 3));
//Tipo função
var calculo;
calculo = multiplicar;
console.log(calculo(8, 9));
//objetos
var usuario = {
    nome: "joão",
    idade: 21
};
var nota;
nota = 10;
console.log("nota", nota);
nota = "10";
console.log("nota", nota);
//never
var falha = function (msg) {
    throw new Error(msg);
};
var produto = {
    nome: 'Sabão',
    preco: 2,
    validarProduto: function () {
        if (!this.nome && this.nome.trim().length === 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco < 0) {
            falha('Preço invalido');
        }
    }
};
produto.validarProduto();
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        return this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
