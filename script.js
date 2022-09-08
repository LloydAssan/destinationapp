// Listen to the submit event happening on the form
document.getElementById("user_input_form").addEventListener("submit", (evt) => { 
    evt.preventDefault();

    // grab user inputs from the fform and store them them in variables
    const destination = document.getElementById("destination").value;
    const location = document.getElementById("location").value;
    const photoUrl = document.getElementById("photoUrl").value;
    const description = document.getElementById("description").value;

    // Reset form values (for UX)
    document.getElementById("user_input_form").reset();

    
    const card = document.createElement("div");  /// // <div></div> hanging out in space
    card.classList.add("card"); // <div class ="card"><</div>
    card.setAttribute("style", "width: 18rem;");
    document.getElementById("cards_container").appendChild(card);

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.setAttribute("alt", `${destination} at ${location}`);

    const fall_back_photo = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60";
    if (photoUrl.length === 0) {
        img.setAttribute(
            "src", fall_back_photo);
    } else {
        img.setAttribute("src", photoUrl);
    }
    card.appendChild(img);

    const cardBody = document.createElement("div");  
    cardBody.classList.add("cardBody"); 
    card.appendChild(cardBody);

    //DESTINATION value 
    const newDestElement = document.createElement("h5");  
    newDestElement.classList.add("card-title"); 
    newDestElement.innerHTML = destination;
    cardBody.appendChild(newDestElement);

    //LOCATION value 
    const newLocElement = document.createElement("p");  
    newLocElement.classList.add("card-text"); 
    newLocElement.innerHTML = location;
    cardBody.appendChild(newLocElement);

    //DESCRIPTION Value 
    if (description.length !== 0) {
    const newDescripElement = document.createElement("p");  
    newDescripElement.classList.add("card-text"); 
    newDescripElement.innerHTML = description;
    cardBody.appendChild(newDescripElement);
    }

    // Add edit and remove buttons
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "btn-warning");

    editBtn.addEventListener("click", handleEdit);
    cardBody.appendChild(editBtn);
   

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("btn", "btn-danger");

    deleteBtn.addEventListener("click", handleDelete);
    cardBody.appendChild(deleteBtn);
});

function handleDelete(evt) {
    // gives you target of element on which event is taking place
    // evt is an object and target is a property
    console.log(evt);
    evt.target.closest(".card").innerHTML = "";
    
}

function handleEdit (evt) {
    const editBtn = evt.target;
    const cardBody = editBtn.parentElment;
    const card = cardBody.parentElment;

    const destElement = cardBody.children[0];
    const locElement = cardBody.children[1];
    const imgElement = card.children[0];

    const newDest = prompt("Enter new destination", destElement.innerText);
    const newLoc = prompt("Enter new location", locElement.innerText);
    const newPhoto = prompt("Enter new photo URL", imgElement.getAttribute("src"));

    if (newDest !== destElement.innerText) {
        destElement.innerText = newDest;
    }

    if (newLoc !== locElement.innerText) {
        locElement.innerText = newLoc;
    }

    if (newPhoto !== imgElement.getAttribute("src")) {
        imgElement.setAttribute("src", newPhoto);    
    }
}

/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/




