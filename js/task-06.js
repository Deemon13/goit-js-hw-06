const refs = {
  inputRef: document.querySelector('#validation-input'),
};

const dataLength = Number.parseInt(refs.inputRef.dataset.length);

function onInputRemoveFocus(event) {
  if (event.currentTarget.value.length === dataLength) {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.add('valid');
  } else if (!event.currentTarget.value) {
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.add('invalid');
  }
}

refs.inputRef.addEventListener('blur', onInputRemoveFocus);
