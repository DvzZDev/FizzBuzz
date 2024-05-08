/* El problema de FizzBuzz es un problema de programación común que se utiliza a menudo en entrevistas de trabajo. Aquí está el enunciado:

Escribe una función que acepte un número como entrada. La función debe iterar desde 1 hasta ese número (inclusive) y seguir estas reglas para cada número:

Si el número es divisible por 3, imprime "Fizz".
Si el número es divisible por 5, imprime "Buzz".
Si el número es divisible por tanto 3 como 5, imprime "FizzBuzz".
Si el número no es divisible por 3 o 5, simplemente imprime el número.
Por ejemplo, si la entrada es 15, la salida debería ser: */

const fizz = (num) => {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
};

console.log(fizz(15));

module.exports = fizz;
