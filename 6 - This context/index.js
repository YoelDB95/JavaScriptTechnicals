// Cómo funciona el contexto de ejecución y cómo cambiarlo en JavaScript.

/*
En general, el valor de this está determinado por cómo se invoca a la función. No puede ser establecida mediante una 
asignación en tiempo de ejecución, y puede ser diferente cada vez que la función es invocada. ES5 introdujo el método bind() 
para establecer el valor de la función this independientemente de como es llamada, y ES2015 introdujo las funciones flecha que
no proporcionan su propio "binding" de this (se mantiene el valor de this del contexto léxico que envuelve a la función).
*/

const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func()); // 42

// Contexto
/*
Contexto global
En el contexto de ejecución global (fuera de cualquier función), this se refiere al objeto global, ya sea en modo estricto o no.
*/

console.log(this.document === document); // true

//En los navegadores web, el objeto window también es un objeto global:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37

/*
Contexto de la función
Dentro de una función, el valor de this depende de cómo la función es llamada.
*/

//Llamada simple
function f1() {
  return this;
}

f1() === window; // objeto global
/*
En este caso, el valor de this no está establecido por la llamada. Dado que el código no está en modo estricto, el valor de 
this debe ser siempre un objeto por lo que por defecto es el objeto global.
*/

function f2() {
  "use strict"; // consultar modo estricto
  return this;
}

f2() === undefined;
/*
En modo estricto, el valor de this se mantiene en lo que está establecida al entrar en el contexto de ejecución. Si no está 
definido, permanece undefined. También se puede ajustar a cualquier valor, tales como null o 42 o "Yo no soy this".
*/

/*
Como un método de un objeto

Cuando una función es llamada como un método de un objeto, el this cambia por el metodo del objeto llamado.
En el siguiente ejemplo, cuando o.f() es invocado, dentro de la función this es ligado al objeto o.
*/

var o = {
  prop: 37,
  f: function () {
    return this.prop;
  },
};

console.log(o.f()); // 37