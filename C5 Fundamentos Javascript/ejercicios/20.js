function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  if (typeof letra !== "string" || letra.length !== 1) {
    return "Dato incorrecto";
  }

  // Convierte la letra a minúscula para simplificar las comparaciones
  letra = letra.toLowerCase();

  // Verifica si la letra es una vocal y devuelve el mensaje correspondiente
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    return "Es vocal";
  } else {
    return "Dato incorrecto";
  }
}

module.exports = esVocal;
