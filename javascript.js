function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${status}.`;
  };
}

const book1 = new Book("Herr der Ringe", "Tolkin", 1212, "read");
const book2 = new Book("Harry Potter", "JKR", 685, "unread");
