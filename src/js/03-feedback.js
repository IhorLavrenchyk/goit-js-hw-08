import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = { email: ' ', message: ' ' };

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

refs.form.addEventListener('input', throttle(storageFormData, 500));
refs.form.addEventListener('submit', onFormSubmit);

saveValue();

function storageFormData(evt) {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedData);

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function saveValue() {
  const savedValues = localStorage.getItem(STORAGE_KEY);

  if (savedValues) {
    formData = JSON.parse(savedValues);
    refs.input.value = formData.email;
    refs.textarea.value = formData.message;
  }
}
