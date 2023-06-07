
// Un stack, también conocido como pila es LIFO (Last-In First-Out), es decir, el último en entrar es el primero en salir.



//creo funcion constructora de instancias  Node, que van a ser objetos Node con props next y value
function Node(value) {
  this.value = value;
  this.next = null;
}

//declaro funcion constructora de la clase Minstack, q son objetos MinStack con prop top y prop minValue
function MinStack() {
  this.top = null;
  this.minValue = Infinity;
}

//agruego metodos a la clase minstack por medio de prototype

MinStack.prototype.push = function (value) {
  const newNode = new Node(value);
  if (value < this.minValue) {
    this.minValue = value;
  }
  if (this.top === null) {
    this.top = newNode;
  } else {
    newNode.next = this.top;
    this.top = newNode;
  }
};

//elimina el ultimo valor ingresado
MinStack.prototype.pop = function () {
  if (this.top === null) {
    return null;
  }
  const value = this.top.value;
  this.top = this.top.next;
  if (value === this.minValue) {
    this.updateMinValue();
  }
  return value;
};

//me dvuelve el el menor valor
MinStack.prototype.min = function () {
  return this.minValue;
};

//me devuelve el valor del ultimo valor ingreasado
MinStack.prototype.peek = function () {
  if (this.top === null) {
    return null;
  }
  return this.top.value;
};

//metodo de actualizzar el valor minimo
MinStack.prototype.updateMinValue = function () {
  if (this.top === null) {
    this.minValue = Infinity;
  } else {
    let minValue = this.top.value;
    let current = this.top.next;
    while (current !== null) {
      if (current.value < minValue) {
        minValue = current.value;
      }
      current = current.next;
    }
    this.minValue = minValue;
  }
};

const minStack = new MinStack();

minStack.push(4)
minStack.push(1)
minStack.push(1000)
minStack.push(0.5)
minStack.push(5000)
minStack.push(0.1)

// console.log(minStack.min())

// minStack.pop();

// console.log(minStack.min());

console.log(minStack)




