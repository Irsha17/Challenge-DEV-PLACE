/****** Ciro Lopez ******/
/////////////////  Ejercicio 2   /////////////////
/* Escribe una aplicación que solicite al usuario que ingrese una contraseña cualquiera.
Después se le pedirá que ingrese nuevamente la contraseña, con 3 intentos. Cuando
acierte ya no pedirá más la contraseña y mostrará un mensaje diciendo “Felicitaciones,
recordás tu contraseña”. Si falla luego de 3 intentos se mostrará el mensaje “Tenes que
ejercitar la memoria”. Los mensajes quedarán en pantalla a la espera que el usuario
presione una tecla, luego de esto se cerrará el programa.
*/

var contraseña = prompt("Ingrese una contraseña");                                     /// Se ingresa la contraseña

var respuesta=recordarConstraseña(contraseña);                                   
if(respuesta == 5){                                                                    /// Muestra por pantalla el resultado
    console.log("Felicidades, recordo su contraseña..");
}else{
    console.log("Tenes que ejercitar la memoria");
}

function recordarConstraseña(contraseña){                                               /// En esta funcion se verifica si la contraseña ingresada por 2da vez es correcta
    var contador=0;
    do{
        var contraseñaGuarda = prompt("Ingrese nuevamente la contraseña");              /// Entramos en un bucle e ingresamos de nuevo la contraseña

        if(contraseña==contraseñaGuarda){                                               /// Si la contraseña es igual el contador es 5 para poder salir del bucle
            contador=5; 
        }else{                                                                          /// Sino te dice q lo vuelvas a intentar y suma el contador 
            console.log("vuelva a intentar")
            contador++;                                                                 /// El contador si llega a 3, corta el bucle ya que es el maximo de intentos 
        }
    }while(contador<3);
    return contador;
}