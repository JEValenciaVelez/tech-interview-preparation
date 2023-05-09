//Encontrar el índice de la primera aparición de un string (needle) dentro de otro (haystack).

// Es decir, el objetivo del ejercicio es determinar si el primer string, needle, esta dentro del segundo, haystack, y en dicho caso, devolver el índice en el que esto ocurre.

// Ejemplos
// Lo encuentra
// needle: redux
// haystack: react-redux
// output: 6
// No lo encuentra
// needle: puntual
// haystack: pinky
// output: -1
// En este caso, como el needle no se encuentra en el haystack el valor de salida es -1.

// IMPORTANTE
// Para la resolución de este ejercicio no se pueden utilizar los métodos indexOf( ) ni includes


function FindNeedle (haystack, needle) {
  // Your code here:
  //bucle for para iterar sobre los caracteres de haystack. Dentro del bucle hay otro bucle while que compara los caracteres de needle con los caracteres de haystack a partir del índice actual del bucle for
  for (let i = 0; i < haystack.length; i++) {
    let j = 0;

    //Si se encuentra una coincidencia, se incrementa j para comparar el siguiente caracter
    while (j < needle.length && i + j < haystack.length && haystack[i + j] === needle[j]) {
      j++;
    }

    //Si se llega al final de needle sin encontrar ninguna diferencia, se ha encontrado el string needle dentro de haystack y se devuelve el índice actual.
    if (j === needle.length) {
      return i;
    }
  }
  //Si se llega al final del bucle for sin encontrar ninguna coincidencia, se devuelve -1 para indicar que needle no se encuentra dentro de haystack
  return -1;

}

//console.log(FindNeedle('react-redux','redux'));
//console.log(FindNeedle('pinky','puntual'));
//console.log(FindNeedle('rereredux', 'reredux'))


module.exports = FindNeedle
