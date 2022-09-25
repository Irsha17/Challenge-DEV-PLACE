/****** Ciro Lopez ******/
/////////////////  Ejercicio 1   /////////////////
/* Implementar una función que recibe una lista de enteros L y un número entero n de forma
que modifique la lista mediante el borrado de todos los elementos de la lista que tengan este
valor
*/
var list = new Array(1,3,5,6,7,33,3,2,26,21,3,9);             /// Creamos una lista 

console.log(list);           

list=modificarLista(list, 3);

console.log(list);

function modificarLista(list, numero){                        /// En esta funcion vamos a recorrer la lista 
    list.forEach(function(numeroL , i){                       /// si encontramos el numero lo eliminamos de la la ista 
        if(numeroL==numero){
            list.splice(i, 1);
        }
    });
    return list;                                              /// Devolvemos la lista ya modificada
}
