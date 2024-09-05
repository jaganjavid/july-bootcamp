

// For Loop

// Loop can execute a blcok of code number of times

// for(let i = 0; i <= 10; i++){
   
//     if(i === 3){
//         console.log("3 is fav number");
//         continue;
//     }

//     if(i === 5){
//         console.log("hit 5 stop the loop");
//         break;
//     }

//     console.log(i);
// }


const users = ["Jagan", "Arun", "Akash"];

// console.log(users.length);

// for(let i = 0; i < users.length; i++){
//     console.log(users[i]);
// }

// console.log(users);

users.forEach(function(element, index){
   console.log(`${element} - ${index}`);

})

