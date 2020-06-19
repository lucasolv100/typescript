//string
let nome = "lucas";
console.log("nome", nome);

// nome= 12; //errro


//tuplas
let endereco: [string[], number[]] = [['Avenida', 'teste'], [99, 100]];
console.log(endereco)


//enums
enum Cor {
    Cinza,
    Verde,
    Vermelho
}

let corAleatoria: Cor = Cor.Cinza;
console.log("corAleatoria", corAleatoria)


function returnaNome(): string{
    return nome
}

console.log(returnaNome());

const multiplicar = (a: number, b:number) : number => {
    return a * b;
}

console.log(multiplicar(3,3))

//Tipo função
let calculo: (x:number, y:number) => number;

calculo = multiplicar;
console.log(calculo(8, 9));

//objetos
let usuario = {
    nome: "joão",
    idade: 21
}

//Alias 
type Funcionario = {
    nome:string;
    //.....
}


let nota: number | string;
nota = 10;
console.log("nota", nota)
nota = "10"
console.log("nota", nota)


//never

const falha = (msg:string) : never => {
    throw new Error(msg);
}

const produto = {
    nome: 'Sabão',
    preco: 2,
    validarProduto(){
        if(!this.nome && this.nome.trim().length === 0)
        {
            falha('Precisa ter um nome');
        }
        if(this.preco < 0)
        {
            falha('Preço invalido')
        }
    }
}

produto.validarProduto();


type Conta = {
    saldo: number
    depositar: (v : number) => number
}

type Correntista = {
    nome: string
    contaBancaria: Conta
    contatos: Array<string>
}

let contaBancaria: Conta = {
    saldo: 3456,
    depositar(valor) {
        return this.saldo += valor
    }
}
 
let correntista : Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)