import './dropdown-guests.scss';

const dropdownGuestsButtons = document.querySelectorAll('.dropdown-guests__button');

const handleDropdownGuestsButtonFocus = (dropdownGuestsInput) => {
  dropdownGuestsInput.checked = true;
};

dropdownGuestsButtons.forEach((dropDownButton) => {
  const dropdownGuestsInput = dropDownButton.closest('.dropdown-guests').querySelector('.dropdown-guests__input');
  const dropdownGuestsTextButtons = dropdownGuestsInput.closest('.dropdown-guests').querySelectorAll('.button-text');

  dropDownButton.addEventListener('focus', () => handleDropdownGuestsButtonFocus(dropdownGuestsInput));

  dropdownGuestsTextButtons.forEach((textButton) => {
    textButton.addEventListener('focus', () => handleDropdownGuestsButtonFocus(dropdownGuestsInput));
  });
});
