const customInputElement = document.querySelector('.custom-text-field');
const customInputElementDisplay = customInputElement.querySelector('.custom-text-field__display');
const inputElement = customInputElementDisplay.querySelector('input');

const handleInputFocus = (_evt, inputWrapperElement) => {
  inputWrapperElement.classList.add('custom-text-field__display--focused');
};

const handleInputBlur = (_evt, inputWrapperElement) => {
  inputWrapperElement.classList.remove('custom-text-field__display--focused');
};

inputElement.addEventListener('focus', (evt) => handleInputFocus(evt, customInputElementDisplay));
inputElement.addEventListener('blur', (evt) => handleInputBlur(evt, customInputElementDisplay));
