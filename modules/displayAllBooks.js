import { Book, booksCollection } from './Todo.js';

const allBooks = document.querySelector('[data-lists]');

const booksMagazine = (books) => {
  localStorage.setItem('books', JSON.stringify(books));
};

const displayAllBooks = () => {
  booksMagazine(booksCollection);
  allBooks.innerHTML = booksCollection
    .map((item) => `
    <div class="todo">
    <div>
    <span>"${item.title}" by</span>
    <span> ${item.author}</span>
    </div>
    <button class="remove" data-id = ${item.id}>Remove</button>
    </div>
    `)
    .join('');

  const removeBtn = document.querySelectorAll('.remove');
  removeBtn.forEach((button, index) => button.addEventListener('click', () => {
    Book.removeBooks(index);
    displayAllBooks();
    Book.colorChanger();
  }));
};

export default displayAllBooks;