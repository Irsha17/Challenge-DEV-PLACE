/****** Ciro Lopez ******/
/////////////////  Ejercicio 3   /////////////////
/*. Por teclado se ingresa el valor hora de un empleado. Posteriormente se ingresa el
nombre del empleado, la antigüedad y la cantidad de horas trabajadas en el mes. Se
pide calcular el importe a cobrar teniendo en cuenta que al total que resulta de
multiplicar el valor hora por la cantidad de horas trabajadas. Además, si el empleado
tiene más de 10 años de antigüedad hay que sumarle la cantidad de años trabajados
multiplicados por $30. Imprimir en pantalla el nombre, la antigüedad y el total a cobrar.
*/

var valorXhora = prompt("Ingrese su valor X hora:");                                     /// Se ingresan los datos
var nombre = prompt("Ingrese su nombre:");
var antiguedad = prompt("Ingrese su antiguedad");
var horasTrabajadas = prompt("Ingrese sus horas trabajadas");

var respuesta=calcularPaga(valorXhora, antiguedad, horasTrabajadas);
console.log("Nombre:"+nombre+"   Antiguedad:"+antiguedad+"    Sueldo:"+respuesta);      

function calcularPaga(valorXhora, antiguedad, horasTrabajadas){                          /// En esta funcion con los datos se calcucula el sueldo
    var resultado;

    if(antiguedad>=10){                                                                  /// Si su antiguedad es mayor a 10 
        resultado = (valorXhora*horasTrabajadas) + (antiguedad*30);                      /// Se ingresa el extra por antiguedad 
    }else{                                                                               
        resultado = valorXhora*horasTrabajadas;                                          /// Sino solo se calcula el sueldo por hora trabajada
    }

    return resultado;                                                                    /// Retornamos el total del saldo
}