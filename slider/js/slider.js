'use strict';

document.addEventListener('DOMContentLoaded', init);

function init() {
  
  const slider = document.getElementsByClassName('slider__slides-container')[0];

  setInterval(() => {

    console.log(slider.firstChild);

  }, 1000);

}