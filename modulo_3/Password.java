/****** Ciro Lopez ******/
/////////////////  Ejercicio POO   /////////////////


 public class Password {
  

    private final static int LONG_DEF=8;
  
    //Atributos

    private int longitud;
    private String contraseña;
  
    //Constructores

    public Password (){                                   /// Constructor vacio 
        this(LONG_DEF);
    }
  ss
    public Password (int longitud){
        this.longitud=longitud;
        contraseña=generaPassword();
    }

    //Getters y Setters
  
    public int getLongitud() {
        return longitud;
    }
  
    public void setLongitud(int longitud) {
        this.longitud = longitud;
    }
  
    public String getContraseña() {
        return contraseña;
    }

    //Metodos publicos
  
    public String generaPassword (){                                                   /// En esta funcion generamos una contraseña aleatoria
        String password="";
        for (int i=0;i<longitud;i++){
            
            int eleccion=((int)Math.floor(Math.random()*3+1));                          /// Generamos un numero aleatorio, 
            if (eleccion==1){                                                           /// segun este elige si añadir una minuscula, mayuscula o numero
                char minusculas=(char)((int)Math.floor(Math.random()*(123-97)+97));     /// asi hasta generar la contraseña de ciertta longitud
                password+=minusculas;
            }else{
                if(eleccion==2){
                    char mayusculas=(char)((int)Math.floor(Math.random()*(91-65)+65));
                    password+=mayusculas;
                }else{
                    char numeros=(char)((int)Math.floor(Math.random()*(58-48)+48));
                    password+=numeros;
                }
            }
        }
        return password;                                                                  /// Devolvemos la contraseña
    }

  
    public boolean esFuerte(){                                                       /// En esta funcion devolvemos un booleando dependiendo de si es fuerte o no

        int cuentanumeros=0;                                         
        int cuentaminusculas=0;
        int cuentamayusculas=0;
        
        for (int i=0;i<contraseña.length();i++){                                      /// n vamos caracter a caracter y comprobamos que tipo de caracter es
                if (contraseña.charAt(i)>=97 && contraseña.charAt(i)<=122){
                    cuentaminusculas+=1;
                }else{
                    if (contraseña.charAt(i)>=65 && contraseña.charAt(i)<=90){        /// charAt nos devuelve un caracter de el arreglo de contraseñas
                        cuentamayusculas+=1;
                }else{
                    cuentanumeros+=1;
                    }
                }
            }    
            if (cuentanumeros>=5 && cuentaminusculas>=1 && cuentamayusculas>=2){      /// Si la constraseña tiene mas de 5 numeros, mas de 1 minuscula y mas de 2 mayusculas
            return true;
        }else{
            return false;
        }
    }
}