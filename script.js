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

const novel = new Book("the Hobbit", "J.R.R. Tolkien", "295 pages", "not read");

function addBookToLibrary() {
  return myLibrary.push(novel);
}

function loopThroughLibrary() {
  const displayBook = myLibrary.map((book) => book.info());

  myLibrary.forEach((e) => e.info());

  const container = document.querySelector(".container");

  const content = document.createElement("div");
  content.classList.add("content");
  content.textContent = `${displayBook}`;

  container.appendChild(content);

  myLibrary = [];
}
