import './dropdown.scss';

const dropdownButtons = document.querySelectorAll('.dropdown__button');

const handleDropdownButtonFocus = (dropdownInput) => {
  dropdownInput.checked = true;
};

dropdownButtons.forEach((button) => {
  const dropdownInput = button.closest('.dropdown').querySelector('.dropdown__input');
  button.addEventListener('focus', () => handleDropdownButtonFocus(dropdownInput));
});
