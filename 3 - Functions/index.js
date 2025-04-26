// Declaración y uso de funciones en JavaScript, incluyendo funciones anónimas y de flecha.

/*
Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un 
procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento 
califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y 
la salida. Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.
Para declarar una funcion se puede hacer de tres formas distintas, usando la palabra reservada function, usando una expresion
function o con las funciones flechas. Si se usa la palabra reservada, su formato es el siguiente: 
function <nombreFuncion> (<argumento/s opcional/es>){<cuerpo de la función>}.
Si se usa expresiones function, estas pueden ser anonimas: 
const <nombreVariable> = function(<argumento/s opcional/es){<cuerpo de la función>} o tener un nombre: 
const <nombreVariable> = function <nombreFunción>(<argumento/s opcional/es>){<cuerpo de la función>}.
En cambio para las funciones flechas: const <nombreVariable> = (<argumento/s opcional/es>) => {<cuerpo de la función>}.
*/

// Funcion propiamente dicha, la instruccion return especifica el valor que devolvera la función
function suma(op1, op2) {
    return op1 + op2;
}
console.log(suma(1, 2)); // 3

// Expresiones function
const multiplicacion = function(op1, op2) {
    return op1 * op2
}
console.log(multiplicacion(3, 5)); // 15

const division = function div(op1, op2) {
    if (op2 !== 0) // no se puede dividir por 0
        return op1 / op2
    return undefined
}
console.log(division(8, 0)); // 4

// Funcion flecha
const resta = (op1, op2) => {
    return op1 - op2;
}
console.log(resta(3, 1)); // 2

/*
Cada función puede no recibir argumentos o recibir una cantidad indefinida de argumentos, se recomienda que sean pocos para
mantenibilidad y legibilidad, los nombres de las funciones tienen que ser únicos y pueden no devolver un valor, por lo tanto,
no terminaría con la instrucción return.
*/

/*
const suma = (a, b) => {
    return a + b
}
console.log(suma(3, 5)); // el identificador suma ya fue declarado
*/

/*
En las funciones flechas, si se usa un solo argumento, se pueden omitir los parentesis. Si no se usan argumentos o se usan
mas de un argumento, son necesarios los parentesis.
*/
const esPar = value => {
    return value % 2 === 0;
}
console.log(esPar(5)); // false

// Si su cuerpo tiene solo una linea y contiene la instruccion return se puede omitir esa instruccion y las llaves
const esImpar = value => value % 2 !== 0
console.log(esImpar(5)); // true

/*
Existe algo se llama recursion, que es cuando una funcion, dentro de su cuerpo, se llama a si misma, estas funciones
deben tener un corte para no ejecutarse indefinidamente.
*/

const factorial = function fact(value) {
    if (value <= 1) return 1
    return value * fact(value - 1)
}
console.log(factorial(5)); // 120
