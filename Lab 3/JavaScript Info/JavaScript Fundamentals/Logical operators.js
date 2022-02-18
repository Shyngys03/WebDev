// Task 1:
alert( null || 2 || undefined );
//Answer: 2


// Task 2:
alert( alert(1) || 2 || alert(3) );
// Answer: 1 \n 2

// Task 3:
alert( 1 && null && 2 );
// Answer: null

// Task 4:
alert( alert(1) && alert(2) );
// Answer: 1 then undefined

// Task 5:
alert( null || 2 && 3 || 4 );
// Answer: 3

// Task 6:
if(age >= 14 && age <= 90){
    // Do something
}

// Task 7:
// Variant 1:
if(age < 14 || age > 90)
// Variant 2:
if(!(age >= 14 && age <= 90))

// Task 8:
if (-1 || 0) alert( 'first' ); // is executed
if (-1 && 0) alert( 'second' ); // is not executed
if (null || -1 && 1) alert( 'third' ); // is executed

// Task 9:
login = prompt("Who's there?");

if(login == null) alert("Canceled");

if(login == "Admin"){
    password = prompt("Password?");
    if(password == null) alert("Canceled")
    if(password == "TheMaster") alert("Welcome");
    else alert("Wrong password");
}
else alert("I don't know");