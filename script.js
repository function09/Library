const addBookButton = document.querySelector("#addBookButton");
let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return `${this.title} by ${this.author} ,${this.pages} ,${this.isRead}`;
  };
}

function addBookToLibrary(book) {
  return myLibrary.push(book);
}

// Displays book info as a card
function createCardDisplay() {
  const displayBook = myLibrary.map((book) => book.info());

  const selectContainer = document.querySelector(".cardContainer");

  const content = document.createElement("div");
  content.classList.add("content");

  content.textContent = displayBook[myLibrary.length - 1].toString();
  selectContainer.appendChild(content);
}

// Assigns an array element data attribute
function addDataValues() {
  const selectCard = document.querySelectorAll(".content");

  let elementValue = 0;

  selectCard.forEach((card) => {
    elementValue += 1;
    card.dataset.arrayElement = elementValue;
  });
}
// Obtains values from the respective inputs and stores them as arguments in the new Book() object before creating a card display of the book
addBookButton.addEventListener("click", (e) => {
  const bookTitle = document.querySelector("#bookTitle").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#isRead").value;

  const book = new Book(bookTitle, author, pages, isRead);

  addBookToLibrary(book);
  createCardDisplay();
  addDataValues();
  e.preventDefault();
});

// Modal info
const modal = document.querySelector(".modal");
const newBookButton = document.querySelector(".modalButton");
const closeModal = document.querySelector(".closeModal");

newBookButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
