/* Initialize a book object with necessary keys */

const bookArray = [];

/* Initialize necessary variables */

const bookList = document.querySelector('.book-list');
const titleValue = document.querySelector('.form-book-title');
const authorValue = document.querySelector('.form-author-name');
const form = document.querySelector('form');
const keys = [];

/* Declare a function to add books in HTML */

function addBooks(index) {
  const article = document.createElement('article');
  article.classList.add('books');
  const id = `article${index}`;
  article.setAttribute('id', id);
  article.innerHTML = `  
  <h4 class="book-name">${bookArray[index].bookTitle}</h4>
  <p class="author-name">${bookArray[index].authorName}</p>
  <button class="remove-button" id="${index}" onclick="removeButtons(id)">Remove</button>
  <hr>`;
  bookList.appendChild(article);
}

/* eslint-disable no-unused-vars */

function removeButtons(id) {
  const articleID = `#article${id}`;
  const removeArticle = document.querySelector(articleID);
  bookList.removeChild(removeArticle);
  window.localStorage.removeItem(keys[id]);
}

let i = 0;

/* Declare a function to create bookObject and push it to bookArray */

function add(bookTitle, authorName) {
  const bookObject = {
    bookTitle: '',
    authorName: '',
  };
  bookObject.bookTitle = bookTitle;
  bookObject.authorName = authorName;
  bookArray.push(bookObject);
  addBooks(i);
  i += 1;
}

/* Using local storage */

const storedDataArray = [];

function dataStore(index) {
  const name = `name ${index}`;
  localStorage.setItem(name, JSON.stringify(storedDataArray[index]));
  keys.push(name);
}

let position = 0;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const storedData = {
    title: '',
    author: '',
  };
  storedData.title = titleValue.value;
  storedData.author = authorValue.value;
  storedDataArray.push(storedData);
  dataStore(position);
  add(storedData.title, storedData.author);
  position += 1;
  titleValue.value = null;
  authorValue.value = null;
});

//checking for conditions

if (JSON.parse(localStorage !== null)) {
  for (let x = 0; x < localStorage.length; x += 1) {
    const storedData = JSON.parse(localStorage.getItem(localStorage.key(x)));
    if (storedData !== null) {
      storedDataArray.push(storedData);
      keys.push(localStorage.key(x));
      add(storedData.title, storedData.author);
      position += 1;
    }
  }
}
