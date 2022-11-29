// grab all elements
const form = document.querySelector('[data-form]');
const lists = document.querySelector('[data-lists]');
const bookTitle = document.querySelector('[title]');
const bookAuthor = document.querySelector('[author]');

/* eslint max-classes-per-file: ["error", 3] */

// local Storage
class Storage {
  static addTodStorage(todoArr) {
    const storage = localStorage.setItem('todo', JSON.stringify(todoArr));
    return storage;
  }

  static getStorage() {
    const storage = localStorage.getItem('todo') === null
      ? [] : JSON.parse(localStorage.getItem('todo'));
    return storage;
  }
}

// empty array
let todoArr = Storage.getStorage();

// make object instance
class Todo {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}