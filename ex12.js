function verificarNumero(numero){
   if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }
}
console.log (verificarNumero(8))
console.log (verificarNumero(0))
console.log (verificarNumero(-8))
