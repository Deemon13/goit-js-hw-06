const controls = document.querySelector('#controls');
const divContainer = document.querySelector('#boxes');

const userInput = controls.querySelector('input');
const divCreator = controls.querySelector('button[data-create]');
const divDestroyer = controls.querySelector('button[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${i * 10 + 30}px`;
    div.style.height = `${i * 10 + 30}px`;
    div.style.backgroundColor = getRandomHexColor();
    divContainer.append(div);
  }
}

function onClickCreateBoxes() {
  destroyBoxes();

  const numberOfDivs = Number(userInput.value);

  createBoxes(numberOfDivs);
}

function destroyBoxes() {
  divContainer.innerHTML = '';
}

divCreator.addEventListener('click', onClickCreateBoxes);
divDestroyer.addEventListener('click', destroyBoxes);
