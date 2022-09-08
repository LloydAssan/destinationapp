// Listen to the submit event happening on the form
document.getElementById("user_input_form").addEventListener("submit", (e) => { 
   

    e.preventDefault();

    // grab user inputs from the fform and store them them in variables
    const destination = document.getElementById("destination").value;
    const location = document.getElementById("location").value;
    const photoUrl = document.getElementById("photoUrl").value;
    const description = document.getElementById("description").value;

    // Reset form values
    document.getElementById("user_input_form").reset();

    
    const card = document.createElement("div");  /// // <div></div> hanging out in space
    card.classList.add("card"); // <div class ="card"><</div>
    card.setAttribute("style", "width: 18rem;");
    document.getElementById("cards_container").appendChild(card);

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.setAttribute("alt", `${destination} at ${location}`);


    if (photoUrl.length === 0) {
        img.setAttribute(
            "src", "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60");
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
    editBtn.classList.add("btn", "btn-warming");
    cardBody.appendChild(editBtn);
    editBtn.addEventListener("click", () => {

    })

     const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("btn", "btn-danger");
    cardBody.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
        
    })

});

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


