

// Array
const numbers = [2,32,34,87,23,45,73,94,11,55];


let val;


// Get the array length
val = numbers.length;

// Check if is an array
val = Array.isArray(numbers);

// Get the single value
val = numbers[0];
val = numbers[1];

// Insert into array
// val = numbers[1] = 42;

// Find the index of value
val = numbers.indexOf(100); // if array match it return the index number else -1


// Mutate Array

// Add on the end
// numbers.push(1000);

// Add on the front
// numbers.unshift(2000);

// Take of from the end
// numbers.pop();
// numbers.pop();
// numbers.pop();


// Take of from the front
// numbers.shift();
// numbers.shift();
// numbers.shift();

// Splice ==> To Add and To Remove

const fruits = ["Apple", "Orange", "Lemon", "Fig"];

// To remove
// val = fruits.splice(2,1);

// To add
// val = fruits.splice(1,1,"Kiwi");
// val = fruits.splice(1,0,"Kiwi");

// Reverse the array

console.log(numbers);

val = numbers.reverse()

console.log(val);

