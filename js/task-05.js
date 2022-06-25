const refs = {
  inputRef: document.querySelector('#name-input'),
  outputRef: document.querySelector('#name-output'),
};

refs.inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.outputRef.textContent = event.currentTarget.value.trim();
  if (!event.currentTarget.value.trim()) {
    refs.outputRef.textContent = 'Anonymous';
  }
}
