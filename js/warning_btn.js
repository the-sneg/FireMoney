import Notiflix from 'notiflix';

const warBtn = document.querySelector('#warning');
warBtn.addEventListener('click', warMess);

function warMess() {
  return Notiflix.Notify.warning('wwww');
}
