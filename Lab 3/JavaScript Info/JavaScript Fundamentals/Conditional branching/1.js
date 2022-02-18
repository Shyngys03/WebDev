// Task 1 : Will alert be shown?
if ("0") {
    alert( 'Hello' );
}

// Answer: yes, because "0" is not a empty string. So it will be true.

// Task 2: 
//Solution 1:
let name = prompt('What is the "official" name of JavaScript?');
if(name == "ECMAScript"){
    alert("Right!");
}
else{
    alert("You don’t know? ECMAScript!");
}
//Solution 2:
(name == "ECMAScript") ?
    alert("Right!") : alert("You don’t know? ECMAScript!");

// Task 3:
//Solution:

x = +prompt("Enter a number");

if(x > 0){
    alert(1);
}
else if(x < 0){
    alert(-1);
}
else{
    alert(0);
}

// Task 4: Rewrite this if using the conditional operator '?':
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

// Answer:
(a + b < 4) ?
    result = 'Below' : result = 'Over';


// Task 5: Rewrite if..else using multiple ternary operators '?'.
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

// Answer:
(login == 'Employee') ? message = 'Hello' :
(login == 'Director') ? message = 'Greetings' :
(login == '') ? message = 'No login' :
message = '';