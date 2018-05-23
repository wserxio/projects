'use strict';

var image       = document.getElementById("currentPhoto"),
    nextButton  = document.getElementById("nextPhoto"),
    prevButton  = document.getElementById("prevPhoto"),
    i           = 0,
    uri         = [
                  'https://netology-code.github.io/hj-homeworks/browser/gallery/i/breuer-building.jpg',
                  'https://netology-code.github.io/hj-homeworks/browser/gallery/i/guggenheim-museum.jpg',
                  'https://netology-code.github.io/hj-homeworks/browser/gallery/i/headquarters.jpg',
                  'https://netology-code.github.io/hj-homeworks/browser/gallery/i/IAC.jpg',
                  'https://netology-code.github.io/hj-homeworks/browser/gallery/i/new-museum.jpg'
                  ];

image.src = uri[i];

function goNext(){ i < uri.length ? i++ : i = 0; image.src = uri[i]; }
function goPrev(){ i != 0 ? i-- : i = uri.length; image.src = uri[i]; }

nextButton.onclick = goNext;
prevButton.onclick = goPrev;