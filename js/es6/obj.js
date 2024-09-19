

// ES5

// function Person(firstName, lastName){
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.fullName = function(){
//     return `${this.firstName} ${this.lastName}`;
//    },
//    this.test = function(){
//     console.log(this);
//    }

// }

// const javid = new Person("Jagan", "Javid");

// console.log(javid.firstName);
// console.log(javid.lastName);
// console.log(javid.fullName());

// ES6

class Person{

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(){
        return `${this.firstName} ${this.lastName}`
    }

}

const john = new Person("John", "Doe");

console.log(john.firstName);
console.log(john.lastName);
console.log(john.fullName());

