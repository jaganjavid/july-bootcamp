

{/* <li class="collection-item">
    List Item 5
    <a href="#" class="delete-item secondary-content">
        <i class="fa fa-remove"></i>
    </a>
</li> */}



// Create Element
const li = document.createElement("li");

// Add Class to li
li.className = "collection-item";

// Add ID
li.id = "item-6";

// Add to li
li.innerText = "Hello guys";

// Create Element
const link = document.createElement("a");

// Add class to link
link.className = "delete-item secondary-content";

// Add icon to link
link.innerHTML = `<i class="fa fa-remove"></i>`;

// Append link to li
li.appendChild(link);

// Append li to ul
document.querySelector("ul").appendChild(li);