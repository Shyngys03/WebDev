// Task 1:
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Task 2:
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    
    return true;
}

// Task 3:
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

// Answer:
let sum = 0;
for(let x in salaries){
    sum += salaries[x];
}
alert(sum);


// Task 4:
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
multiplyNumeric(menu);
  
// after the call
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};

// Answer:
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}