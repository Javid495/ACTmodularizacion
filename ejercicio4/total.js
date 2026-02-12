function calcularTotal(cantidad, precio) {
    let subtotal = calcularSubtotal(cantidad, precio);
    let iva = calcularIVA(subtotal);
    return subtotal + iva;
}




export { calcularTotal };