import displayAllBooks from './displayAllBooks.js';
import { Book, booksCollection } from './Todo.js';

const submitBtn = document.querySelector('[data-form]');
const bookTitle = document.querySelector('[title]');
const authorName = document.querySelector('[author]');

const AddBook = () => {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (bookTitle.value === '' && authorName.value === '') {
      return false;
    }

    if (bookTitle.value !== '' && authorName.value !== '') {
      const id = Math.random() * 1000000;
      const book = new Book(id, bookTitle.value, authorName.value);
      booksCollection.push(book);
      displayAllBooks();
      Book.colorChanger();
      bookTitle.value = '';
      authorName.value = '';
    }
    return true;
  });
};

export default AddBook;