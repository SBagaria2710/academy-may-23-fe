const obj = {
    firstName: "Shashwat",
    lastName: "Bagaria",
    role: "Instructor",
    gender:"Male"
};

// Long Repitetive Way
// const firstName = obj.firstName;
// const lastName = obj.lastName;

// console.log(firstName, lastName);

// Destructuring - Introduced in ES6
const { firstName, lastName, ...scalerAcademy } = obj;
console.log(firstName, lastName, scalerAcademy);

function sum(a, b, ...rest) {
    console.log(a, b, rest);
    return a + b;
};

console.log(sum(1, 2, "Get Sum", 10, 20, 499, undefined));