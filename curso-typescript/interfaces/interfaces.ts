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
    [prop:string]: any
}

function saudarComOla(pessoa: Humano){
    console.log('Olá' + pessoa.nome)
}
function mudaNome(pessoa: Humano){
    pessoa.nome= 'Joana'
}

const pessoa = {
    nome: 'João',
    idade: 27
}

saudarComOla(pessoa)
mudaNome(pessoa)
saudarComOla(pessoa)

saudarComOla({nome: 'Lucas ', idade: 28, xpto: 4786})