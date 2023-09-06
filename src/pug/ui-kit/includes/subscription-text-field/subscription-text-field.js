const subscriptionInputElements = document.querySelectorAll('.subscription-input');

const handleInputFocus = (_evt, inputWrapperElement) => {
  inputWrapperElement.classList.add('subscription-input--focused');
};

const handleInputBlur = (_evt, inputWrapperElement) => {
  inputWrapperElement.classList.remove('subscription-input--focused');
};

subscriptionInputElements.forEach((subscriptionInputElement) => {
  const subscriptionInputElementDisplay = subscriptionInputElement.querySelector('.subscription-input__wrapper');
  const inputElement = subscriptionInputElementDisplay.querySelector('input');

  inputElement.addEventListener('focus', (evt) => handleInputFocus(evt, subscriptionInputElementDisplay));
});

subscriptionInputElements.forEach((subscriptionInputElement) => {
  const subscriptionInputElementDisplay = subscriptionInputElement.querySelector('.subscription-input__wrapper');
  const inputElement = subscriptionInputElementDisplay.querySelector('input');

  inputElement.addEventListener('blur', (evt) => handleInputBlur(evt, subscriptionInputElementDisplay));
});
