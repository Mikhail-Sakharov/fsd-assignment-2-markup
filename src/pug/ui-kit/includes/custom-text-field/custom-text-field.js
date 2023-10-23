import './custom-text-field.scss';

const customInputElements = document.querySelectorAll('.custom-text-field');

const handleInputFocus = (_evt, inputWrapperElement) => {
  inputWrapperElement.classList.add('custom-text-field__display--focused');
};

const handleInputBlur = (_evt, inputWrapperElement) => {
  inputWrapperElement.classList.remove('custom-text-field__display--focused');
};

customInputElements.forEach((customInputElement) => {
  const customInputElementDisplay = customInputElement.querySelector('.custom-text-field__display');
  const inputElement = customInputElementDisplay.querySelector('input');

  inputElement.addEventListener('focus', (evt) => handleInputFocus(evt, customInputElementDisplay));
});

customInputElements.forEach((customInputElement) => {
  const customInputElementDisplay = customInputElement.querySelector('.custom-text-field__display');
  const inputElement = customInputElementDisplay.querySelector('input');

  inputElement.addEventListener('blur', (evt) => handleInputBlur(evt, customInputElementDisplay));
});
