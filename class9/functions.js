// Function Declaration
function greetMorning(name) {
    console.log("Good Morning,", name);
}

function greetNight(name) {
    console.log("Good Night,", name);
}

function greet(isMorning, name = "Scaler") {
    let greeting = "";

    if (isMorning) {
        greeting = "Good Morning";
    } else {
        greeting = "Good Night";
    }

    console.log(greeting + ", " + name);
}

// Function Execution
greetMorning("Shashwat");
greetNight("Shashwat");

greet(true)

function sum(a, b) {
    return a + b;
}

// Function Expression
const sum = function(a, b) {
    return a + b;
}


console.log("===>", sum(10, 20));