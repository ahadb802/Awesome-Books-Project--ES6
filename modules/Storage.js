export default class Storage {
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
