// Cómo funciona la herencia basada en prototipos en JavaScript

/*
Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí.
Un objeto prototipo del objeto puede tener a su vez otro objeto prototipo, el cual hereda métodos y propiedades, y así 
sucesivamente. Esto es conocido con frecuencia como la cadena de prototipos, y explica por qué objetos diferentes pueden 
tener disponibles propiedades y métodos definidos en otros objetos.

Los métodos y propiedades son definidos en la propiedad prototype, que reside en la función constructora del objeto y no en 
la instancia misma del objeto.
*/

function Persona(name, lastName, age, gender, personalInterests) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
  this.personalInterests = personalInterests;
}

const person1 = new Persona("Bob", "Smith", 32, "hombre", ["music", "skiing"]);

/* 
Esta es otra forma de crear objetos, usando una funcion constructora.
Ahora este objeto hereda todos los atributos del objeto prototipo Persona, pero ademas hereda los métodos de Prototype, 
por lo que puede acceder a funciones como valueOf que devuelve el valor del objeto sobre el que se llama entre otros.
*/