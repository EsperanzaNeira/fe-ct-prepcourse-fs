function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:

  let fechaActual = new Date();

  // Obtener los años de diferencia entre la fecha actual y la fecha de nacimiento
  let edad = fechaActual.getFullYear() - new Date(fechaNacimiento).getFullYear();

  // Verificar si la persona es mayor de 18 años
  return edad >= 18;
}

// Ejemplo de uso
console.log(esMayorDeEdad("2000-03-21")); // Salida esperada: true (si la fecha actual es después del 21 de marzo de 2018)
console.log(esMayorDeEdad("2010-03-21")); // Salida esperada: false (si la fecha actual es antes del 21 de marzo de 2028)

module.exports = esMayorDeEdad;