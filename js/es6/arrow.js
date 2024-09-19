

// const sayHello = function(){
//     console.log("Hello");
// }

// Arrow Function

// const sayHello = () => {
//     console.log("Hello");
// }

// One line func does not need a braces
// const sayHello = () => console.log("Hello");

// One live return

// const sayHello = function(){
//     return "Hello";
// }

// const sayHello = () => "Hello";

// Return Object
// const sayHello = () => ({msg:"Hello"});

// single params does not need a braces
// const sayHello = name => console.log(name);
// const sayHello = (name, age) => console.log(name, age);

// sayHello("Javid", 27);


const users = ["Javid", "Jagan", "Arun"];

// users.forEach(function(user){
//    console.log(user);
// })

// users.forEach((user, index) => {
//     console.log(`${user} - ${index}`);
// })

// MAP

const userWordLength = users.map((user) => {
    return user.length;
}); 

console.log(userWordLength);