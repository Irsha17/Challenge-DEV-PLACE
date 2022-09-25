/****** Ciro Lopez ******/
/////////////////  Ejercicio 4   /////////////////
/*Generar un número aleatorio comprendido entre 0 y 1000. Pedir, a continuación, al
usuario adivinar el número escogido por el ordenador. Para ello, debe introducir un
número comprendido entre 0 y 1000. Se compara el número introducido con el
calculado por el ordenador y se muestra en la consola "es mayor" o "es menor" en
función del caso. Se repite la operación hasta que el usuario encuentra el número
*/
var numeroRandom = randomFuncion(0,1000);                                            /// Generamos una variable que contenga un numero random entre el 0 y el 1000

encontrarNumero(numeroRandom);
console.log("Bien lo encontraste!!")

function encontrarNumero(numeroRandom){                                              /// En esta funcion se busca el numero random
    var numeroUser;
    var encontrado=0;
    do{
        numeroUser=prompt("Adivine el numero Random");
        if(numeroRandom==numeroUser){                                                /// Si se encuentra devuelve 1 para cortar el bucle
            encontrado=1;
        }else{
            mayorMenor(numeroRandom, numeroUser);                                    /// Sino se llama a otra funcion para acortar el rango de busqueda
            encontrado=0;                                                            /// Tambien se devuelve 0 para repetir bucle
        }
    }while(encontrado==0);
}

function mayorMenor(numeroRandom, numeroUser){                                       /// En esta funcion se devuelve un mensaje de si el numero es menor o mayor al buscado
    if(numeroRandom<numeroUser){
        console.log("Es menor");
    }else{
        if(numeroRandom>numeroUser){
            console.log("Es mayor");
        }
    }
}
function randomFuncion(min, max) {                                                     /// Genera un numero random
    min = Math.ceil(min);                                                              /// BIO: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}