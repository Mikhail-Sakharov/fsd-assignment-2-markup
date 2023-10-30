import './custom-select.scss';

const customSelectElements = document.querySelectorAll('.custom-select');

const handleCustomSelectElementFocus = (customSelectWrapperElement) => {
  customSelectWrapperElement.classList.add('custom-select__wrapper--focused');
};

const handleCustomSelectElementBlur = (customSelectWrapperElement) => {
  customSelectWrapperElement.classList.remove('custom-select__wrapper--focused');
};

customSelectElements.forEach((customSelectElement) => {
  const customSelectButtonElement = customSelectElement.querySelector('.custom-select__button');
  const customSelectWrapperElement = customSelectElement.querySelector('.custom-select__wrapper');

  customSelectButtonElement.addEventListener('focus', () => handleCustomSelectElementFocus(customSelectWrapperElement));
});

customSelectElements.forEach((customSelectElement) => {
  const customSelectButtonElement = customSelectElement.querySelector('.custom-select__button');
  const customSelectWrapperElement = customSelectElement.querySelector('.custom-select__wrapper');

  customSelectButtonElement.addEventListener('blur', () => handleCustomSelectElementBlur(customSelectWrapperElement));
});
