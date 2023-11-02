import './custom-text-field.scss';

const customInputElements = document.querySelectorAll('.custom-text-field');

const handleInputFocus = (inputWrapperElement) => {
  inputWrapperElement.classList.add('custom-text-field__display--focused');
};

const handleInputBlur = (inputWrapperElement) => {
  inputWrapperElement.classList.remove('custom-text-field__display--focused');
};

customInputElements.forEach((customInputElement) => {
  const customInputElementDisplay = customInputElement.querySelector('.custom-text-field__display');
  const inputElement = customInputElementDisplay.querySelector('input');

  inputElement.addEventListener('focus', () => handleInputFocus(customInputElementDisplay));
});

customInputElements.forEach((customInputElement) => {
  const customInputElementDisplay = customInputElement.querySelector('.custom-text-field__display');
  const inputElement = customInputElementDisplay.querySelector('input');

  inputElement.addEventListener('blur', () => handleInputBlur(customInputElementDisplay));
});
