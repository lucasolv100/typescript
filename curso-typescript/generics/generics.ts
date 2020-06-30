function echo(objeto: any) {
    return objeto;
}

console.log(echo('João').length)
console.log(echo(27).length) //undefined
console.log(echo({ nome: 'João', idade: 27 }))


//usando generics
function echoMelhorado<T>(objeto: T) {
    return objeto;
}

console.log(echoMelhorado('João').length)
// console.log(echoMelhorado(27).length) erro pelo tipo generico
// console.log(echoMelhorado<number>('27'))
console.log(echoMelhorado({ nome: 'João', idade: 27 }))

function imprimir<T>(args: T[]) {
    args.forEach(el => console.log(el));
}

imprimir([1, 2, 3, 4]) //inferido
imprimir<string>(['Ana', 'Bia', 'Carlos']) //explicito
imprimir<{ nome: string, idade: number }>([
    { nome: 'Lucas', idade: 28 },
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Pedro', idade: 25 }
])

//funções genéricas
const chamarEcho: <T>(data: T) => T = echoMelhorado
console.log(chamarEcho<string>("Teste Echo"));

//tipo genérico
type Echo = <T>(data: T) => T
const chamarEchoTipo: Echo = echoMelhorado
console.log(chamarEcho<string>("Teste Echo"));

//class com generics
// class OperacaoBinaria {
//     constructor(public operando1: any, public operando2: any) {

//     }

//     executar() {
//         return this.operando1 + this.operando2;
//     }
// }

// console.log(new OperacaoBinaria('Bom', 'dia').executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria(3, 'Opa').executar())

abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T, public operando2: T) {

    }

    abstract executar(): R
}

class SomaBinaria extends OperacaoBinaria<number, number> {

    executar(): number {
        return this.operando1 + this.operando2
    }

}

// console.log(new OperacaoBinaria('Bom', 'dia').executar())
console.log(new SomaBinaria(3, 7).executar())

class Data1 {
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

class DiferencaEntreDatas extends OperacaoBinaria<Data1, string> {
    executar(): string {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diff = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diff / dia)} dia(s)`
    }

    getTime(dataInf: Data1): number {
        let { dia, mes, ano } = dataInf
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }

}

const d1 = new Data1(1,2,2020)
const d2 = new Data1(1,3,2020)
console.log(new DiferencaEntreDatas(d1,d2).executar())

class Fila<T> {
    private itens: Array<T>;

    entrarNaFila(item: T){
        this.itens.push(item);
    }

    constructor(...args:T[]){
        this.itens = args;
    }

    imprimir() {
        // this.itens.forEach(el => console.log(el));
        console.log(this.itens);
    }

    proximo() : T{
        const prx = this.itens[0];
        this.itens.splice(0, 1);
        return prx;
    }
}

const fila = new Fila<string>('Gui', 'Pedro', 'Ana', 'Lu');
fila.entrarNaFila('João');
fila.imprimir();
console.log('Proximo:', fila.proximo());
fila.imprimir();
console.log('Proximo:', fila.proximo());
fila.imprimir();

//restições em generics
class ExemploRestricao<T extends number> {
    
}