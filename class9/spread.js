const arrVal = ["My", "name", "is", "Shashwat"];
console.log(arrVal);

const array = [...arrVal];
console.log(arrVal, array);


// Use Case 1
// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4, 5];

// console.log(arr2);

// Close Array Using Spread Operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
let spreadCloneArray = [...arr1];

console.log("Before: Array 1 -", arr1);
console.log("Before: Array 2 -", arr2);
console.log("Before Spread - ", spreadCloneArray);

console.log("arr1.push(4)");
arr1.push(4);

console.log("After: Array 1 -", arr1);
console.log("After: Array 2 -", arr2);
console.log("After Spread - ", spreadCloneArray);

// ----------------------------------------
var arr = [1,2,3,4]; // 5

arr = [...arr, 5]; // Won't work
arr.push(5); // Works