function calcularSalario(salario, bonus) {
    let valorBonus = (salario * bonus) / 100;
    return salario + valorBonus;
}

console.log(calcularSalario(3000, 10))