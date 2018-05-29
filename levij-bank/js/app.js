'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {
    console.log(event.target);

    // main menu
    event.target.classList.contains('app-menu__open-button') ?
      document.getElementsByClassName('app-sidebar')[0].classList.toggle('sidebar--expand') :
      null;

    // section buttons
    event.target.classList.contains('button-back') ?
    (window.history.length > 0) ? window.history.back() : null : null;

    // section submenu
    event.target.classList.contains('button-filter') ? document.getElementsByClassName('section__header-submenu')[0].classList.toggle('hidden') : null;

    // button click
    event.target.classList.contains('js-button--has-url') ? document.location.href = event.target.dataset.url : null;

    // person menu
    event.target.classList.contains('order__person-title') ?
      document.getElementsByClassName('order__actions-menu')[0].classList.toggle('hidden') :
      null;

    // messenger message add
    function messageAdd() {
      const message = document.createElement('article'),
        messageText = document.createElement('span'),
        messageTime = document.createElement('time');
      let text = document.getElementsByClassName('messenger__footer-text-area')[0],
        date = new Date();

      messageText.innerHTML = text.value;
      messageTime.innerHTML = `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;

      message.classList = 'messenger-message message-question flex column';
      message.appendChild(messageText);
      message.appendChild(messageTime);

      document.getElementsByClassName('section__body')[0].appendChild(message);
    }
    if (event.target.classList.contains('messenger-form__submit-button')) {
      event.preventDefault();
      messageAdd();
    }

  })

  document.addEventListener('keydown', (event) => {
    if(event.keyCode == '13') {
      messageAdd();
    }
  })
})