
let val;

// Number to string
val = String(555);
val = String(5 + 5);

// Boolean to string
val = String(true);

// Arr to string
val = String([1,2,3,4,"Hello"]);

// String to number
val = Number("5");
val = Number("5 + 5"); // NaN = not a number

// Boolean Number
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("Hello"); // NaN
val = Number([1,2,3,"Hello"]); // NaN

val = parseInt(100.35);
val = parseFloat(100.35);

console.log(val);
console.log(typeof val);