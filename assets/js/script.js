const addBookButton = document.querySelector(".add-book");
const cardsWrapper = document.querySelector(".cards");

const modal = document.querySelector("dialog");

const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const submitButton = document.querySelector(".submit-button");

// function addCard(){
// 	const newCard = document.createElement("div");
// 	cardsWrapper.appendChild(newCard);
// 	newCard.classList.add("card");
// }

// addBookButton.addEventListener("click", addCard);
addBookButton.addEventListener("click", () => {
	modal.showModal();
})


let library = [];

function Book (title, author){
	this.title = title;
	this.author = author;
}

function addBookToLibrary() {
	const title = titleInput.value;
	const author = authorInput.value;

	if (title === "" || author === ""){
		return
	}

	library.push(new Book(title, author));
	console.log(library);
}


submitButton.addEventListener("click", addBookToLibrary);