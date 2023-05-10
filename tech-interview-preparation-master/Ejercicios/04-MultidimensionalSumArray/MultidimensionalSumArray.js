function mdArraySum (arr) {
  // Your code here:
  let sum = 0;

  //itero en el array
  for (let i = 0; i < arr.length; i++) {
    //referencia del  numero de la iteracion actual
    const current = arr[i];

    //evaluo si es array el elemento del la iteracion actual
    if (Array.isArray(current)) {
      //si es array vuelvo y evaluo los pasos anteriores(recursion), hasta llegar al ultimo elemento y asi se sumen los numeros
      sum += mdArraySum(current);
    } else {//si  no es array 
      sum += current;
    }
  }

  return sum;

}

console.log(mdArraySum([1, 2, 3, 4]));  //10
console.log(mdArraySum([[2, 4], [1], [4, 2, 1]]));  //14
console.log(mdArraySum([2, [3, 4], 5, [-3, [6, [4, 5]]]]));  //26

module.exports = mdArraySum
