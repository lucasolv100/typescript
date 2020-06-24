class Data {
    //publico por padrão
    dia: number;
    mes: number;
    ano: number;

    constructor(dia: number = 1,mes:number = 1, ano:number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const aniversario  = new Data(26);
aniversario.dia = 4
console.log(aniversario);


class DataEsperta {
 

    constructor(public dia: number = 1,public mes:number = 1, public ano:number = 1970) {
 
    }
}

const aniversarioExperto  = new DataEsperta(26);
aniversario.dia = 4
console.log(aniversario);

const casamento  = new DataEsperta;
casamento.ano = 2017
console.log('casamento', casamento);


class Produto {
    constructor(public nome:string, public preco:number, public desconto: number = 0){}

    public resumo() : string {
        return `${this.nome} custa R$ ${this.precoComDesconto(this.preco,this.desconto)})`
    }

    public precoComDesconto = (p: number, desc: number) : string => {
        return `${p - (p * desc)}`
    }
}

const produto1  = new Produto('Feijão', 5.00);
const produto2 = new Produto('Arroz', 8.00, 0.15);

console.log("produto1.resumo()", produto1.resumo())
console.log("produto2.resumo()", produto2.resumo())


class Carro {

    private velocidadeAtual: number = 0;
    constructor(public marca:string, public modelo: string, private velocidadeMaxima: number = 200) {

    }

    protected alterarVelocidade(delta: number) : number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        }
        else {
            this.velocidadeAtual =  delta > 0 ? this.velocidadeMaxima : 0;
        }

        return this.velocidadeAtual;
    }

    public acelerar() : number {
        return this.alterarVelocidade(5)
    }

    public frear() : number {
        return this.alterarVelocidade(-5)
    }

}

const carro1 = new Carro('Ford', 'Ka', 185);

Array(50).fill(0).forEach( () => console.log(carro1.acelerar()));

class Ferrari extends Carro {

    constructor(public modeloa: string, private velocidadeMaximaa: number) {
        super('Ferrari', modeloa, velocidadeMaximaa)
    }


    public acelerar() : number {
        return this.alterarVelocidade(30)
    }

    public frear() : number {
        return this.alterarVelocidade(-25)
    }
}


const ferr = new Ferrari('F40', 350);
console.log(ferr.acelerar())
console.log(ferr.frear())

