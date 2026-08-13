function calcularDesconto(preco, percentual) {
    let desconto = (preco * percentual) / 100;
    return preco - desconto;
}

console.log(calcularDesconto(200, 10)); 