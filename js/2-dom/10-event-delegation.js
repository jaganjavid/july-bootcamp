

const delItem = document.querySelector(".delete-item");

const ul = document.querySelector(".collection");

ul.addEventListener("click", deleteItem);


function deleteItem(e){
//   console.log(e.target.parentElement);
 
//   if(e.target.parentElement.className === "delete-item secondary-content"){
//      e.target.parentElement.parentElement.remove();
//   }

 const classList = e.target.parentElement.classList;

 if(classList.contains("delete-item")){
    e.target.parentElement.parentElement.remove();
 }

}
