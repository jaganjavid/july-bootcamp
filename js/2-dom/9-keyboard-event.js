
const taskInput = document.querySelector("#task");

// Key Down

// taskInput.addEventListener("keydown", runEvent);

// Key UP
// taskInput.addEventListener("keyup", runEvent);

// Key Press
// taskInput.addEventListener("keypress", runEvent);

// Focus
// taskInput.addEventListener("focus", runEvent);

// blur
// taskInput.addEventListener("blur", runEvent);

// Cut
// taskInput.addEventListener("cut", runEvent);

// Copy
// taskInput.addEventListener("copy", runEvent);

// Paste
// taskInput.addEventListener("paste", runEvent);




function runEvent(e){
    console.log(`Event Type ${e.type}`);
    console.log(e.target.value);
}