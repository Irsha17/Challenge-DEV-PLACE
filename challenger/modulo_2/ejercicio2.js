/****** Ciro Lopez ******/
/////////////////  Ejercicio 2   /////////////////
/* Escribir una función Reemplazar que tenga como argumentos una pila con tipo de elemento
int y dos valores int: nuevo y viejo de forma que si el segundo valor aparece en algún lugar de
la pila,sea reemplazado por el segundo
*/

class Pila {                                                   /// Para implementar pilas en javascript copie una clases de Pilas 
    elementos = [];                                            /// BIO: https://www.neoguias.com/pilas-javascript/
    
    push = (elemento) => {
      return this.elementos.push(elemento);
    }
    pop = () => {
      return this.elementos.pop();
    }
    isempty = () => {
      return this.elementos.length === 0;
    }
    empty = () => {
      this.elementos.length = 0;
    }
    size = () => {
      return this.elementos.length;;
    }
  }

function remplazar(pila, nuevo, viejo){                        /// En esta funcion remplazamos el numero viejo por el nuevo en una pila 
    var pila2 = new Pila();                                    /// Creamos una pila auxiliar 
    var aux;                                                   /// Creamos un auxiliar para copiar el primer elemento

    while(pila.isempty()==0){                                  /// Verificamos q no este vacia
        aux=pila.pop();
        if(aux==viejo){                                        /// Si el aux es igual al numero viejo lo cambiamos por el nuevo 
            pila2.push(nuevo);                                 /// Y lo almacenamos en la pila auxiliar
        }else{
            pila2.push(aux);                                   /// Sino lo guardamos el numero aux en la pila auxiliar
        }
    }
    while(pila2.isempty()==0){                                 /// Aca basicamente volvemos todos los datos a la pila original
        pila.push(pila2.pop());                                /// para asi vuelven el el orden q vinieron
    }
    return pila;                                               /// Devolvemos Pila
}
