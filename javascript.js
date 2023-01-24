// APP
const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function getBookFromInput() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const status = document.querySelector("#is-read").checked;
  return myLibrary.push(new Book(title, author, pages, status));
}

function displayBook() {
  // add loop that checks if element from array has been displayed already?
  myLibrary.forEach((element) => {
    const div = document.createElement("div");
    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookStatus = document.createElement("p");
    // const removeBtn = document.createElement("button");

    // removeBtn.setAttribute("id", "remove-btn");
    // removeBtn.textContent = "Remove";

    container.append(div);

    bookTitle.textContent = element.title;
    bookAuthor.textContent = element.author;
    bookPages.textContent = element.pages;
    bookStatus.textContent = element.status;

    div.classList.add("book-card");
    div.append(bookTitle);
    div.append(bookAuthor);
    div.append(bookPages);
    div.append(bookStatus);
    const bookCard = document.querySelector(".book-card");
    // bookCard.append(removeBtn);

    // removeBtn.addEventListener("click", () => div.remove(".book-card"));
  });
}

function removeBook() {}

function toggleRead() {}

// UI
const container = document.querySelector(".container");
const btnAddBook = document.querySelector(".addBook");
const btnSubmit = document.querySelector("#btnSubmit");
const addBookFormDiv = document.querySelector(".input-form");
const addBookFormForm = document.querySelector("#myForm");

btnAddBook.addEventListener("click", openForm);
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  getBookFromInput();
  addBookFormDiv.style.display = "none";
});

function openForm() {
  addBookFormForm.reset();
  addBookFormDiv.style.display = "block";
}

// add "please fill out this field"
