'use strict';

document.addEventListener('DOMContentLoaded', () => {

  document.addEventListener('click', (event) => {
    event.target.classList.contains('header__search')
    ? document.getElementsByClassName('header__left-col')[0].classList.add('expand')
    : document.getElementsByClassName('header__left-col')[0].classList.remove('expand');

    event.target.classList.contains('dropdown')
    ? document.getElementsByClassName('header__submenu-items')[0].classList.toggle('hidden')
    : document.getElementsByClassName('header__submenu-items')[0].classList.add('hidden');

    event.target.classList.contains('article__title')
    ? document.getElementsByClassName('article')[0].classList.add('fadeOut')
    : null;

    event.target.classList.contains('modal__close-button')
    ? document.getElementsByClassName('modal__wrapper')[0].classList.add('hidden')
    : null;

    event.target.classList.contains('header__button-add')
    ? document.getElementsByClassName('modal__wrapper')[0].classList.remove('hidden')
    : null;

    event.target.classList.contains('header__bell')
    ? document.getElementsByClassName('modal__wrapper')[0].classList.remove('hidden')
    : null;

    event.target.classList.contains('header__profile')
    ? document.getElementsByClassName('modal__wrapper')[0].classList.remove('hidden')
    : null;

  })

})