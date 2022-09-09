import {
  handleEdit,
  handleRemove,
  elementFactory,
} from "./helper-functions.js";
// Listen to the submit event happening on the form
document.getElementById("user_input_form").addEventListener("submit", (evt) => {
  evt.preventDefault();

  //   Grab user inputs from the form and store them in variables
  const destination = document.getElementById("destination").value;
  const location = document.getElementById("location").value;
  // const photoUrl = document.getElementById("photo_url").value;
  const description = document.getElementById("description").value;

  //   clear user inputs from the form (for UX)
  document.getElementById("user_input_form").reset();

  //   Use the bootstap card template with the user inputs
  const card = elementFactory({
    eltType: "div",
    parentElt: document.getElementById("cards_container"),
    classNames: ["card"],
    attrs: [{ name: "style", value: "width: 18rem;" }],
  });

  const FALLBACK_PLACEHOLDER_PHOTO =
    "https://media.istockphoto.com/vectors/loading-icon-vector-illustration-vector-id1335247217?k=20&m=1335247217&s=612x612&w=0&h=CQFY4NO0j2qc6kf4rTc0wTKYWL-9w5ldu-wF8D4oUBk=";

  const img = elementFactory({
    eltType: "img",
    classNames: ["card-img-top"],
    parentElt: card,
    attrs: [
      { name: "alt", value: `${destination} at ${location}` },
      {
        name: "src",
        value: FALLBACK_PLACEHOLDER_PHOTO,
      },
    ],
  });

  const searchTerm = `${destination} ${location}`;

  const unsplashApiUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=7YJ_au6K1r-YrGOowfWlOVcbN7wnyKdxkwk3i_ChBkU`;

  fetch(unsplashApiUrl)
    .then((response) => response.json())
    .then((data) => {
      const photos = data.results;

      const randIdx = Math.floor(Math.random() * photos.length);

      const imgUrl = photos[randIdx].urls.thumb;

      img.setAttribute("src", imgUrl);
    });

  const cardBody = elementFactory({
    parentElt: card,
    eltType: "div",
    classNames: ["card-body"],
  });

  const newDestElt = elementFactory({
    text: destination,
    parentElt: cardBody,
    classNames: ["card-title"],
    eltType: "h5",
  });

  const newLocElt = elementFactory({
    text: location,
    parentElt: cardBody,
    classNames: ["card-text"],
    eltType: "p",
  });

  //   if the user provided a description, create an elt (same as location) and put it on the card
  if (description.length !== 0) {
    const newDescElt = elementFactory({
      eltType: "p",
      classNames: ["card-text"],
      text: description,
      parentElt: cardBody,
    });
  }

  //   Add edit & remove buttons
  const editBtn = elementFactory({
    eltType: "button",
    text: "Edit",
    classNames: ["btn", "btn-warning"],
    parentElt: cardBody,
    eventListener: { eventType: "click", eventHandler: handleEdit },
  });

  const removeBtn = elementFactory({
    eltType: "button",
    text: "Remove",
    classNames: ["btn", "btn-danger"],
    parentElt: cardBody,
    eventListener: { eventType: "click", eventHandler: handleRemove },
  });
});