'use strict';

// constructor

var StoreEngine = function StoreEngine(options) {
  var _this = this;

  _options = options;
  _cart = [];
  _cartCounter = document.querySelector(_options.labels.cartCounter);
  _cartSumm = document.querySelector(_options.labels.cartSumm);
  _buttons = document.querySelectorAll(_options.buttons.addToCart);

  // add Item to Cart
  this.addToCart = function (item) {
    _cart.push(item);
    return this;
  };

  // showCart in Console
  this.showCart = function () {
    console.log(_cart);
    return this;
  };

  // cart Update
  this.updateCart = function () {
    // count
    _cartCounter.innerText = _cart.length;
    // temp summ
    _temp = _cart.map(function (e) {
      return e.price;
    });
    // summ
    _temp != 0 ? _cartSumm.innerText = _temp.reduce(function (sum, cur) {
      return Math.round(parseInt(sum) + parseInt(cur));
    }) : _cartSumm.innerText = 0;
    return this;
  };

  // clear Cart
  this.clearCart = function () {
    _cart = [];
    this.updateCart();
    return this;
  };

  // addToCart Button
  _buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      _this.addToCart({
        name: button.dataset.name,
        category: button.dataset.category,
        price: button.dataset.price
      });
      _this.updateCart();
    });
  });
};'use strict';

// constructor
var StoreEngine = function StoreEngine(options) {
  var _this = this;

  _options = options;
  _cart = [];
  _cartCounter = document.querySelector(_options.labels.cartCounter);
  _cartSumm = document.querySelector(_options.labels.cartSumm);
  _buttons = document.querySelectorAll(_options.buttons.addToCart);

  // add Item to Cart
  this.addToCart = function (item) {
    _cart.push(item);
    return this;
  };

  // showCart in Console
  this.showCart = function () {
    console.log(_cart);
    return this;
  };

  // cart Update
  this.updateCart = function () {
    // count
    _cartCounter.innerText = _cart.length;
    // temp summ
    _temp = _cart.map(function (e) {
      return e.price;
    });
    // summ
    _temp != 0 ? _cartSumm.innerText = _temp.reduce(function (sum, cur) {
      return Math.round(parseInt(sum) + parseInt(cur));
    }) : _cartSumm.innerText = 0;
    return this;
  };

  // clear Cart
  this.clearCart = function () {
    _cart = [];
    this.updateCart();
    return this;
  };

  // addToCart Button
  _buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      _this.addToCart({
        name: button.dataset.name,
        category: button.dataset.category,
        price: button.dataset.price
      });
      _this.updateCart();
    });
  });
};