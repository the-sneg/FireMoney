const warBtn = document.querySelectorAll('[warning]');
warBtn.forEach(function (e) {
  e.onclick = function () {
    event.preventDefault();
    return Notiflix.Notify.failure('Это тестовая версия! Некоторые функции не доступны!');
  };
});
