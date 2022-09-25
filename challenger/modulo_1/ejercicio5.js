/****** Ciro Lopez ******/
/////////////////  Ejercicio 5   /////////////////
/*Pedir al usuario que ingrese un número repetidamente hasta que ingrese un -1 y en ese
caso se terminará el programa.
Al terminar, mostrará lo siguiente:
a. – mayor número introducido
b. – menor número introducido
c. – suma de todos los números
d. – suma de los números        //// Este punto no entendi la diferencia entre el anterior
*/

var arreglo = [];                                                                       /// Creamos un Arreglo sin dimensiones 

arreglo=cargarArreglo(arreglo);
console.log(arreglo);

mayorMinimo(arreglo);

console.log(sumaArreglo(arreglo));

function cargarArreglo(arreglo){                                                        /// En esta funcion cargamos el arreglo
    do{
        var numero = prompt("Ingrese un numero repetidamente hasta ingresar -1");
        if(numero!=-1){                                                                 /// Cree un "if" para asi no cargar el "-1" al arreglo
            arreglo.push(numero);                                                       /// El metodo "push" carga automaticamente el arreglo 
        } 
    }while(numero!=-1)                                                             
    return arreglo;                                                                     /// Devolvemos el arreglo Cargado
}

function mayorMinimo(arreglo){                                                          /// En esta funcion buscamos el mayor y minimo y lo mostramos por pantalla
    var min=Math.min.apply(null, arreglo);                                              /// Los metodos de la libreria "Math" nos permite encontra el mayor y menor
    var max=Math.max.apply(null, arreglo);

    console.log("Mayor: "+ max);
    console.log("Minimo: "+ min);
}

function sumaArreglo(arreglo){                                                          /// Esta funcion suma todo los numeros del arreglo
    var suma=0;
    for(var i=0; i<arreglo.length; i++){
        suma+=arreglo[i];
    }
    return suma;                                                                        /// Retornamos el total
}