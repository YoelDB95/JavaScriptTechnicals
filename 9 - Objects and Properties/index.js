// Creación y manipulación de objetos, así como el acceso a sus propiedades.

/*
Los objetos en JavaScript, como en tantos otros lenguajes de programación, se pueden comparar con objetos de la vida real. 
El concepto de Objetos en JavaScript se puede entender con objetos tangibles de la vida real.
En JavaScript, un objeto es una entidad independiente con propiedades y tipos. Por ejemplo, una taza es un objeto con 
propiedades. Una taza tiene un color, un diseño, un peso, un material del que está hecha, etc. Del mismo modo, los objetos 
de JavaScript pueden tener propiedades que definan sus características.
Cada atributo del objeto tiene las mismas caracteristicas que un variable común.
Para agregarle atributos al objeto se pueden usar los corchetes, el punto(.) o crearlos directamente con los corchetes {}.
*/

const cup = { color: 'white', weigth: 10}

cup.design = 'classic'
cup['material'] = 'porcelain'

console.log(cup); /*
{
  color: 'white',
  weigth: 10,
  design: 'classic',
  material: 'porcelain'
}
*/

/*
Para modificar un objeto se pueden usar los corchetes o el punto(.)
*/

cup.color = 'black'
console.log(cup); /*
{
  color: 'black',
  weigth: 10,
  design: 'classic',
  material: 'porcelain'
}
*/

/*
A los objetos tambien se les pueden agregar comportamiento llamados métodos. Los métodos se definen normalmente como una 
función, con excepción de que tienen que ser asignados como la propiedad de un objeto.
*/

const car = {
    color: 'red', 
    weight: 1500,
    toString: function() {
        return 'color: ' + this.color + ' weight: ' + this.weight
    },
    run: function() {
        console.log('runnig');
    }
}

car.run() // running
console.log(car.toString()); // color: red weight: 1500