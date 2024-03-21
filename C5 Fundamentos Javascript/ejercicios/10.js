function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  
  
 
    // Compruebe si la fecha es válida pasándola a isNaN
    return !isNaN(fecha);
    
}

module.exports = esFechaValida;