'use strict';

function KARTBOOK_CORE() {
  _cart = [];

  this.createMatrix = function (options) {
    _options = options;

    _adult = [];
    _kart = [];
    _hour = [];

    for (var i = 0; i < _options.timeInterval; i++) {
      _hour.push({ avail: true });
    }

    for (var j = 0; j < _options.hours; j++) {
      _kart.push(_hour);
    }

    for (var a = 0; a < _options.karts; a++) {
      _adult.push(_kart);
    }

    return this;
  };

  this.showMatrix = function () {

    for (var i = 0; i < _adult.length; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < _adult[i].length; j++) {
        var td = document.createElement('td');
        for (var o = 0; o < _adult[i][j].length; o++) {
          var checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.dataset.part = o + 1;
          checkbox.dataset.hour = j + 1;
          checkbox.dataset.category = i + 1;
          _adult[i][j][o].avail === true ? td.appendChild(checkbox) : null;
        }
        tr.appendChild(td);
      }
      document.querySelector('tbody').appendChild(tr);
    }

    return this;
  };

  this.checkOut = function () {
    _choice = document.querySelectorAll('input:checked');

    _choice.forEach(function (input) {
      _cart.push({
        category: input.dataset.category,
        hour: input.dataset.hour,
        part: input.dataset.part
      });
    });

    console.log(_cart);

    return this;
  };
}