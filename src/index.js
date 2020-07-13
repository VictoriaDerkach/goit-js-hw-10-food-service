import './styles.css';

const compiledTemplate = require('./template.hbs');

import menu from './menu.json';

const filledTemplate = compiledTemplate(menu);
const menuElement = document.querySelector('.js-menu');

menuElement.insertAdjacentHTML('beforeend', filledTemplate);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const darkTheme = localStorage.getItem('dark-theme');
const input = document.querySelector('.js-switch-input');
const body = document.querySelector('body');

if (darkTheme === 'false') {
  body.classList.remove(Theme.DARK);
  input.checked = false;
} else {
  body.classList.add(Theme.DARK);
  input.checked = true;
}

input.addEventListener('change', changeTheme);

function changeTheme(e) {
  if (input.checked === false) {
    body.classList.remove(Theme.DARK);
  } else {
    body.classList.add(Theme.DARK);
  }
  localStorage.setItem('dark-theme', input.checked);
}
