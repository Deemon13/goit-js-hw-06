const refs = {
  sizeControlRef: document.querySelector('#font-size-control'),
  textRef: document.querySelector('#text'),
};

function onInputChangeFontSize(event) {
  const currentSize = event.currentTarget.value;

  refs.textRef.style.fontSize = `${currentSize}px`;
}

refs.sizeControlRef.addEventListener('input', onInputChangeFontSize);
