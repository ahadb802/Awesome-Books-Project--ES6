import Storage from './Storage.js';

const lists = document.querySelector('[data-lists]');
const bookTitle = document.querySelector('[title]');
const bookAuthor = document.querySelector('[author]');
const form = document.querySelector('[data-form]');

let todoArr = Storage.getStorage();

class Todo {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  static displayData() {
    const displayData = todoArr.map((item) => `
            <div class="todo">
            <div>
            <span>"${item.title}" by</span>
            <span> ${item.author}</span>
            </div>
            <button class="remove" data-id = ${item.id}>Remove</button>
            </div>
            `);
    lists.innerHTML = (displayData).join(' ');
  }

  static displayNothing() {
    const displayData = '<h3 class="display-nothing">You have no book to show</h2>';
    lists.innerHTML = displayData;
  }

  static colorChanger() {
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
  }

  static clearInput() {
    bookTitle.value = '';
    bookAuthor.value = '';
  }

  static removeTodo() {
    lists.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove')) {
        e.target.parentElement.remove();
      }
      const btnId = e.target.dataset.id;
      // remove from array.
      Todo.removeArrayTodo(btnId);
    });
  }

  static removeArrayTodo(id) {
    todoArr = todoArr.filter((item) => item.id !== +id);
    Storage.addTodStorage(todoArr);
    if (todoArr.length === 0) {
      Todo.displayNothing();
    }
    Todo.colorChanger();
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = Math.random() * 1000000;
  const todo = new Todo(id, bookTitle.value, bookAuthor.value);
  todoArr = [...todoArr, todo];
  Todo.displayData();
  Todo.colorChanger();
  Todo.clearInput();
  // add to storage
  Storage.addTodStorage(todoArr);
  console.log(Storage.addTodStorage(todoArr));
});

window.addEventListener('DOMContentLoaded', () => {
  if (todoArr.length === 0) {
    Todo.displayNothing();
  } else {
    Todo.displayData();
  }
  Todo.colorChanger();
  // remove from the dom
  Todo.removeTodo();
});

export default Todo;
