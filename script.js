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

// Library features
const addBookButton = document.querySelector("#addBookButton");
const myLibrary = [];
let id = 0;

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = `${pages} pages`;
    this.id = `array-${id++}`;
    this.isRead = false;
  }
}

function addBookToLibrary(book) {
  return myLibrary.push(book);
}

// Assigns an array element data attribute to remove book button
function assignDataValues() {
  const selectRemoveBookButton = document.querySelectorAll(".removeBook");

  let arrayValue = 0;
  let indexValue = 0;
  selectRemoveBookButton.forEach((button) => {
    if (arrayValue === 0 || indexValue === 0) {
      button.dataset.value = "array-0";
      button.dataset.index = 0;
      arrayValue++;
      indexValue++;
    } else {
      button.dataset.value = `array-${arrayValue++}`;
      button.dataset.index = indexValue++;
    }
  });
}

// Assigns an ID to content
function assignId() {
  const selectContent = document.querySelectorAll(".content");

  let elementValue = 0;

  selectContent.forEach((content) => {
    if (elementValue === 0) {
      content.setAttribute("id", `array-${elementValue}`);
      elementValue++;
    } else {
      content.setAttribute("id", `array-${elementValue++}`);
    }
  });
}

// Displays book info as a card with a remove book button and book read button to indicate if book has been read
function createCardDisplay() {
  const title = document.querySelector("#bookTitle").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;

  const book = new Book(title, author, pages);
  addBookToLibrary(book);

  const selectContainer = document.querySelector(".cardContainer");
  const content = document.createElement("div");
  content.classList.add("content");
  selectContainer.appendChild(content);

  const bookTitle = document.createElement("div");
  bookTitle.classList.add("title");
  bookTitle.textContent = book.title;
  content.appendChild(bookTitle);

  const bookAuthor = document.createElement("div");
  bookAuthor.classList.add("author");
  bookAuthor.textContent = book.author;
  content.appendChild(bookAuthor);

  const bookPages = document.createElement("div");
  bookPages.classList.add("pages");
  bookPages.textContent = book.pages;
  content.appendChild(bookPages);

  const bookReadButton = document.createElement("button");
  bookReadButton.classList.add("bookReadButton");
  bookReadButton.textContent = "Book read?";
  content.appendChild(bookReadButton);

  bookReadButton.addEventListener("click", () => {
    const getContentIDNumber = parseFloat(content.id.replace("array-", ""));
    myLibrary[getContentIDNumber].isRead = true;
    content.style.border = "5px solid #22c55e";
    bookReadButton.remove();

    const bookIsRead = document.createElement("div");
    bookIsRead.textContent = "Book read ✓";
    bookIsRead.classList.add("bookIsRead");
    content.appendChild(bookIsRead);
  });

  const removeBookButton = document.createElement("button");
  removeBookButton.textContent = "Remove book";
  removeBookButton.classList.add("removeBook");
  content.appendChild(removeBookButton);

  removeBookButton.addEventListener("click", (e) => {
    const selectArrayValue = e.target.dataset.value;
    const selectIndex = e.target.dataset.index;
    const selectId = e.target.parentElement.id;
    if (selectArrayValue === selectId) {
      const getContent = document.getElementById(`${selectId}`);
      getContent.remove();
      myLibrary.splice(selectIndex, 1);
      assignId();
      assignDataValues();
    }
  });
}

// Obtains values from the respective inputs and stores them as arguments in the new Book() object before creating a card display of the book
addBookButton.addEventListener("click", (e) => {
  const selectForm = document.querySelector("form");

  createCardDisplay();
  assignId();
  assignDataValues();
  selectForm.reset();
  modal.style.display = "none";
  e.preventDefault();
});
