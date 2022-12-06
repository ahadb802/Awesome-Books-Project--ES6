import Date from './modules/date.js';
import Navigation from './modules/navigation.js';
import displayAllBooks from './modules/displayAllBooks.js';
import AddBook from './modules/addBook.js';

// once the browser is loaded

window.onload = displayAllBooks();
window.onload = () => {
  const todos = document.querySelectorAll('.todo');
  let count = 1;
  todos.forEach((item) => {
    if (count % 2 !== 0) {
      item.classList.add('active');
    } else if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
    count += 1;
  });
};
AddBook();
Navigation();
setInterval(Date, 10);
