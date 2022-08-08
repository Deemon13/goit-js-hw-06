const refs = {
  body: document.querySelector('body'),
  colorChanger: document.querySelector('.change-color'),
  colorText: document.querySelector('.color'),
};

let currentColor = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorChangeHandler() {
  currentColor = getRandomHexColor();

  refs.colorText.textContent = currentColor;

  refs.body.style.backgroundColor = currentColor;
}

refs.colorChanger.addEventListener('click', colorChangeHandler);
