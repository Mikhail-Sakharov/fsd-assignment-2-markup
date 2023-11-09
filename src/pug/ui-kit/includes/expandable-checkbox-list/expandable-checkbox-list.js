import './expandable-checkbox-list.scss';

const expandableCheckboxLists = document.querySelectorAll('.expandable-checkbox-list');

const handleExpandableCheckboxListInputFocus = (showHideListInput) => {
  showHideListInput.checked = true;
};

expandableCheckboxLists.forEach((list) => {
  const showHideListInput = list.querySelector('.expandable-checkbox-list__input');
  const checkboxInputs = list.querySelectorAll('.custom-checkbox__input');

  checkboxInputs.forEach((input) => {
    input.addEventListener('focus', () => handleExpandableCheckboxListInputFocus(showHideListInput));
  });
});
