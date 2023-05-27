let a = 10;
let b = a;

console.log("Before: ", b);
a = 20;
console.log("After: ", b);
// -----------------------

let arr = [10];
let arr1 = arr;

console.log("Before: ", arr1);
arr.push(20);
console.log("After: ", arr1);
arr1.push(30);
console.log("After After: ", arr);

// -------------------------

// SHIFT and UNSHIFT
let arr2 = [10, 20, "Shashswat"];
const shiftedValue = arr2.shift();

console.log(shiftedValue);
console.log("After: ", arr2);

arr2.unshift(10);
console.log("After After: ", arr2);