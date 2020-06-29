function echo(objeto:any) {
    return objeto;
}

console.log(echo('João').length)
console.log(echo(27).length) //undefined
console.log(echo({nome: 'João', idade: 27}))


//usando generics
function echoMelhorado<T>(objeto: T) {
    return objeto;
}

console.log(echoMelhorado('João').length)
console.log(echoMelhorado(27).length)
console.log(echoMelhorado<number>('27'))
console.log(echoMelhorado({nome: 'João', idade: 27}))