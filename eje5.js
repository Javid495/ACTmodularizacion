// Función para validar que el número sea mayor que 1
function validarNumero(num) {
    return num > 1;
}

// Función para contar divisores
//El operador % calcula el módulo (el resto de la división).

//Si num % i === 0, significa que i divide exactamente a num.

//Cada vez que encontramos un divisor, aumentamos el contador.
function contarDivisores(num) {
    let divisores = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisores++;
        }
    }
    return divisores;
}

// Función principal que usa las anteriores y muestra el resultado
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

// Probamos el programa
console.log(esPrimo(7));   // primo
console.log(esPrimo(10));  // no primo
console.log(esPrimo(1));   // inválido
