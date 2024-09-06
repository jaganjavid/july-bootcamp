

const items = document.getElementsByClassName("collection-item"); // HTMLCOLLECTION


// for(let i = 0; i < items.length; i++){
//     items[i].style.background = "blue";
//     items[i].style.color = "#ffffff";
// }

// console.log(items);

// Convert to array

// let lists = Array.from(items);

// lists.forEach(function(element, index){
//     element.style.background = "blue";
//     element.style.color = "#ffffff";
// })

const listItems = document.querySelectorAll(".collection-item")
;// NodeList

listItems.forEach(function(e, i){
    e.style.background = "blue";
    e.style.color = "#ffffff";
})