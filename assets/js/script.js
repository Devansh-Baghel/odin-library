// This is just to test how all cards would look, to be removed later
const addBookButton = document.querySelector(".add-book");
const cardsWrapper = document.querySelector(".cards");

function addCard(){
	const newCard = document.createElement("div");
	cardsWrapper.appendChild(newCard);
	newCard.classList.add("card");
}

addBookButton.addEventListener("click", addCard);