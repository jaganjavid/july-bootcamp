

// Define UI Vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector("#clear-btn")


loadEventListerners();

function loadEventListerners() {


    // DOM LOAD EVENT
    document.addEventListener("DOMContentLoaded", getTasks);

    // Add Task Event
    form.addEventListener("submit", addTask);

    // Clear Task Event
    clearBtn.addEventListener("click", clearTask);

    // Remove Task
    taskList.addEventListener("click", removeTask);


}


function getTasks(){

    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task){
       
         // Create a li element
         const li = document.createElement("li");

         // Add Class
         li.className = "collection-item";
 
         // Inner Text
         li.innerText = task;
 
         // Create a new link element
         const link = document.createElement("a");
 
         // Add class to link
         link.className = "delete-item secondary-content";
 
         // Add icon to link
         link.innerHTML = `<i class="fa fa-remove"></i>`;
 
         // Append link to li
         li.appendChild(link);
 
         // Append li to ul
         taskList.appendChild(li);

    })
}

function addTask(e) {

    e.preventDefault();

    //    Validation

    if (taskInput.value === "") {
        alert("Please fill the field")
    } else {
       
        // Create a li element
        const li = document.createElement("li");

        // Add Class
        li.className = "collection-item";

        // Inner Text
        li.innerText = taskInput.value;

        // Create a new link element
        const link = document.createElement("a");

        // Add class to link
        link.className = "delete-item secondary-content";

        // Add icon to link
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // Append link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);

        // Store in ls
        storeTaskInLocalStorage(taskInput.value);

        taskInput.value = "";


    }

}


function storeTaskInLocalStorage(task){
    // console.log(task);

    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
        console.log("Step - 1");
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
        console.log("Step 2");
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

function removeTask(e){

    
    if(e.target.parentElement.classList.contains("delete-item")){
        if(confirm("Are you sure")){
            e.target.parentElement.parentElement.remove();
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    };

}

function removeTaskFromLocalStorage(taskElement){

    // console.log();
    
    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task, index){
        if(taskElement.innerText === task){
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem("tasks", JSON.stringify(tasks));


}

function clearTask(){
    taskList.innerHTML = "";
    clearTaskFromLocalStorage();
}

function clearTaskFromLocalStorage(){
    localStorage.removeItem("tasks");
}


const arr = [1,2,3];


// get, set, remove, clear

// localStorage.setItem("test", "hello");

// console.log(localStorage.getItem("test"));
// localStorage.removeItem("test");


// console.log(localStorage.getItem("test"));

// localStorage.setItem("arr", arr);


// console.log(arr);

// let arrToString = JSON.stringify(arr);

// console.log(arrToString);
// console.log(typeof arrToString);

// let stringToArr = JSON.parse(arrToString);

// console.log(stringToArr);


// let greet;

// greet.forEach(function(x){
//     console.log(x);
// })