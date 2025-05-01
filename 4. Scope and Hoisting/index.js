//Cómo funcionan los ámbitos léxicos y el comportamiento de elevación de variables en JavaScript.

/*
El scope es el ambito donde se pueden acceder las variables o funciones dependiendo de donde se hayan creado.
*/

// Variables globales: son las variables que se pueden acceder desde cualquier parte del codigo dentro de un archivo

let sum = 2 + 4
function showSum() {
    console.log(sum); // 6
}
showSum()
console.log(sum); // 6

// Variables locales: son las variables que solo se pueden acceder dentro de un ámbito

function show() {
    let string = 'hello'
    console.log(string); // hello
}
show()

try {
    console.log(string); // Error: string no esta definida
} catch(e) {
    console.log(e);
}

// Las variables locales se pueden llamar dentro de funciones que se encuentren dentro del ambito de la variable.

const sub = () => {
    const value = 4 - 2;
    console.log(value); // 2

    const sum = () => {
        console.log(1 + value); // 3
    }
    sum()
}
sub()

/*
Existe una diferencia entre las palabras reservadas var, const y let. Var tiene un scope de función mientras que let y const
tienen un scope de bloque, como un if o un bucle.
*/ 

function sayHi() {
    if (true) {
        const x = 'hello const';
        var y = 'hello var'
    }    

    try {
        console.log(x); // Error: x no esta definida
    } catch(e) {
        console.log(e);
    }
    console.log(y); // hello var    
}
sayHi()

/*
El hoisting es una técnica que implica que el analizador del código de javascript monitoree las variables y funciones
declaradas y las cree antes de ejecutar el codigo, manteniendo el scope lexico. Esto permite usar una variable dentro 
del código antes de declararla. Solo funciona con var y function, con const y let no funciona.
*/

fun1()
function fun1() {
    var1 = 14;
    console.log(var1); // 14
    var var1;
}

// El hoisting solo funciona para la declaración de la variable y no su instanciación

fun2()
function fun2() {
    var1 = var1 + 14 // undefined + 14
    console.log(var1); // NaN
    var var1 = 10
}

// Esto es equivalente a lo siguiente

fun3()
function fun3() {
    var var1;
    var1 = var1 + 14 // var1 es undefined, por lo que la suma da NaN
    console.log(var1);// NaN
    var1 = 10
}