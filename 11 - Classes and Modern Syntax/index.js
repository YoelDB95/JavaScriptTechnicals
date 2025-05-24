// Uso de las clases en JavaScript moderno con las palabras clave class, extends y super.

/*
Para crear una clase se utiliza la palabra clave class
*/

class Circle {
    radius;

    constructor(radius) {
        this.radius = radius
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius 
    }
}

const circle = new Circle(2)

console.log(circle.getPerimeter()); // 12.566370614359172

/*
constructor es una palabra clave que se usa en las clases para construir el objeto, se usa para inicializar los atributos o
crear el objeto vacio para que este en memoria y poder usarlo. 

Cuando hay comportamiento semejante y la relación entre ambas es "es un" entre dos clases se puede utilizar la herencia. 
Por ejemplo, un circulo y un semi circulo saben calcular su perimetro y tienen al radio como propiedad y se puede 
considerar que un semicirculo "es un" circulo, entonces, semicirculo puede heredar de circulo.
Se utiliza la palabra reservada extends.
*/

class SemiCircle extends Circle {
    getPerimeter() {
        return Math.PI * this.radius
    }
}

/*
Como el perimetro de un semicirculo es la mitad de un circulo, al dividirlo por 2 se simplifican y quedan solo PI y el radio.
En este caso podriamos aprovechar la herencia y ejecutar los metodos de las clases heredadas usando la palabra reservada super.
Super se usa para acceder a la clase padre, tanto para ejecutar los métodos como para ejecutar al constructor.
*/

class SemiCircle1 extends Circle {
    getPerimeter() {
        return super.getPerimeter / 2
    }
}

/*
Si crearamos otra clase para los cuadrados, esta tambien sabe calcular su perimetro, por lo que tiene el mismo comportamiento
que el circulo, pero no se calculan igual, por lo que no se puede aplicar lo de Cuadrado "es un" Circulo. Aplicando la 
abtracción, ambos objetos son figuras que saben como calcular su perimetro, por lo que se puede crear una clase abstracta
que tenga el comportamiento general y cada clase hija defina su comportamiento puntual.
*/

class Figure {
    name;

    constructor(name) {
        this.name = name
    }
}

class CircleF extends Figure {
    radius

    constructor(radius) {
        super('Circle')
        this.radius = radius
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius 
    }
}

class SquareF extends Figure{
    side

    constructor(side) {
        super('Square')
        this.side = side
    }
    getPerimeter() {
        return 4 * this.side
    }
}

const c = new Circle(4)

console.log(c.getPerimeter()); // 25.132741228718345


/*
El constructor de Figure se utiliza para inicializar el nombre de la figura, para lo cual cada clase hija utiliza super()
para usar el constructor de Figure y pasarle su nombre, super tambien puede acceder a un método o a un atributo con el punto(.)
*/
