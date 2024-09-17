

document.querySelector(".clear-tasks")
.addEventListener("click", onInc);

let count = 0;

document.querySelector("#task-title").innerText = count;

function onInc(){
   
    // Append
    count = count + 1;


    document.querySelector("#task-title").innerText = count;




}