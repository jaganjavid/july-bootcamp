
const firstName = "jagan";
const lastName = "Javid";
const age = 27;

let val;


val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "John";

// val = val + " Doe";
// val += " Doe";

// Length
val = firstName.length;

// Concat
val = firstName.concat(" ", lastName, " ", age);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];
val = firstName[2];
val = firstName[firstName.length - 1];

// CharAT()
val = firstName.charAt(0);
val = firstName.charAt(firstName.length - 1);

// Slice

const fruit = "strawberry";

val = fruit.slice(1,5);

const str = "Hello im jagan and im a web dev";
const tags = "App,Web,Graphic";

val = str.split(" ");
val = tags.split(",");

// Replace
val = str.replace("jagan", "javid");

// Includes
val = str.includes("web");

console.log(val);
// console.log(str);

