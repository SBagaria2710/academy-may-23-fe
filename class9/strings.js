let str = "Scaler Academy";

// Length
console.log(str.length); // 14

// Breaking the words using SPLIT method
console.log(str.split(" "));

// IndexOf
console.log(str.indexOf("a"));

// CharAt
const idx = str.indexOf("a");
console.log(str.charAt(idx));

// SubString
const splittedString = str.split(" ");
const lastWord = splittedString[splittedString.length - 1];
console.log(lastWord);

console.log(str.substring(7, 10)); // Form and To
console.log(str.substr(7, 10)); // From and Length