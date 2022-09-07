'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {

  // console.log(array)
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array < 2) {
    return array;
  }

  let left = []
  let right = []
  let aux = []
  let pivot = array.pop();
  let len = array.length;

  for (let i = 0; i < len ; i++) {
    if (array[i] <= pivot) {
      left.push(array[i])
    }
    else {
      right.push(array[i])
    }
  }
  return aux.concat(quickSort(left), pivot, quickSort(right));
}


// let arreglito = [5, 1, 4, 2, 8];
// console.log(quickSort(arreglito)) 

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
    const half = Math.floor(array.length / 2)
    
    if(array.length < 2){
      return array 
    }
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
}
  
  function merge(left, right) {
    let arr = []
    
    while (left.length && right.length) {
        
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    } 
    return [ ...arr, ...left, ...right ]
 }


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
