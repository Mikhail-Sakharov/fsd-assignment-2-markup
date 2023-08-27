const customInputElements = document.querySelectorAll('.custom-input');

const handleInputFocus = (_evt, inputWrapperElement) => {
  inputWrapperElement.classList.add('custom-input__wrapper--focused');
};

const handleInputBlur = (_evt, inputWrapperElement) => {
  inputWrapperElement.classList.remove('custom-input__wrapper--focused');
};

customInputElements.forEach((customInputElement) => {
  const inputElement = customInputElement.querySelector('input');
  const inputWrapperElement = customInputElement.querySelector('.custom-input__wrapper');

  inputElement.addEventListener('focus', (evt) => handleInputFocus(evt, inputWrapperElement));
});

customInputElements.forEach((customInputElement) => {
  const inputElement = customInputElement.querySelector('input');
  const inputWrapperElement = customInputElement.querySelector('.custom-input__wrapper');

  inputElement.addEventListener('blur', (evt) => handleInputBlur(evt, inputWrapperElement, inputElement));
});
