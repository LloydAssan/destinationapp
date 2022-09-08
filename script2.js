// Listen to the submit event happening on the form
document.getElementById("user_input_form").addEventListener("submit", (evt) => {
  evt.preventDefault();

  //   Grab user inputs from the form and store them in variables
  const destination = document.getElementById("destination").value;
  const location = document.getElementById("location").value;
  const photoUrl = document.getElementById("photo_url").value;
  const description = document.getElementById("description").value;

  document.getElementById("user_input_form").reset();
  //   document.getElementById("destination").value = "";
  //   document.getElementById("location").value = "";
  //   document.getElementById("photo_url").value = "";
  //   document.getElementById("description").value = "";

  //   Use the bootstap card template with the user inputs
  const card = document.createElement("div"); // <div></div> hanging out in the ether
  card.classList.add("card"); // <div class="card"></div>
  card.setAttribute("style", "width: 18rem;");
  document.getElementById("cards_container").appendChild(card);

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.setAttribute("alt", `${destination} at ${location}`);

  //   ternary operator
  // condition ? do this when true : do this when false
  let realPhotoUrl = "";
  photoUrl.length === 0
    ? (realPhotoUrl =
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1421&q=80")
    : (realPhotoUrl = photoUrl);

  img.setAttribute("src", realPhotoUrl);

  //   if (photoUrl.length === 0) {
  //     img.setAttribute(
  //       "src",
  //       "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1421&q=80"
  //     );
  //   } else {
  //     img.setAttribute("src", photoUrl);
  //   }

  card.appendChild(img);

  /*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
*/
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  const newDestElt = document.createElement("h5");
  newDestElt.classList.add("card-title");
  newDestElt.innerText = destination;
  cardBody.appendChild(newDestElt);

  const newLocElt = document.createElement("p");
  newLocElt.classList.add("card-text");
  newLocElt.innerText = location;
  cardBody.appendChild(newLocElt);

  //   if the user provided a description, create an elt (same as location) and put it on the card
  if (description.length !== 0) {
    const newDescElt = document.createElement("p");
    newDescElt.classList.add("card-text");
    newDescElt.innerText = description;
    cardBody.appendChild(newDescElt);
  }

  //   Add edit & remove buttons
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("btn", "btn-warning");

  editBtn.addEventListener("click", handleEdit);
  cardBody.appendChild(editBtn);

  const removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  removeBtn.classList.add("btn", "btn-danger");

  removeBtn.addEventListener("click", handleRemove);
  cardBody.appendChild(removeBtn);
});

function handleRemove(evt) {
  evt.target.closest(".card").innerHTML = "";
}

function handleEdit(evt) {
  const editBtn = evt.target;
  const cardBody = editBtn.parentElement;
  const card = cardBody.parentElement;

  const destElt = cardBody.children[0];
  const locElt = cardBody.children[1];
  const imgElt = card.children[0];

  const newDest = prompt("Enter new destination", destElt.innerText);
  const newLoc = prompt("Enter new location", locElt.innerText);
  const newPhoto = prompt("Enter new photo url", imgElt.getAttribute("src"));

  if (newDest !== destElt.innerText) {
    destElt.innerText = newDest;
  }

  if (newLoc !== locElt.innerText) {
    locElt.innerText = newLoc;
  }

  if (newPhoto !== imgElt.getAttribute("src")) {
    imgElt.setAttribute("src", newPhoto);
  }
}