// Task 1:
function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // What's the result?

// Answer: Error


// Task 2:
let calculator = {
    sum() {
        return this.a + this.b;
    },
  
    mul() {
        return this.a * this.b;
    },
  
    read() {
        this.a = +prompt('Enter a:');
        this.b = +prompt('Enter b:');
    }
};


// Task 3:
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
        return this;
    }
};