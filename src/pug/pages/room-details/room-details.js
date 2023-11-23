import './room-details.scss';

const roomDetailsPageFocusedElement = document
  .querySelector('.room-details__container')
  ?.querySelector('.booking-card__check-in-date')
  ?.querySelector('.custom-select__button');

roomDetailsPageFocusedElement?.focus();
