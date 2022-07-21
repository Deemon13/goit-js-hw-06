const refs = {
  sizeControlRef: document.querySelector('#font-size-control'),
  textRef: document.querySelector('#text'),
};

let defaultTextSize = '16';
refs.sizeControlRef.value = defaultTextSize;

function onInputChangeFontSize(event) {
  const currentSize = event.currentTarget.value;

  refs.textRef.style.fontSize = `${currentSize}px`;
}

refs.sizeControlRef.addEventListener('input', onInputChangeFontSize);
