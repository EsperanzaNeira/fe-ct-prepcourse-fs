function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a > b) {
    // Almacenamos a en una variable temporal  
    let variableTemporal = a;
    // Se iguala el valor de 'a' a 'b'  
    a = b;
    // Posteriormente se termina de igualar 'b' a esa variable temporal  
    b = variableTemporal;
    // Con esto lo que conseguimos es que 'a' siempre sea menor que 'b'... Algebra lineal
  }
  // La variable producto se inicializa a 1 porque es la identidad multiplicativa en matemáticas.. 
  // Lo que significa que cualquier número multiplicado por 1 sigue siendo el mismo número.
  let producto = 1;


  // Multiplicar todos los números entre 'a' y 'b' (inclusive)
  for (let i = a; i <= b; i++) {
    // Si i es 0, entonces el producto será 0
    if (i === 0) {
      return 0;
    }
    producto = producto * i
  }

  return producto;
}



module.exports = productoEntreNúmeros;