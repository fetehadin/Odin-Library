const myLibrary = [];
const addBookBtn = document.querySelector(".add-book-btn");
const dialog = document.querySelector(".modal")
const bookForm = document.querySelector('.book-form');
const closeBtn = document.querySelector(".close-btn");
const libraryContainer = document.querySelector(".library-container");


const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");

function Book(author,title,Pages,read) {
  this.title = title;
  this.author = author;
  this.Pages = Pages;
  this.read = read;
}

function addBookToLibrary(author,title,Pages,read) {
  const book = new Book(author,title,Pages,read);
  myLibrary.push(book);
}

function displayBooks(){
  libraryContainer.innerHTML = "";
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.innerHTML = `
      <h2>${book.title}</h2>
      <p>${book.author}</p>
      <p>${book.Pages} pages</p>
      <p>${book.read ? "Read" : "Not Read"}</p>
    `;
    libraryContainer.appendChild(card);
  });

}
    
addBookBtn.addEventListener('click',()=>{
  dialog.showModal();
})


closeBtn.addEventListener("click", () => {
    dialog.close();
});


addBookToLibrary("Tolkien", "The Hobbit", 295, true);
addBookToLibrary("James Clear", "Atomic Habits", 320, false);


bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const read = readInput.checked;

  addBookToLibrary(author, title, pages, read);
  displayBooks();
  dialog.close();
  bookForm.reset();
});

// displayBooks();