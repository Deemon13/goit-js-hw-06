let counterValue = 0;
const counterRef = document.querySelector('#counter');
const refs = {
  decrementRef: counterRef.querySelector('button[data-action="decrement"]'),
  incrementRef: counterRef.querySelector('button[data-action="increment"]'),
  valueRef: counterRef.querySelector('#value'),
  resetRef: counterRef.querySelector('button[data-action="reset"]'),
};

function handleDecrement() {
  counterValue -= 1;
  refs.valueRef.textContent = counterValue;

  toggleAttribute(counterValue, refs.resetRef, 'disabled', true);
}

function handleIncrement() {
  counterValue += 1;
  refs.valueRef.textContent = counterValue;

  toggleAttribute(counterValue, refs.resetRef, 'disabled', true);
}

function handleResetCounter() {
  counterValue = 0;
  refs.valueRef.textContent = counterValue;

  toggleAttribute(counterValue, refs.resetRef, 'disabled', true);
}

function toggleAttribute(value, element, attrName, attrValue) {
  if (value === 0) {
    element.setAttribute(attrName, attrValue);
  } else {
    element.removeAttribute(attrName);
  }
}

refs.resetRef.setAttribute('disabled', true);

refs.decrementRef.addEventListener('click', handleDecrement);
refs.incrementRef.addEventListener('click', handleIncrement);
refs.resetRef.addEventListener('click', handleResetCounter);
