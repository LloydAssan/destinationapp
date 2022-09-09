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
  const photoUrl = document.getElementById("photo_url").value;
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
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1421&q=80";

  const img = elementFactory({
    eltType: "img",
    classNames: ["card-img-top"],
    parentElt: card,
    attrs: [
      { name: "alt", value: `${destination} at ${location}` },
      {
        name: "src",
        value: photoUrl.length === 0 ? FALLBACK_PLACEHOLDER_PHOTO : photoUrl,
      },
    ],
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