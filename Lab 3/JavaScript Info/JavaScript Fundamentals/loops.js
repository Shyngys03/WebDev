// Task 1:
let i = 3;

while (i) {
  alert( i-- );
}

// Answer: last iteration is :
i = 1
// after this will be
alert(i--); // i-- means i = 0
// 0 == false, so loop is finished

// Task 2:
1.
let i = 0;
while (++i < 5) alert( i );
// output: 1 2 3 4

2.
let i = 0;
while (i++ < 5) alert( i );
// output: 1 2 3 4 5


// Task 3:
1.
for (let i = 0; i < 5; i++) alert( i );
// output: 0 1 2 3 4

2.
for (let i = 0; i < 5; ++i) alert( i );
// output: 0 1 2 3 4


// Task 4:
for(let i = 2; i <= 10; i += 2) alert(i);
// or
for(let i = 2; i <= 10; i++){
    if(i % 2 == 0) alert(i);
}

// Task 5:
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

// Answer:
let i = 0;
while(i < 3){
    alert( `number ${i}!` );
    i++;
}


// Task 6:
let x = +prompt("Enter a number");;
while(x <= 100 && x){
    x = +prompt("Enter a number");
}

// Task 7:

let n = +prompt("Enter n:");

for(let i = 2; i <= n; i++){
    let isPrime = true;
    for(let j = 2; j < i; j++){
        if(i % j == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime) alert(i);
}

