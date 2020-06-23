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
