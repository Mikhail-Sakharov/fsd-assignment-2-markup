import './expandable-checkbox-list.scss';

const expandableCheckboxLists = document.querySelectorAll('.expandable-checkbox-list');

const handleExpandableCheckboxListInputFocus = (listInput) => {
  listInput.checked = true;
};

const handleExpandableCheckboxListInputBlur = (listInput) => {
  listInput.checked = false;
};

expandableCheckboxLists.forEach((list) => {
  const checkboxInputs = list.querySelectorAll('.custom-checkbox input');
  const listInput = list.querySelector('.expandable-checkbox-list__input');

  checkboxInputs.forEach((input) => {
    input.addEventListener('focus', () => handleExpandableCheckboxListInputFocus(listInput));
    input.addEventListener('blur', () => handleExpandableCheckboxListInputBlur(listInput));
  });
});
