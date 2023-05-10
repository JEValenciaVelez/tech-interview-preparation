
//recibe un arreglo con enteros q representan el cambio de valor de una accion con el tiempo Encontrar cuál es la máxima ganancia posible de comprar en un momento y vender en otro posterior
function MaxValue (shares) {
  // Your code here:
  
  //variable para guardar la maxima ganancia
  let maxProfit = 0;

  //tomo de referencia el primer numero del array
  let minPrice = shares[0];

  for (let i = 1; i < shares.length; i++) {
    //referencia del precio en cada iteracion
    const currentPrice = shares[i];
    //evaluo la diferencia del primer precio con el precio de la iteracion actual
    const potentialProfit = currentPrice - minPrice;
    //maxima ganancia
    maxProfit = Math.max(maxProfit, potentialProfit);
    //precio minimo
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;

}

console.log(MaxValue([4, 3, 2, 5, 11]));
console.log(MaxValue([23, 7, 3, 4, 8, 6]));


module.exports = MaxValue
