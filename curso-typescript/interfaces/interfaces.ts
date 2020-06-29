// function saudarComOla(pessoa: {nome: string}){
//     console.log('Olá' + pessoa.nome)
// }


// const pessoa = {
//     nomea: 'João',
//     idade: 27
// }

// saudarComOla(pessoa)

interface Humano {
    nome: string,
    idade?: number,
    [prop: string]: any
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
    console.log('Olá' + pessoa.nome)
}
function mudaNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string) {
        console.log(`Olá meu nome é ${this.nome} ${sobrenome}`);
    }
}

saudarComOla(pessoa)
mudaNome(pessoa)
saudarComOla(pessoa)

// saudarComOla({nome: 'Lucas ', idade: 28, xpto: 4786})

pessoa.saudar('Silva');

class Cliente implements Humano {
    [prop: string]: any;
    nome: string = '';
    idade?: number | undefined;
    saudar(sobrenome: string): void {
        console.log(`Olá eu sou o cliente ${this.nome} ${sobrenome}`)
    }
}

const novoCliente = new Cliente;
novoCliente.nome = 'Teste'
novoCliente.saudar('XPTO');

//interface função
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo;
potencia = (base: number, expoente: number): number => base ** expoente;
console.log(potencia(3, 10));

//herança
interface A {
    a():void
}
interface B {
    b():void
}

interface ABC extends A,B {
    c():void
}


abstract class RealABD implements A,B {
    b(): void {
        throw new Error("Method not implemented.");
    }
    a(): void {
        throw new Error("Method not implemented.");
    }
}


// const x = 2;
// const y = 2;
// const z = 2;

// console.log(x)
// console.log(y)
// console.log(z)

interface Object {
    log(): void
}

Object.prototype.log = function(){
    console.log(this.toString())
}

const x = 2;
const y = 2;
const z = 2;

x.log()
y.log()
z.log()
