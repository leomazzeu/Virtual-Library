const myLibrary = [];

// Constructor
function Book(author, title, pages, read){
    this.author = author,
    this.title = title,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

// ======= Open Modal ==========
let btnAddBook = document.getElementById('btnAddBook');
btnAddBook.onclick = () => {
    modal.showModal();
}

//==== Send form to create new book ====
const cardsContainer = document.querySelector('.cards');

const bookForm = document.getElementsByClassName('formInsertBook')[0];

bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Enviou');

//==== Capture form data ====
const author = document.getElementById('author').value;
const title = document.getElementById('title').value;
const pages = document.getElementById('pages').value;
const read = document.getElementById('read').value;

// Add book to array
const bookToAdd = new Book(author, title, pages, read);
addBookToLibrary(bookToAdd);

// =======Create new book==========
const newBook = document.createElement('div');
newBook.classList.add('card', 'text-bg-secondary', 'mb-3');
newBook.style.maxWidth = '18rem';

newBook.innerHTML = `
                <div class="card-header">${author}</div>
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">Páginas: ${pages}</p>
                    <p class="card-text">Foi lido: ${read}</p>
                </div>`;

cardsContainer.appendChild(newBook);
bookForm.reset();

});