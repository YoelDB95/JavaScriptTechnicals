/*
Funciones que capturan el estado de su entorno de creación, permitiendo acceso a variables externas incluso después de 
finalizar su contexto original
*/

/*
Un closure es la combinación de una función agrupada (dentro de otra) con referencias a su estado adyacente (el entorno léxico).
En otras palabras, un closure te da acceso al alcance de una función externa desde una función interna. En JavaScript, 
los closure se crean cada vez que se crea una función, en el momento de la creación de la función.
*/

function a() {
    const varA = "pertenece a la funcion a"
    function b() {
        const varB = 'pertenece al closure'
        console.log(varA);
        console.log(varB);   
    }

    return b;
}

const x = a()

x() // pertenece a la funcion a
    // pertenece al closure

/*
varA igual se muestra por más que la función a no exista en memoria ya que se guardo el contexto de las variables usadas 
por la funcion b
*/