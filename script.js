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

// Assigns an array element data attribute to remove book button
function assignDataValues() {
  const selectRemoveBookButton = document.querySelectorAll(".removeBook");

  let arrayValue = 0;
  let indexValue = 0;
  selectRemoveBookButton.forEach((button) => {
    if (arrayValue === 0 || indexValue === 0) {
      button.dataset.value = "array-0";
      button.dataset.index = 0;
      arrayValue += 1;
      indexValue += 1;
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
      elementValue += 1;
    } else {
      content.setAttribute("id", `array-${elementValue++}`);
    }
  });
}

// Displays book info as a card with a remove book button
function createCardDisplay() {
  const displayBook = myLibrary.map((book) => book.info());

  const selectContainer = document.querySelector(".cardContainer");
  const content = document.createElement("div");
  content.classList.add("content");
  content.textContent = displayBook[myLibrary.length - 1].toString();
  selectContainer.appendChild(content);

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
  const bookTitle = document.querySelector("#bookTitle").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#isRead").value;

  const book = new Book(bookTitle, author, pages, isRead);

  addBookToLibrary(book);
  createCardDisplay();
  assignId();
  assignDataValues();
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
