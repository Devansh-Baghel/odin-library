const addBookButton = document.querySelector(".add-book");
const cardsWrapper = document.querySelector(".cards");

const modal = document.querySelector("dialog");

const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const submitButton = document.querySelector(".submit-button");


addBookButton.addEventListener("click", () => {
	modal.showModal();
})

let library = [];

function Book (title, author){
	this.title = title;
	this.author = author;
}

function addCardToDisplay(title, author){
	const newCard = document.createElement("div");
	cardsWrapper.appendChild(newCard);
	newCard.classList.add("card");

	const titleDisplay = document.createElement("h2");
	const authorDisplay = document.createElement("p");
	newCard.appendChild(titleDisplay);
	newCard.appendChild(authorDisplay);

	titleDisplay.innerText = title;
	authorDisplay.innerText = author;
}


function addBookToLibrary() {
	const title = titleInput.value;
	const author = authorInput.value;

	if (title === "" || author === ""){
		return
	}

	library.push(new Book(title, author));
	addCardToDisplay(title, author);
	console.log(library);
}


submitButton.addEventListener("click", addBookToLibrary);