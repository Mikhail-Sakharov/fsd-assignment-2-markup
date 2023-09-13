import flatpickr from 'flatpickr';
import {Russian} from 'flatpickr/dist/l10n/ru.js';

const dateDropdownsWrapperElement = document.querySelector('.flex-inner-wrapper');
const customSelectCollection = dateDropdownsWrapperElement.querySelectorAll('.custom-select__wrapper');

const filterDateDropdownElement = document.querySelector('.left-top-wrapper-item__inner-wrapper--short').querySelector('.custom-select__wrapper');

customSelectCollection.forEach((customSelect) => {
  flatpickr(
    customSelect,
    {
      'locale': Russian
    }
  );
});

flatpickr(
  filterDateDropdownElement,
  {
    'locale': Russian,
    mode: 'range'
  }
);
