

//funcion q me valida si la suma de cualquiera de los numeros del array sea igual a n
function SumArray (arr, n) {
  // Your code here:
//declaro bucle doble for para validar q las sumas internas del array sean iguales a n
for(let i = 0 ; i < arr.length ; i ++){
  for(let j = i +1 ; j < arr.length  ; j++){
    if(arr[i] + arr[j] === n){
      console.log(arr[i], arr[j])
      return true;
    }
    console.log(arr[i], arr[j])
  }
  
}
return false;

}

//console.log(SumArray([2, 4, 5, 9], 9));
console.log(SumArray([2, 4, 5, 9], 12));

module.exports = SumArray
