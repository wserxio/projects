document.addEventListener('DOMContentLoaded', init);

function init() {

  // engine initialising
  window.eShop = new StoreEngine({
    labels: {
      cartCounter: '._cart__counter',
      cartSumm: '._cart__summ'
    },
    buttons: {
      addToCart: '._addToCart'
    }
  });

}