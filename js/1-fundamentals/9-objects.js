
const person = {

    // Properties (KEY & VALUE)
    firstName:"Jagan",
    lastName: "Javid",
    age:27,
    email:"jj@email.com",
    hadDinner:false,
    hobbies:["music", "sports"],
    address:{
        city:"Chennai",
        state:"Tn"
    },
    // Method
    getFullName: function(){
        console.log(this.firstName + " " + this.lastName);
    }
}


let val;


val = person;

// Get a Specific value

val = person.firstName; // ***
val = person["lastName"];
val = person.age;
val = person.email;
val = person.hadDinner;
val = person.hobbies[1];
val = person.address.city;
person.getFullName();

console.log(val);