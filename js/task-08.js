const refs = {
  form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  const userData = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log('userData: ', userData);

  event.currentTarget.reset();
}
