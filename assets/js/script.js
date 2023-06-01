const addBookButton = document.querySelector(".add-book");
const cardsWrapper = document.querySelector(".cards");

const modal = document.querySelector("dialog");

const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const pagesInput = document.querySelector("#pages-input");
const readInput = document.querySelector("#read-input");
const submitButton = document.querySelector(".submit-button");


addBookButton.addEventListener("click", () => {
	modal.showModal();
})

let library = [];

function Book (title, author, pages, haveRead){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.haveRead = haveRead;
}

function addCardToDisplay(title, author, pages, haveRead){
	const newCard = document.createElement("div");
	cardsWrapper.appendChild(newCard);
	newCard.classList.add("card");

	const titleDisplay = document.createElement("h2");
	const authorDisplay = document.createElement("p");
	const pagesDisplay = document.createElement("p");
	const haveReadDisplay = document.createElement("button");
	newCard.appendChild(titleDisplay);
	newCard.appendChild(authorDisplay);
	newCard.appendChild(pagesDisplay);
	newCard.appendChild(haveReadDisplay);

	titleDisplay.innerText = title;
	authorDisplay.innerText = author;
	pagesDisplay.innerText = pages;

	if (haveRead){
		haveReadDisplay.innerText = "Read";
	} else{
		haveReadDisplay.innerText = "Not read";
	}
}


function addBookToLibrary() {
	const title = titleInput.value;
	const author = authorInput.value;
	const pages = pagesInput.value; 
	let haveRead;

	if (title === "" || author === "" || pages === ""){
		return
	}

	if (readInput.checked) {
		haveRead = true;
	} else{
		haveRead = false;
	}

	library.push(new Book(title, author, pages, haveRead));
	addCardToDisplay(title, author, pages, haveRead);
	console.log(library);
}


submitButton.addEventListener("click", addBookToLibrary);