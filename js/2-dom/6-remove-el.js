

// Remove Element

const lists = document.querySelectorAll(".collection-item"); // Node List

// lists[0].remove();
// lists[1].remove();

// Class & Attr

const firstLi = document.querySelector("li:nth-child(1)");

const link = firstLi.children[0];

let val;

// Class String
val = link.className;

val = link.classList; // DOMTOKENLIST


val.add("javid");
// console.log(val.contains("jagan"));
// val.remove("javid");
val.replace("javid", "jagan");



// console.log(val);


// const clear = document.querySelector(".clear-tasks");

// clear.addEventListener("click", (e) => {
//    e.preventDefault();

//    document.body.classList.add("add-color");
//    document.body.classList.remove("add-color");
//    document.body.classList.toggle("add-color");


// })

