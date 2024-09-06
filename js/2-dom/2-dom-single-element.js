
// document.getElementById();

// console.log(document.getElementById("task-title"));

const taskTitle = document.getElementById("task-title");


// Change Style

taskTitle.style.background = "blue";
taskTitle.style.color = "#ffffff";
taskTitle.style.padding = "10px";

// Change Content
taskTitle.innerText = "Hello jagan";
taskTitle.innerHTML = "<span>Hello javid</span>";

// document.querySelector();

// console.log(document.querySelector("#task-title"));

// const task = document.querySelector("li");
// const task = document.querySelector(".collection-item");
const task = document.querySelector("ul li:nth-child(3)");


task.style.background = "blue";
task.style.color = "#ffffff";