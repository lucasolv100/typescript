let passouPonto: (horario: number) => string;

const ponto = (entrada: number) => {
    if(entrada > 8)
    {
        return "Fora do horário"
    }

    return "Ponto normal"
}

passouPonto = ponto;

let funcionarios = {
    supervisores: ["João", "Maria", "Lucas"],
    passouPonto
}

console.log("funcionarios", funcionarios.supervisores)
console.log("funcionarios", funcionarios.passouPonto(5))





