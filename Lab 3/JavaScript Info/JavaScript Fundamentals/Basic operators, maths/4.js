//Initial code
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

// Corrected code
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 12