const headerBasket = document.querySelector('.header__basket');
const popupBasket = document.querySelector('.popup__backet');
const buttonsRight = document.querySelectorAll('.slider__button_right');
const buttonsLeft = document.querySelectorAll('.slider__button_left');
const sliders = document.querySelectorAll('.slider');
const slidersList = document.querySelectorAll('.slider__list');
const form = document.querySelector('.form');
const popupSubmit = document.querySelector('.popup-submit');
const buttonClose = document.querySelector('.popup__close');
const errors = document.querySelectorAll('.form__error');
const inputs = document.querySelectorAll('.form__input');

function closePopup() {
  popupSubmit.classList.remove('popup_active');
};

function handleSubmitForm(e) {
  e.preventDefault();
  let allInputsValid = true;
  inputs.forEach((item, id) => {
    if(item.value.trim() === '') {
      errors[id].classList.add('form__error_active');
      allInputsValid = false;
    } else {
      errors[id].classList.remove('form__error_active');
    }
  });
  if (allInputsValid) {
    popupSubmit.classList.add('popup_active');
  }
};

function handleScroll(id) {
  if(sliders[id].scrollLeft !== 0){
    buttonsLeft[id].classList.remove('hidden');
  } else {
    buttonsLeft[id].classList.add('hidden');
  }
  if (sliders[id].clientWidth + sliders[id].scrollLeft === sliders[id].scrollWidth) {
    buttonsRight[id].classList.add('hidden');
  } else {
    buttonsRight[id].classList.remove('hidden');
  }
};

function handleScrollRight(id) {
  sliders[id].scrollTo({
    left: sliders[id].scrollLeft + 100,
    behavior: 'smooth'
  });
};

function handleScrollLeft(id) {
  sliders[id].scrollTo({
    left: sliders[id].scrollLeft - 100,
    behavior: 'smooth'
  });
};

headerBasket.addEventListener('mouseover', function () {
  popupBasket.classList.add('popup_active');
});

headerBasket.addEventListener('mouseout', function () {
  popupBasket.classList.remove('popup_active');
});


buttonsRight.forEach((button, id) => {
  button.addEventListener('click', () => handleScrollRight(id))
});

buttonsLeft.forEach((button, id) => {
  button.addEventListener('click', () => handleScrollLeft(id))
});

sliders.forEach((item, id) => {
  item.addEventListener('scroll', () => {
    handleScroll(id);
  });
});

buttonClose.addEventListener('click', closePopup);
form.addEventListener('submit', handleSubmitForm);