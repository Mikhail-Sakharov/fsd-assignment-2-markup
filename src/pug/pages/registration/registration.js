import './registration.scss';

const registrationPageFocusedElement = document
  .querySelector('.registration__form')
  ?.querySelector('.custom-text-field__input');

registrationPageFocusedElement?.focus();
