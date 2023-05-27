console.log(a);
var a = 10;

// Hoisted
var a;
console.log(a);
a = 10;


// Hoisting in Functions
greet();

function greet() {
    console.log("Good Morning, Scaler!");
}

