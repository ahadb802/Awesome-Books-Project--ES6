const contactForm = document.querySelector('.contact-form');
const showlist = document.querySelector('#lists-item');
const addList = document.querySelector('#lists-item-add');
const contact = document.querySelector('#lists-item-conatct');
const allAwesome = document.querySelector('.title');
const form = document.querySelector('[data-form]');
const lists = document.querySelector('[data-lists]');

const Navigation = () => {
  showlist.addEventListener('click', () => {
    if (lists.classList.contains('hide')) {
      lists.classList.remove('hide');
      allAwesome.classList.remove('hide');
    }

    if (form.classList.contains('show')) {
      form.classList.remove('show');
    }

    if (contactForm.classList.contains('show')) {
      contactForm.classList.remove('show');
    }
  });

  addList.addEventListener('click', () => {
    if (!form.classList.contains('show')) {
      form.classList.add('show');
    }

    if (!lists.classList.contains('hide')) {
      lists.classList.add('hide');
      allAwesome.classList.add('hide');
    }

    if (contactForm.classList.contains('show')) {
      contactForm.classList.remove('show');
    }
  });

  contact.addEventListener('click', () => {
    if (!contactForm.classList.contains('show')) {
      contactForm.classList.add('show');
    }

    if (!lists.classList.contains('hide')) {
      lists.classList.add('hide');
      allAwesome.classList.add('hide');
    }

    if (form.classList.contains('show')) {
      form.classList.remove('show');
    }
  });
};

export default Navigation;