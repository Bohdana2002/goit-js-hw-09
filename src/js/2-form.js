const formData = { email: '', message: '' };
const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', event => {
  formData.email = refs.form.elements.email.value;
  formData.message = refs.form.elements.message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

if (localStorage.getItem('feedback-form-state') !== null) {
  const data = localStorage.getItem('feedback-form-state');
  const parsedData = JSON.parse(data);
  refs.form.elements.email.value = parsedData.email;
  refs.form.elements.message.value = parsedData.message;
  formData.email = parsedData.email;
  formData.message = parsedData.message;
}
refs.form.addEventListener('submit', event => {
  if (formData.email === '' || formData.message === '') {
    alert('«Fill please all fields»');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    refs.form.reset();
    formData.email = '';
    formData.message = '';
  }
  event.preventDefault();
});
