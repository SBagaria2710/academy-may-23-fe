const obj = {
    firstName: "Shashwat",
    lastName: "Bagaria"
};

// FREEZE
obj.firstName = "Anurag";
console.log("Before: ", obj);

Object.freeze(obj);
obj.firstName = "Shashwat";
console.log("After: ", obj);

// -------------------------
const obj1 = obj;
console.log(obj1.firstName);

obj1.firstName = "Anurag";
console.log(obj);

// ---------------------------
// DELETE

delete obj.lastName;
console.log(obj);