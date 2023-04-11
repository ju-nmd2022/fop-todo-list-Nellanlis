const inputWishElement = document.getElementById("wishInput");

const addWishElement = document.getElementById("confirmWish");

const wishConfirmedElement = document.getElementById("wishesMade");

let wishes = [];

//event Listener for button clicked
addWishElement.addEventListener("click", () => {
  if (inputWishElement.value.length > 0) {
    buttonPressed();
  }
});

//putting in a wish
function buttonPressed() {
  //making the wish appear underneath
  const listElement = document.createElement("div");
  listElement.innerText = inputWishElement.value;
  listElement.classList.add("wishlist");
  wishConfirmedElement.appendChild(listElement);

  inputWishElement.value = " ";

  //making the button for marking as fulfilled
  const fulfilledWishElement = document.createElement("button");
  fulfilledWishElement.classList.add("fulfilled");
  fulfilledWishElement.innerText = "☑️";
  listElement.appendChild(fulfilledWishElement);

  //making button for deleting
  const deleteWishElement = document.createElement("button");
  deleteWishElement.classList.add("delete");
  deleteWishElement.innerText = "✖️";
  listElement.appendChild(deleteWishElement);

  //styling and making it appear fulfilled when clicked
  fulfilledWishElement.addEventListener("click", () => {
    listElement.style.color = "#BA55D3";
    listElement.style.fontSize = "14pt";
    listElement.style.fontWeight = "bold";
  });

  //pressing the delete button to delete
  deleteWishElement.addEventListener("click", () => {
    wishConfirmedElement.removeChild(listElement);
  });
}
