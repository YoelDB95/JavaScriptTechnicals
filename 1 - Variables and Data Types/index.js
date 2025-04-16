//Declaración de variables usando var, let y const, y comprensión de tipos primitivos y objetos

/*
Para la declaración de variables en JavaScript se usa var, let y const. Var y let se usan para declarar variables y const 
para declarar constantes.
La diferencia entre var y let esta que var tiene un ámbito de función y let tiene un ámbito de bloque, es decir, 
si se usa var en una variable dentro de un bloque, esta se puede acceder desde cualquier lugar de la funcion, en cambio con let
solo se puede acceder dentro de ese bloque (un if o un bucle).
*/

var condicion = true;
if(condicion){
	var edad1 = 25;
	let edad2 = 32;
}
console.log(edad1); // 25
try {
	console.log(edad2); // Error: edad2 is not defined
} catch(e) {
	console.error(e);
}

/*
La diferencia entre una variable (let o var) y una constante (const) es que la primera puede cambiar su valor y tipo en 
tiempo de ejecución mientras que la segunda no lo puede hacer, permanece igual durante todo el ciclo de vida de la constante.
*/

let edadVar = 19
const edadConst = 19

edadVar = edadVar + 1 // 20
try {
    edadConst = edadConst + 1 // Error: No se puede asignar a una constante
} catch(e) {
	console.error(e);
}

/*
Los tipos primitivos son los valores basicos que puede tener una variable o constante: 
- String: Representa una cadena de texto y puede ser definida usando comillas dobles, simples o backticks.
- Number: Incluye tanto números enteros como decimales. En JavaScript, no hay una distinción entre enteros y flotantes.
- BigInt: Permite representar números muy grandes que exceden el límite de los números seguros en JavaScript.
- Boolean: Representa valores verdadero (true) o falso (false).
- Undefined: Se utiliza para representar una variable que se ha declarado pero a la que aún no se le ha asignado un valor.
- Null: Representa la ausencia intencional de un valor.
- Symbol: Permite crear identificadores únicos que no son iguales a ningún otro symbol.

En el caso de las variables, pueden cambiar tanto el valor como su tipo.
*/

let numero = 1234
const booleano = true
var string = "Esto es un string"
let bigint = 1234567890123456789012345678901234567890n
const symbol = Symbol('foo')
var Undefined
let Null = null;

console.log(booleano); // true
console.log(string); // Esto es un string
console.log(bigint); // 1234567890123456789012345678901234567890n
console.log(symbol); // Symbol(foo)
console.log(Null); // null
console.log(Undefined); // undefined

console.log('Variable numero: ', numero); // 1234
numero = "ahora soy un string"
console.log('Variable numero: ', numero); // ahora soy un string

/*
Los objetos sirven para guardar un conjunto de datos de distinto tipo, estos pueden ser primitivos, otros objetos
u otras estructuras como los arreglos. A este conjunto de datos se le llama propiedades. Tambien pueden tener comportamiento
mediante funciones, denominadas métodos.
*/

const myCar = new Object() // Declaración del objeto
myCar.marca = 'Toyota'
myCar.color = 'red'
myCar['año'] = 2020
myCar.toString = function() {
	return this.marca + ' ' + this.año + ' ' + this.color // + entre un numero y un string, se convierte el numero a un string 
	// y se concatenan
	// this sirve para acceder a las propiedades y comportamiento del propio objeto
}
console.log(myCar); // { color: 'Red', 'año': 2020 }
console.log((myCar.marca)); // 2020
console.log(myCar['color']); // Red
console.log(myCar.toString()); // Toyota 2020 red

/*
Los objetos tambien se pueden crear con llaves, estos se llaman objetos literales y tienen las mismas caracteristicas 
que los objetos propiamente dicho.
*/

let myCar2 = { marca: 'Ford', color: 'black', año: '2010', modelo: 'fiesta'}
console.log(myCar2); // { marca: 'Ford', color: 'black', 'año': '2010', modelo: 'fiesta' }
