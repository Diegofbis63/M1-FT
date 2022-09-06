"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
};

BinarySearchTree.prototype.size = function () {
  let nsize = 1;
  if (this.right !== null) {
    nsize += this.right.size();
  }
  if (this.left !== null) {
    nsize += this.left.size();
  } return nsize;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value) {
    if (this.right !== null) {
      this.right.insert(value);
    }
    else {
      this.right = new BinarySearchTree(value)
    }
  }
  if (value < this.value) {
    if (this.left !== null) {
      this.left.insert(value);
    }
    else {
      this.left = new BinarySearchTree(value);
    }
  }
}

BinarySearchTree.prototype.contains = function (value) {

  if (value === this.value) return true

  if (value > this.value) {
    if (!this.right)
      return false;
    else {
      return this.right.contains(value)
    }
  } if (value < this.value) {
    if (!this.left)
      return false;
    else {
      return this.left.contains(value);
    }
  }
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {

  if (order === "pre-order") {
    cb(this.value)
    if (this.left) this.left.depthFirstForEach(cb, order)
    if (this.right) this.right.depthFirstForEach(cb, order)
    
  }
  else if (order === "post-order") {
    if (this.left) this.left.depthFirstForEach(cb, order)
    if (this.right) this.right.depthFirstForEach(cb, order)
    cb(this.value)
  }
  else {
    if (this.left) this.left.depthFirstForEach(cb, order)
    cb(this.value)
    if (this.right) this.right.depthFirstForEach(cb, order)
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array=[]) { 
  // let array = []

  if (this.left) {
    array.push(this.left)
  }
  if (this.right) {
    array.push(this.right)
  }
  cb(this.value)

  while (array.length > 0) {
    array.shift().breadthFirstForEach(cb, array)
  }
}

// let bsc = new BinarySearchTree(7)

// bsc.insert(15)
// bsc.insert(8)
// bsc.insert(6)
// bsc.insert(5)
// bsc.insert(12)

// console.log(bsc.contains(5))

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
