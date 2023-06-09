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

class Book {
	constructor(title, author, pages, haveRead) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.haveRead = haveRead;
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

	(readInput.checked) ? haveRead = true : haveRead = false;

	library.push(new Book(title, author, pages, haveRead));
	addCardToDisplay();
}


// Rewriting a newer display logic
// - Display via looping over the library arr

function addCardToDisplay(){
	let lastIndex = library.length - 1;

	const newCard = document.createElement("div");
	cardsWrapper.appendChild(newCard);
	newCard.classList.add("card");

	const titleDisplay = document.createElement("h2");
	const authorDisplay = document.createElement("p");
	const pagesDisplay = document.createElement("p");
	const haveReadDisplay = document.createElement("button");
	const removeButton = document.createElement("button");
	removeButton.classList.add("remove");

	newCard.appendChild(titleDisplay);
	newCard.appendChild(authorDisplay);
	newCard.appendChild(pagesDisplay);
	newCard.appendChild(haveReadDisplay);
	newCard.appendChild(removeButton);

	titleDisplay.innerText = library[lastIndex].title;
	authorDisplay.innerText = library[lastIndex].author;
	pagesDisplay.innerText = library[lastIndex].pages;
	removeButton.innerText = "Remove";

	if (library[lastIndex].haveRead){
		haveReadDisplay.innerText = "Read";
		haveReadDisplay.classList.add("read");
	} else {
		haveReadDisplay.innerText = "Not read";
		haveReadDisplay.classList.add("not-read");
	}

	// Logic for Toggling read status on UI and Library array
	haveReadDisplay.addEventListener("click", () => {
		if(haveReadDisplay.innerText === "Read"){
			haveReadDisplay.innerText = "Not read";
			library[lastIndex].haveRead = false;
			haveReadDisplay.classList.remove("read");
			haveReadDisplay.classList.add("not-read");
		} else{
			haveReadDisplay.innerText = "Read";
			library[lastIndex].haveRead = true;
			haveReadDisplay.classList.remove("not-read");
			haveReadDisplay.classList.add("read");
		}
	})

	// Logic for removing the book from both UI and library array
	removeButton.addEventListener("click", () => {
		newCard.remove();
		library.splice(lastIndex, 1);
	})
}

submitButton.addEventListener("click", addBookToLibrary);