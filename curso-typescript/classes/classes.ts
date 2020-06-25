class Data {
    //publico por padrão
    dia: number;
    mes: number;
    ano: number;

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const aniversario = new Data(26);
aniversario.dia = 4
console.log(aniversario);


class DataEsperta {


    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {

    }
}

const aniversarioExperto = new DataEsperta(26);
aniversario.dia = 4
console.log(aniversario);

const casamento = new DataEsperta;
casamento.ano = 2017
console.log('casamento', casamento);


class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) { }

    public resumo(): string {
        return `${this.nome} custa R$ ${this.precoComDesconto(this.preco, this.desconto)})`
    }

    public precoComDesconto = (p: number, desc: number): string => {
        return `${p - (p * desc)}`
    }
}

const produto1 = new Produto('Feijão', 5.00);
const produto2 = new Produto('Arroz', 8.00, 0.15);

console.log("produto1.resumo()", produto1.resumo())
console.log("produto2.resumo()", produto2.resumo())


class Carro {

    private velocidadeAtual: number = 0;
    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {

    }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }

        return this.velocidadeAtual;
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }

}

const carro1 = new Carro('Ford', 'Ka', 185);

Array(50).fill(0).forEach(() => console.log(carro1.acelerar()));

class Ferrari extends Carro {

    constructor(public modeloa: string, private velocidadeMaximaa: number) {
        super('Ferrari', modeloa, velocidadeMaximaa)
    }


    public acelerar(): number {
        return this.alterarVelocidade(30)
    }

    public frear(): number {
        return this.alterarVelocidade(-25)
    }
}


const ferr = new Ferrari('F40', 350);
console.log(ferr.acelerar())
console.log(ferr.frear())

//Get & set
class Pessoa {
    private _idade: number = 0

    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if (valor >= 0 && valor <= 120)
            this._idade = valor
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 20
console.log("pessoa1.idade", pessoa1.idade)

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
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return this.PI * raio * raio;
    }
}

console.log("Matematica.areaCirc(4) a", Matematica.areaCirc(4))

//classe abstrata
abstract class Calculo {
    protected resultado: number = 0;

    abstract executar(...numeros: number[]): void

    public getResultado(): number {
        return this.resultado;
    }
}

class Soma extends Calculo {

    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((a, b) => a + b)
    }

}
class Multiplicar extends Calculo {

    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((a, b) => a * b)
    }

}

let soma = new Soma();
soma.executar(1,2,3,4,5);
console.log(soma.getResultado())

let multi = new Multiplicar();
multi.executar(1,2,3,4,5);
console.log(multi.getResultado())

//singleton

class Unico {
    private static instance: Unico = new Unico
    private constructor() {}

    static getInstance() : Unico{
        return this.instance;
    }

    agora(){
        return new Date
    }
}


console.log(Unico.getInstance().agora())

//somente leitura
class Aviao {
    public readonly modelo: string;

    constructor(modelo: string, public readonly prefixo: string){
        this.modelo = modelo;
    }
}

const turboHelice = new Aviao('Turbo', 'Caça');
