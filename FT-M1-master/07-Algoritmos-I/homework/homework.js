'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var array = [1]
  

  for (var i = 2; i < num +1; i++) {
    if (num % i === 0) {
      array.push(i);
      num /= i;
      i -= 1
    }
  } return array
}

console.log(factorear(180))

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let len = array.length;
  
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        } 
    }
    return array;
};

// let array = [5, 1, 4, 2, 8]

// console.log(bubbleSort(array))


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let len = array.length;
  
    for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j = j - 1;
      }
      array[j + 1] = key; 
    } 
    return array;
  };

// let arreglo = [5, 1, 4, 2, 8]

// console.log(insertionSort(arreglo))

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  let min;

  for (let index = 0; index < array.length - 1; index++) {
    min = index;
    for (let scan = index + 1; scan < array.length; scan++) {
      if (array[scan] < array[min]) {
        min = scan;
      }
    }
    swap(array, index, min);
  } return array;
}
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

var arreglo = [5, 1, 4, 2, 8]
selectionSort(arreglo)
console.log(arreglo)


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
