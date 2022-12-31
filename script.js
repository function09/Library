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

function loopThroughLibrary() {
  const displayBook = myLibrary.map((book) => book.info());

  const container = document.querySelector(".cardContainer");

  const content = document.createElement("div");
  content.classList.add("content");

  content.textContent = displayBook[0].toString();
  container.appendChild(content);

  myLibrary = [];
}

// Save inputs as arguments for new Book constructor
const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const bookTitle = document.querySelector("#bookTitle").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#isRead").value;

  const book = new Book(bookTitle, author, pages, isRead);
  addBookToLibrary(book);
  loopThroughLibrary();
});

// Coding for modal
const modal = document.querySelector(".modal");
const addBookButton = document.querySelector(".modalButton");
const closeModal = document.querySelector(".closeModal");

addBookButton.addEventListener("click", () => {
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
