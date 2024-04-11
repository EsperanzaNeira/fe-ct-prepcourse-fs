function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   return Math.max(a, 0) === a && Math.min(a, 10) === a;
   
}

module.exports = esPositivoOInferiorA10;
