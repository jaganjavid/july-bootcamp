

// Two Phases

// 1 - Creatation
// 2 - Excutation

// Function statement



function greet(firstName = "John", lastName = "Doe"){

    console.log(`Hello ${firstName} ${lastName}`);

}

greet("Jagan", "Javid");
greet("Arun", "Kumar");
greet("x","y");

// Function Expression
const add = function(x = 5){
    console.log(x + 5);
}

add(10);
add();
