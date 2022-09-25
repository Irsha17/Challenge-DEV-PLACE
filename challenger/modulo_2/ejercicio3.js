/****** Ciro Lopez ******/
/////////////////  Ejercicio 3   /////////////////
/*Construir una función que sume los elementos de una lista de enteros recursivamente.
*/

function sumaRecursiva(lista, inicial, final){                         /// En esta funcion intente usar la logica de javascript pero no pude encontrar la vuelta
    var n;

    if(inicial!=final){                                                /// De igual manera dejo este codigo q fue un prototipo de como lo intente hacer
        Recuperar(n, inicial, Lista); 
        return n+sumaRecursiva(lista,Siguiente(inicial,lista),final);     
    }
    else return 0;
}
