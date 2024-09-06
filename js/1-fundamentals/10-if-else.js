

// if(something){
//     do something
// } else {
//     do something else
// }

const id = 100;

// Equal to value
if(id == "100"){
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}

// Not Equal to value
if(id != 101){
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}

// Equal to value and type
if(id === 100){
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}

// Not Equal to value and type

if(id !== 100){
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}

// Test if undefined

let greet = "Hello";

if(typeof greet === "undefined"){
    console.log(`im ${greet}`);
} else {
    console.log(`${greet} welcome to my house`);
}

// Greater or less than

if(100 >= 99){
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}

if(100 <= 99){
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}

// else if

const color = "blue";

if(color === "red"){
    console.log("color is red")
} else if(color === "blue"){
    console.log("color is blue")
} else {
    console.log("I dont know the color");
}

// Logical operator

const name = "Javid";
const age = 55;

// AND - && check both value to true

if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age < 19){
    console.log(`${name} is a teen`);
} else {
    console.log(`${name} is a adult`);
}

// OR - || check only one true or false

if(age < 16 || age > 65){
    console.log(`${name} can not run the race`)
} else {
    console.log(`${name} can run the race`)
}

// Ternary Operator

console.log(100 === 101 ? "CORRECT" : "INCORRECT");