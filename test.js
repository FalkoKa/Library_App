// APP
const myLibrary = [];
const myLibraryInactive = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.toggle = () => {
    if (this.status) {
      this.status = false;
    } else {
      this.status = true;
    }
  };
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
    const test = myLibraryInactive.push(myLibrary.pop());
    const div = document.createElement("div");
    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const statusBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    div.classList.add("book-card");
    div.setAttribute("data-index", `${test - 1}`);
    removeBtn.setAttribute("class", "remove-btn");
    statusBtn.setAttribute("class", "status-btn");
    statusBtn.setAttribute("data-index", `${test}`);

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
  });

  const buttonRem = document.querySelectorAll(".remove-btn");
  const unreadBtn = document.querySelectorAll(".status-btn");

  buttonRem.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  });

  unreadBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
      console.log(element.dataset.index);
      // console.log(myLibraryInactive[element.dataIndex]);
    });
  });
}

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
