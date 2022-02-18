// Task 1:
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() );

// Task 2:
function Calculator() {

    this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
        return this.a + this.b;
    };
  
    this.mul = function() {
        return this.a * this.b;
    };
}

// Task 3:
function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
        this.value += +prompt('How much to add?');
    };
}