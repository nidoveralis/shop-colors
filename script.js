const headerBasket = document.querySelector('.header__basket');
const popupBasket = document.querySelector('.popup__backet');
const buttonsRight = document.querySelectorAll('.slider__button_right');
const buttonsLeft = document.querySelectorAll('.slider__button_left');

function slider(id) {
  if (buttonsLeft.classList.contains('hidden')) {
    buttonsLeft.classList.remove('hidden');
  }
}

headerBasket.addEventListener('mouseover', function () {
  popupBasket.classList.add('popup_active');
});

headerBasket.addEventListener('mouseout', function () {
  popupBasket.classList.remove('popup_active');
});


buttonsRight.forEach((button, id) => {
  button.addEventListener('click', () => slider(id))
})