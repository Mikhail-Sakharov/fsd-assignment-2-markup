import './landing-page.scss';
import '../../ui-kit/includes/main-page-slider/main-page-slider';
import {CalendarMode, Localization, SMGDatePicker} from 'smg-date-picker';
import 'smg-date-picker/dist/style.css';

const searchFormElement = document.querySelector('.landing-page__search-form');
const anchorElement = document.querySelector('.search-card__dates-wrapper');
const focusedCustomSelectElement = searchFormElement?.querySelector('.custom-select__button');
const firstOutputElement = anchorElement?.querySelector('.search-card__check-in-date').querySelector('.custom-select__text');
const secondOutputElement = anchorElement?.querySelector('.search-card__check-out-date').querySelector('.custom-select__text');

focusedCustomSelectElement?.focus();

if (anchorElement && firstOutputElement && secondOutputElement) {
  const datePicker = new SMGDatePicker({
    anchorElement: anchorElement,
    firstOutputElement: firstOutputElement,
    secondOutputElement: secondOutputElement,
    mode: CalendarMode.Range,
    localization: Localization.Ru
  });

  datePicker.create();
}

searchFormElement?.addEventListener('submit', (evt) => evt.preventDefault());
