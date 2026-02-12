function contarDivisores(num) {
    let divisores = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisores++;
        }
    }
    return divisores;
}