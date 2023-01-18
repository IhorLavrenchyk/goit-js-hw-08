const refs = {
  form: document.querySelector('feedback-form'),
  textarea: document.querySelector('message'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('send');

  evt.currentTarget.reset();
}

// function onTextareaInput(evt) {}
