// Task 1:
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
}
// and
function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
}

// Answer: there are functions the same.


/// Task 2:
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
}

// Variant 1:
function checkAge(age){
    return (age > 18) ? true : confirm('Did parents allow you?');
}

// Variant 2:
function checkAge(age){
    return (age > 18) || confirm('Did parents allow you?');
}


// Task 3:
function min(a, b){
    return (a < b) ? a : b;
}


// Task 4:
function pow(x, n){
    let a = 1;
    for(let i = 1; i <= n; i++){
        a *= x;
    }
    return a;
}

// or

function pow(x, n){
    return x**n;
}