
const name = "Javid";
const age = 27;
const job = "Web Dev";
const city = "Chennai";

let val;

// Without template strings
// val = "My name is" + " " + name + " " + "and im" + " " + age + " " + "and my job is" + " " + job + " " + "im coming from" + " " + city;


// With tamplate strings
val = `My name is ${name} and im ${age} my job is ${job} im coming from ${city}`;


console.log(val);


