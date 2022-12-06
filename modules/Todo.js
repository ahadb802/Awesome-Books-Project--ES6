const booksCollection = JSON.parse(localStorage.getItem('books')) || [];

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

    addBook = () => {
      booksCollection.push(this);
    };

    static removeBooks = (index) => {
      booksCollection.splice(index, 1);
    };

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
}

export { Book, booksCollection };