const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const formElement = document.querySelector('.img-upload__form');
const imageEffect = formElement.querySelector('[data-preview-image="image"]');
const noneEffect = formElement.querySelector('#effect-none');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 1,
  step: 1,
  connect: 'lower',
});

function hideSlider() {
  sliderElement.classList.add('hidden');
  imageEffect.style.filter = '';
}

function showSlider() {
  sliderElement.classList.remove('hidden');
}

if (noneEffect.checked) {
  hideSlider();
}

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

formElement.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    if (evt.target.value === 'none') {
      hideSlider();
    } else if (evt.target.value === 'chrome') {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      showSlider();
      sliderElement.noUiSlider.on('update', () => {
        imageEffect.style.filter = `grayscale(${sliderElement.noUiSlider.get()})`;
      });
    } else if (evt.target.value === 'sepia') {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      showSlider();
      sliderElement.noUiSlider.on('update', () => {
        imageEffect.style.filter = `sepia(${sliderElement.noUiSlider.get()})`;
      });
    } else if (evt.target.value === 'marvin') {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });
      showSlider();
      sliderElement.noUiSlider.on('update', () => {
        imageEffect.style.filter = `invert(${sliderElement.noUiSlider.get()}%)`;
      });
    } else if (evt.target.value === 'phobos') {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
      showSlider();
      sliderElement.noUiSlider.on('update', () => {
        imageEffect.style.filter = `blur(${sliderElement.noUiSlider.get()}px)`;
      });
    } else if (evt.target.value === 'heat') {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
      showSlider();
      sliderElement.noUiSlider.on('update', () => {
        imageEffect.style.filter = `brightness(${sliderElement.noUiSlider.get()})`;
      });
    }
  }
});

export {sliderElement};
