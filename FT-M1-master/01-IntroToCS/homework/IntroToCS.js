'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let decmal = 0;
  for (let i = 0; i < num.length; i++) {
    decmal += +num[i] * 2 ** (num.length - 1 - i);
  } 
  return decmal;
}

function DecimalABinario(num) {
  // tu codigo aca
  
  let remainder = 0;
  let binario = "";
  let x = Math.floor(num)
    for (let i = 1; x > 0; i++) {

            remainder = x % 2;
            x = Math.floor(x / 2);
            binario += remainder;
            
  } binario = binario.split('').reverse().join('');
  return binario;
} 


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}