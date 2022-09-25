/****** Ciro Lopez ******/
/////////////////  Ejercicio 1   ///////////////// 
/*Pide un número por teclado e indica si es un número primo o no. Un número primo es
aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que
25 es divisible entre 5, sin embargo, 17 si es primo.
*/

var numero;
numero=prompt("ingrese un numero: ");

var respuesta = primo(numero);
 if(respuesta == false){                                                             /// Si la respuesta es false entonces no es primo
    console.log("No es primo");
 }else{                                                                              /// Sino, es primo
    console.log("Es primio");
}

function primo(numero) {                                                             /// Esta funcion devuelve un booleando si es primo o no
    for (var i = 2; i < numero/2; i++) {
      if (numero % i == 0) {                                                         /// Si el resto es 0 entonces devuelve false
        return false;
      }
    }
    return true;                                                                     /// Devuelve true si no entra al if
}
