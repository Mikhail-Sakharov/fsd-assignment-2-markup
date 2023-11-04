import './dropdown-guests.scss';

const dropdownGuestsButtons = document.querySelectorAll('.dropdown-guests__button');

const handleDropdownGuestsButtonFocus = (dropdownGuestsInput) => {
  dropdownGuestsInput.checked = true;
};

const handleDropdownGuestsButtonBlur = (dropdownGuestsInput) => {
  dropdownGuestsInput.checked = false;
};

dropdownGuestsButtons.forEach((dropDownButton) => {
  const dropdownGuestsInput = dropDownButton.closest('.dropdown-guests').querySelector('.dropdown-guests__input');
  const dropdownGuestsTextButtons = dropdownGuestsInput.closest('.dropdown-guests').querySelectorAll('.button-text');

  dropDownButton.addEventListener('focus', () => handleDropdownGuestsButtonFocus(dropdownGuestsInput));
  dropDownButton.addEventListener('blur', () => handleDropdownGuestsButtonBlur(dropdownGuestsInput));

  dropdownGuestsTextButtons.forEach((textButton) => {
    textButton.addEventListener('focus', () => handleDropdownGuestsButtonFocus(dropdownGuestsInput));
    textButton.addEventListener('blur', () => handleDropdownGuestsButtonBlur(dropdownGuestsInput));
  });
});
