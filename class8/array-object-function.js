// Array
var a = [10, "Scaler", [[], []]];
console.log(a.length);

a.push(20);
console.log(a);

a.pop(20);
console.log(typeof a);

console.log(a[10]?.randomValue ?? "Don't know");

// Object
// let obj = { key: value };
let person = {
    name: "Shashwat Bagaria",
    age: 26,
    city: "BLR"
}

console.log(person?.nativeCity?.locality ?? "Don't know");


// Function
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(17));