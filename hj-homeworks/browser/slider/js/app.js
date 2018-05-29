'use strict';
  const item = document.getElementById('slider');
  let images = ['https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-jump.png','https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-on-foot.png','https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-playground.png','ttps://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-top-view.png','https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax.png'];
  let img = 0;
setInterval(function(){
  item.src = images[img];
  img<images.length ? img++ : img = 0;
  }, 5000);