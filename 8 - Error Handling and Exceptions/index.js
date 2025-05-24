// Captura y manejo de errores usando try, catch y finally

/*
La declaración try...catch señala un bloque de instrucciones a intentar (try), y especifica una respuesta si se produce una 
excepción (catch). 
La sentencia try consiste en un bloque try que contiene una o más sentencias. Las llaves {} se deben utilizar siempre, 
incluso para un bloque de una sola sentencia. Al menos un bloque catch o un bloque finally debe estar presente. 
Esto nos da tres formas posibles para la sentencia try:
try...catch
try...finally
try...catch...finally
Un bloque catch contiene sentencias que especifican que hacer si una excepción es lanzada en el bloque try. 
Si cualquier sentencia dentro del bloque try (o en una funcion llamada desde dentro del bloque try) lanza una excepción, 
el control cambia inmediatamente al bloque catch. Si no se lanza ninguna excepcion en el bloque try, el bloque catch se omite.
El bloque finally se ejecuta despues del bloque try y el/los bloque/s catch hayan finalizado su ejecución. Éste bloque 
siempre se ejecuta, independientemente de si una excepción fue lanzada o capturada.
Puede anidar una o más sentencias try. Si una sentencia try interna no tiene un bloque catch, se ejecuta el bloque catch 
de la sentencia try que la encierra.
*/

try {
  nonExistentFunction();
} catch (error) {
  console.error('Error: ', error);
  // ReferenceError: nonExistentFunction is not defined
}
