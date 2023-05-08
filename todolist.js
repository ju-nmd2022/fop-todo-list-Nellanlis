//Inspired and learnt from Garrits youtubevideos and learning material. Mainly from the fruit shop -- https://www.youtube.com/watch?v=WvnMopRn5XM

const inputWishElement = document.getElementById("wishInput");

const addWishElement = document.getElementById("confirmWish");

const wishConfirmedElement = document.getElementById("wishesMade");

let wishes = [];

//event Listener for button clicked
addWishElement.addEventListener("click", () => {
  if (inputWishElement.value.length > 0) {
    buttonPressed(inputWishElement.value);
  }
});

//typing in a wish
function buttonPressed(item) {
  //making the wish appear underneath
  const listElement = document.createElement("div");
  listElement.classList.add("wishlist");

  const textElement = document.createElement("div");
  textElement.classList.add("text");
  textElement.innerText = item;
  listElement.appendChild(textElement);

  wishConfirmedElement.appendChild(listElement);
  //wishes.push(listElement);

  inputWishElement.value = "";

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
  //styling partially adapted from w3schools, such as here -- https://www.w3schools.com/jsref/prop_style_fontweight.asp
  fulfilledWishElement.addEventListener("click", () => {
    listElement.style.color = "#BA55D3";
    listElement.style.fontSize = "14pt";
    listElement.style.fontWeight = "bold";
  });

  //pressing the delete button to delete
  deleteWishElement.addEventListener("click", () => {
    wishConfirmedElement.removeChild(listElement);
    savingWishes();
  });

  savingWishes();
}

//displaying the saved wishes
function displaySavedWishes() {
  let myWishes = load();

  for (let i = 0; i < myWishes.length; i++) {
    const item = myWishes[i];

    const listElement = buttonPressed(item);
    inputWishElement.append(listElement);
  }
}

//saving to localStorage
function savingWishes() {
  const listElements = document.querySelectorAll(".wishlist");
  wishes = [];

  for (let i = 0; i < listElements.length; i++) {
    wishes.push(listElements[i].firstChild.innerText);
  }

  const savedWishes = JSON.stringify(wishes);
  localStorage.setItem("theWishes", savedWishes);
}

function load() {
  const data = localStorage.getItem("theWishes");
  const parsedData = JSON.parse(data);

  return parsedData;

  /*if (data) {
    return JSON.parse(data);
  }
  */
}
displaySavedWishes();

// skapa en array, lägg till texten med wishes.push(valuen), spara till localstorage, bara array i function load med json.parse.
