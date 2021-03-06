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
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
Array(50).fill(0).forEach(() => console.log(carro1.acelerar()));
class Ferrari extends Carro {
    constructor(modeloa, velocidadeMaximaa) {
        super('Ferrari', modeloa, velocidadeMaximaa);
        this.modeloa = modeloa;
        this.velocidadeMaximaa = velocidadeMaximaa;
    }
    acelerar() {
        return this.alterarVelocidade(30);
    }
    frear() {
        return this.alterarVelocidade(-25);
    }
}
const ferr = new Ferrari('F40', 350);
console.log(ferr.acelerar());
console.log(ferr.frear());
//Get & set
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120)
            this._idade = valor;
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 20;
console.log("pessoa1.idade", pessoa1.idade);
//atributos e métodos estáticos
// class Matematica {
//     PI: number = 3.1416
//     areaCirc(raio: number) : number {
//         return this.PI * raio * raio;
//     }
// }
// const m1 = new Matematica();
// console.log("m1.areaCirc(3)", m1.areaCirc(3))
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
console.log("Matematica.areaCirc(4) a", Matematica.areaCirc(4));
//classe abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((a, b) => a + b);
    }
}
class Multiplicar extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((a, b) => a * b);
    }
}
let soma = new Soma();
soma.executar(1, 2, 3, 4, 5);
console.log(soma.getResultado());
let multi = new Multiplicar();
multi.executar(1, 2, 3, 4, 5);
console.log(multi.getResultado());
//singleton
class Unico {
    constructor() { }
    static getInstance() {
        return this.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
console.log(Unico.getInstance().agora());
//somente leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Turbo', 'Caça');
