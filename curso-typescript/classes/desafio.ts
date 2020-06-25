// Exercício 1 - Classe
class Moto {
    constructor(public nome: string, public velocidade = 0) {

    }

    buzinar = () => {
        console.log('Toooooooooot!')
    }

    acelerar = (delta: number): number => {
        return this.velocidade = this.velocidade + delta
    }
}

var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

// Exercício 2 - Herança
class Objeto2D {
    protected base: number = 0
    protected altura: number = 0
}

class Retangulo extends Objeto2D {
    base = 5
    altura = 7

    area() : number {
        return this.base * this.altura
    }
}

console.log(new Retangulo().area())

// Exercício 3 - Getters & Setters
class Estagiario {
    _primeiroNome: string = ''

    get primeiroNome() {
        return this._primeiroNome
    }
    set primeiroNome(valor: string) {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        }
    }
}

const estagiario = new Estagiario();
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)