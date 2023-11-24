import './sign-in.scss';

const signInPageFocusedElement = document
  .querySelector('.sign-in__form')
  ?.querySelector('.custom-text-field__input');

signInPageFocusedElement?.focus();
