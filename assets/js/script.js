const addBookButton = document.querySelector(".add-book");
const cardsWrapper = document.querySelector(".cards");
const modal = document.querySelector("dialog");
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const pagesInput = document.querySelector("#pages-input");
const readInput = document.querySelector("#read-input");
const submitButton = document.querySelector(".submit-button");

// Helper function to save library to localStorage
function saveLibrary() {
  localStorage.setItem("library", JSON.stringify(library));
}

// Helper function to load library from localStorage
function loadLibrary() {
  const data = localStorage.getItem("library");
  library = data ? JSON.parse(data) : [];
}

// Display all cards from library array
function renderCards() {
  cardsWrapper.innerHTML = "";
  library.forEach((book, index) => {
    const newCard = document.createElement("div");
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

    titleDisplay.innerText = book.title;
    authorDisplay.innerText = book.author;
    pagesDisplay.innerText = book.pages;
    removeButton.innerText = "Remove";

    if (book.haveRead) {
      haveReadDisplay.innerText = "Read";
      haveReadDisplay.classList.add("read");
    } else {
      haveReadDisplay.innerText = "Not read";
      haveReadDisplay.classList.add("not-read");
    }

    // Toggle read status
    haveReadDisplay.addEventListener("click", () => {
      library[index].haveRead = !library[index].haveRead;
      saveLibrary();
      renderCards();
    });

    // Remove book
    removeButton.addEventListener("click", () => {
      library.splice(index, 1);
      saveLibrary();
      renderCards();
    });

    cardsWrapper.appendChild(newCard);
  });
}

addBookButton.addEventListener("click", () => {
  modal.showModal();
});

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
  let haveRead = readInput.checked;

  if (title === "" || author === "" || pages === "") {
    return;
  }

  library.push(new Book(title, author, pages, haveRead));
  saveLibrary();
  renderCards();
  modal.close();
}

// Initial load: sync with localStorage
window.addEventListener("DOMContentLoaded", () => {
  loadLibrary();
  renderCards();
});

// Button listeners
submitButton.addEventListener("click", addBookToLibrary);
document.querySelector("#cancel-button").addEventListener("click", () => {
  modal.close();
});
