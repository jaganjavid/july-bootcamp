

// Define UI Vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector("#clear-btn")


loadEventListerners();

function loadEventListerners() {

    // Add Task Event
    form.addEventListener("submit", addTask);

    // Clear Task Event
    clearBtn.addEventListener("click", clearTask);

    // Remove Task
    taskList.addEventListener("click", removeTask);



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

        taskInput.value = "";


    }

}

function removeTask(){
    console.log("use event delegation");
}

function clearTask(){
    taskList.innerHTML = "";
}