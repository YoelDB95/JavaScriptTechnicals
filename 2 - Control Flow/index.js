// Uso de instrucciones condicionales y bucles (if, else, switch, for, while).

/*
La estructura if se usa para direccionar el flujo dependiendo de una condición. En su forma mas sencilla se invocara su bloque
si cumple con la condición y prosigue con el resto del código.
En sus variantes mas completas, dependiendo de la condición se ejecutara uno bloque de vario bloques que puede contener.
*/

const a = 4
const b = 5

if (a == b)
	console.log('son iguales');
	
console.log('Finalice');

/*
En este caso 'son iguales' se va a imprimir unicamente si a y b coinciden en valor, pero 'Finalice' siempre se va a escribir
*/

const edad = 18
if (edad < 18)
	console.log('es menor');
else
	console.log('es mayor');

/*
En este caso, dependiendo del resultado entre la comparacion de a y b, se va a imprimir uno de los dos mensajes
*/

const temperatura = 22

if (temperatura < 0) {
	console.log(temperatura);
	console.log('el agua esta en estado solido');
}
else if (temperatura < 100) {
	console.log(temperatura);
	console.log('el agua esta en estado liquido');
}
else {
	console.log(temperatura);
	console.log('el agua esta en estado gaseoso');
}
	
/*
En este caso puede imprimirse una de las 3 opciones dependiendo de la condición.
Se puede poner cualquier cantidad de else if necesarios, pero solo puede haber un if y un else.
Los bloques tienen que llevar llaves si contienen mas de una linea de código
*/

/*
Switch es otra estructura que simula un if con muchos else if siempre y cuando la condicion se compare por igualdad, 
aportanto una forma mas limpia y entendible.
*/

const tipoFruta = 'Bananas'
switch (tipoFruta) {
	case "Naranjas":
		console.log("Las naranjas cuestan $0.59 el kilo.");
		break;
	case "Manzanas":
		console.log("Las manzanas cuestan $0.32 el kilo.");
		break;
	case "Bananas":
		console.log("Los plátanos cuestan $0.48 el kilo.");
		break;
	case "Cerezas":
		console.log("Las cerezas cuestan $3.00 el kilo.");
		break;
	case "Mangos":
		console.log("Los mangos cuestan $0.56 el kilo.");
		break;
	case "Papayas":
		console.log("Las papayas cuestan $2.79 el kilo.");
		break;
	default:
		console.log(`Lo sentimos, no tenemos ${tipoFruta}.`);
}
console.log("¿Hay algo más que quieras?");

/**
	El break sirve para cortar la ejecucion en esa linea, si no existiera y hubiera mas opciones debajo de la opcion
	elegida, todas se ejecutarian. En este caso, al ser Bananas, sin el break imprimiria el precio de las bananas y 
	de todas las frutas que estan debajo. Default seria el else del if, si no coincide con ninguna opcion pasada, se ejecuta
	el codigo de default.
*/

/*
Las estructuras para bucles for y while se utiliza para hacer algo de forma repetida. Se diferencian uno del otro en
que el for se declara con un rango de repeticiones, mientras que el while necesita sólo de una condición para ejecutarse. 
*/

for (let i = 0; i < 10; i++) {
	console.log(i); 
}

console.log('');

/*
Se muestran los numeros del 0 al 9 ya que la condición es que i sea menor a 10, 
cuando sea igual o mayor a 10 se corta el bucle. 
Si se quisiera mostrar los primeros numeros pares hasta el 10, se puede sustituir i++ por i=i+2 
asiendo que i incremente de a 2 en 2. Y si se quiere mostrar los primeros numeros impares, i deberia tener el valor inicial 1
*/

for (let x = 1; x < 10; x=x+2)
	console.log(x); // 1 3 5 7 9
	
console.log('');

// bucle while

let j = 0
while (j < 10) {
	console.log(j);
	j = j + 1 // se puede simplificar con j++
}

console.log('');

let k = 1
while (k < 10) {
	console.log(k);
	k = k + 2
}
	
	
/*
Cada uno de los whiles hace lo mismo que los bucle for anteriores, 
si se omitiera el incremento de j el bucle se ejecutaría perpetuamente mostrando el número 0
*/