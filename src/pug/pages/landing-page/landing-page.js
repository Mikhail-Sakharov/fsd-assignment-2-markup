import './landing-page.scss';
import '../../ui-kit/includes/main-page-slider/main-page-slider';
import {createSMGDatePicker, CalendarMode, Localization} from 'smg-date-picker';
import 'smg-date-picker/dist/style.css';

const searchFormElement = document.querySelector('.landing-page__search-form');
const anchorElement = document.querySelector('.search-card__dates-wrapper');
const firstOutputElement = anchorElement.querySelector('.search-card__check-in-date').querySelector('.custom-select__text');
const secondOutputElement = anchorElement.querySelector('.search-card__check-out-date').querySelector('.custom-select__text');

if (anchorElement && firstOutputElement && secondOutputElement) {
  createSMGDatePicker({
    anchorElement,
    firstOutputElement,
    secondOutputElement,
    mode: CalendarMode.Range,
    localization: Localization.Ru
  });
}

searchFormElement.addEventListener('submit', (evt) => evt.preventDefault());
