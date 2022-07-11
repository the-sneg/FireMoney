// import Notiflix from '../node_modules/notiflix/src/notiflix';

const warBtn = document.querySelector('[warning]');
warBtn.addEventListener('click', warMess);

function warMess() {
  return alert('Это тестовая версия! Некоторые функции не доступны!');
}
