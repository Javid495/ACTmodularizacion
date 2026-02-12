function calcularSubtotal(cantidad, precio) {
    return cantidad * precio;
}

function calcularIVA(subtotal) {
    return subtotal * 0.19;
}

function calcularTotal(cantidad, precio) {
    let subtotal = calcularSubtotal(cantidad, precio);
    let iva = calcularIVA(subtotal);
    return subtotal + iva;
}

let total = calcularTotal(3, 5000); // 3 productos de $5000 cada uno
console.log("El total a pagar es: $" + total);
