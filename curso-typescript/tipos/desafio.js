"use strict";
let passouPonto;
const ponto = (entrada) => {
    if (entrada > 8) {
        return "Fora do horário";
    }
    return "Ponto normal";
};
passouPonto = ponto;
let funcionarios = {
    supervisores: ["João", "Maria", "Lucas"],
    passouPonto
};
console.log("funcionarios", funcionarios.supervisores);
console.log("funcionarios", funcionarios.passouPonto(5));
