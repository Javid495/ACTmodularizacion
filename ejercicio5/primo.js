function esPrimo(num) {
    if (!validarNumero(num)) {
        return "El número debe ser mayor que 1.";
    }

    let divisores = contarDivisores(num);

    if (divisores === 2) {
        return "El número" +num + "es primo.";
    } else {
        return "El número" + num + "no es primo.";
    }
}