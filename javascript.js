// APP
const myLibrary = [];
const myLibraryInactive = [];

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
  myLibrary.forEach((element) => {
    let test = myLibraryInactive.push(myLibrary.pop());
    const div = document.createElement("div");
    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const statusBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    removeBtn.setAttribute("class", "remove-btn");
    removeBtn.setAttribute("data-index", `${test - 1}`);
    statusBtn.setAttribute("class", "status-btn");

    container.append(div);

    bookTitle.textContent = `"${element.title}"`;
    bookAuthor.textContent = element.author;
    statusBtn.textContent = `${element.pages} pages`;
    removeBtn.textContent = "Remove";

    if (element.status) {
      statusBtn.textContent = "Read";
      statusBtn.classList.add("btn-green");
    } else {
      statusBtn.textContent = "Unread";
      statusBtn.classList.add("btn-red");
    }

    div.classList.add("book-card");
    div.append(bookTitle);
    div.append(bookAuthor);
    div.append(bookPages);
    div.append(statusBtn);
    div.append(removeBtn);
    console.log(test);
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
const removeBtn = document.createElement("button");

btnAddBook.addEventListener("click", openForm);
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  getBookFromInput();
  addBookFormDiv.style.display = "none";
  displayBook();
});

function openForm() {
  addBookFormForm.reset();
  addBookFormDiv.style.display = "block";
}
