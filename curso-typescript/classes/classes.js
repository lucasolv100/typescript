"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(26);
aniversario.dia = 4;
console.log(aniversario);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioExperto = new DataEsperta(26);
aniversario.dia = 4;
console.log(aniversario);
const casamento = new DataEsperta;
casamento.ano = 2017;
console.log('casamento', casamento);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.precoComDesconto = (p, desc) => {
            return `${p - (p * desc)}`;
        };
    }
    resumo() {
        return `${this.nome} custa R$ ${this.precoComDesconto(this.preco, this.desconto)})`;
    }
}
const produto1 = new Produto('Feijão', 5.00);
const produto2 = new Produto('Arroz', 8.00, 0.15);
console.log("produto1.resumo()", produto1.resumo());
console.log("produto2.resumo()", produto2.resumo());
