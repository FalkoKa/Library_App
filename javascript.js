// APP
let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${status}.`;
  };
}

function addBookToLibrary() {
  let userInput = prompt("Please enter: Title, Author, Pages, Status");
  myLibrary.push(new Book(userInput));
  displayBook();
}

function displayBook() {
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

// UI
const container = document.querySelector(".container");
const btn = document.querySelector(".addBook");

btn.addEventListener("click", handleClick);

function handleClick() {
  addBookToLibrary();
}
