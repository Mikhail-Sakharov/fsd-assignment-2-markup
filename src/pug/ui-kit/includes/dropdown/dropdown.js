import './dropdown.scss';

const dropdownButtons = document.querySelectorAll('.dropdown__button');

const handleDropdownButtonFocus = (dropdownInput) => {
  dropdownInput.checked = true;
};

const handleDropdownButtonBlur = (dropdownInput) => {
  dropdownInput.checked = false;
};

dropdownButtons.forEach((button) => {
  const dropdownInput = button.closest('.dropdown').querySelector('.dropdown__input');
  button.addEventListener('focus', () => handleDropdownButtonFocus(dropdownInput));
  button.addEventListener('blur', () => handleDropdownButtonBlur(dropdownInput));
});
