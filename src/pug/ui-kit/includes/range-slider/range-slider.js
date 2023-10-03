import noUiSlider from 'nouislider';

const sliderContainerELement = document.querySelector('.range-slider__slider');

if (sliderContainerELement) {
  noUiSlider.create(sliderContainerELement, {
    start: [33, 66],
    connect: true,
    range: {
      'min': 0,
      'max': 100
    }
  });
}
