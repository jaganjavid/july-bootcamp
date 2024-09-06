
let val;

const list = document.querySelector(".collection");
const listItem = document.querySelector(".collection-item:nth-child(5)");


// Get the children element nodes

val = list.children;
val = list.children[0];
val = list.children[1];
val = list.children[2];
val = list.children[3].children[0].className;

// FirstChild
val = list.firstElementChild;

// LastChild
val = list.lastElementChild;

// Count the child element
val = list.childElementCount;

// Get parent
val = list.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

val = listItem;

// Get the next sibling
// val = listItem.nextElementSibling.nextElementSibling;

// Get the previous sibling

val = listItem.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;

console.log(val);
