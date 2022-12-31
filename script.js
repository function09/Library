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

function addBookToLibrary() {
  return myLibrary.push();
}

function loopThroughLibrary() {
  const displayBook = myLibrary.map((book) => book.info());

  myLibrary.forEach((e) => e.info());

  const container = document.querySelector(".cardContainer");

  const content = document.createElement("div");
  content.classList.add("content");
  content.textContent = `${displayBook}`;

  container.appendChild(content);

  myLibrary = [];
}

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
