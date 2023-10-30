import './subscription-text-field.scss';

const subscriptionInputElements = document.querySelectorAll('.subscription-input');

const handleInputFocus = (inputWrapperElement) => {
  inputWrapperElement.classList.add('subscription-input__wrapper--focused');
};

const handleInputBlur = (inputWrapperElement) => {
  inputWrapperElement.classList.remove('subscription-input__wrapper--focused');
};

subscriptionInputElements.forEach((subscriptionInputElement) => {
  const subscriptionInputWrapperElement = subscriptionInputElement.querySelector('.subscription-input__wrapper');
  const inputElement = subscriptionInputWrapperElement.querySelector('input');

  inputElement.addEventListener('focus', () => handleInputFocus(subscriptionInputWrapperElement));
});

subscriptionInputElements.forEach((subscriptionInputElement) => {
  const subscriptionInputWrapperElement = subscriptionInputElement.querySelector('.subscription-input__wrapper');
  const inputElement = subscriptionInputWrapperElement.querySelector('input');

  inputElement.addEventListener('blur', () => handleInputBlur(subscriptionInputWrapperElement));
});
