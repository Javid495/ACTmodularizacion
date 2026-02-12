function calcularPromedio (nota1, nota2, nota3){
    let promedio = (nota1 + nota2 + nota3) /3;

    if (promedio >= 3.0){
        return "el promedio es de "+ promedio +" felicitaciones, aprobaste"
    }
    else{
        return "el promedio es de " + promedio +" reprobaste "
    }
}

console.log(calcularPromedio(5.0, 4.0, 3.0));
console.log(calcularPromedio(2.5, 3.5, 2.0));
