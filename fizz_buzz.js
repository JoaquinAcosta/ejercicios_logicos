function fizzbuzz(n) {
    const resultado = []

    for (var i=1; i <= n; i++) {
    if (i % 15 === 0)
        resultado.push("FizzBuzz");
    else if (i % 3 === 0)
        resultado.push("Fizz");
    else if (i % 5 === 0)
        resultado.push("Buzz");
    else
        resultado.push(i);
}

return resultado

}

console.log(fizzbuzz(20))
