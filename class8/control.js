// CONTROL STRUCTURE

// If Else
var ELIGIBLE_TEST_AGE = 18;
var age = 19;

if (age > ELIGIBLE_TEST_AGE) {
    console.log("ELIGIBLE");
} else if (age === ELIGIBLE_TEST_AGE) {
    console.log("ELIGIBLE");
} else {
    console.log("NOT ELIGIBLE");
}


// Switch Case
var day;
switch (10) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 0:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = null;
}

console.log(day);

// loops
for (var i = 0; i < 100; i = i + 1) {
    console.log("My name is Shashwat. I study at Scaler.");
}