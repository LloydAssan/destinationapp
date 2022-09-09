export function handleRemove(evt) {
  console.log(evt);

  const eltToRemove = evt.target.parentElement.parentElement;

  // Recursively remove each child of your container
  while (eltToRemove.firstChild) {
    eltToRemove.firstChild.remove();
  }

  //   And then, when this container is childless, remove it
  eltToRemove.remove();
}

export function handleEdit(evt) {
  const editBtn = evt.target;
  const cardBody = editBtn.parentElement;
  const card = cardBody.parentElement;

  const destElt = cardBody.children[0];
  const locElt = cardBody.children[1];
  const imgElt = card.children[0];

  const newDest = prompt("Enter new destination", destElt.innerText);
  const newLoc = prompt("Enter new location", locElt.innerText);
  const newPhoto = prompt("Enter new photo url", imgElt.getAttribute("src"));

  if (newDest && newDest !== destElt.innerText) {
    destElt.innerText = newDest;
  }

  if (newLoc && newLoc !== locElt.innerText) {
    locElt.innerText = newLoc;
  }

  if (newPhoto & (newPhoto !== imgElt.getAttribute("src"))) {
    imgElt.setAttribute("src", newPhoto);
  }
}

/*
  eltType is required
  */
export function elementFactory({
  eltType,
  classNames,
  parentElt,
  text,
  attrs,
  eventListener,
}) {
  if (!eltType) {
    return undefined;
  }

  const newElt = document.createElement(eltType);

  if (classNames) {
    newElt.classList.add(...classNames);
  }

  if (text) {
    newElt.innerText = text;
  }

  if (parentElt) {
    parentElt.appendChild(newElt);
  }

  if (attrs) {
    for (const attr of attrs) {
      const { name: attrName, value: attrValue } = attr;
      newElt.setAttribute(attrName, attrValue);
    }
  }

  if (eventListener) {
    const { eventType, eventHandler } = eventListener;
    newElt.addEventListener(eventType, eventHandler);
  }

  return newElt;
}