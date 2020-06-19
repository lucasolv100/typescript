"use strict";
var passouPonto;
var ponto = function (entrada) {
    if (entrada > 8) {
        return "Fora do horário";
    }
    return "Ponto normal";
};
passouPonto = ponto;
var funcionarios = {
    supervisores: ["João", "Maria", "Lucas"],
    passouPonto: passouPonto
};
console.log("funcionarios", funcionarios.supervisores);
console.log("funcionarios", funcionarios.passouPonto(5));
