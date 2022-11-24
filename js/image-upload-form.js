import { isEscapeKey } from './util.js';

const imageForm = document.querySelector('.img-upload__form');
const imgUploadInput = imageForm.querySelector('#upload-file');
const imageEditingForm = imageForm.querySelector('.img-upload__overlay');
const closeEditorFormButton = imageForm.querySelector('#upload-cancel');
const decreaseButton = imageEditingForm.querySelector('.scale__control.scale__control--smaller');
const increaseButton = imageEditingForm.querySelector('.scale__control.scale__control--bigger');
const scaleField = imageEditingForm.querySelector('.scale__control.scale__control--value');
const imageScale = imageEditingForm.querySelector('[data-preview-image="image"]');
const pictureEffectButtons = imageEditingForm.querySelectorAll('.effects__radio');
const textArea = imageEditingForm.querySelector('.text__description');

const DefaultValues = {
  NOTATION: 10,
  SCALE_VALUE: 100
};

function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeImageEditingForm();
  }
}

function openImageEditingForm() {
  imageEditingForm.classList.remove('hidden');
  imageScale.className = '';
  document.querySelector('body').classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeImageEditingForm() {
  imageEditingForm.classList.add('hidden');
  imageScale.className = '';
  imgUploadInput.value = '';
  pictureEffectButtons[0].checked = true;
  textArea.value = '';
  document.querySelector('body').classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);
}

imgUploadInput.addEventListener('change', openImageEditingForm);

closeEditorFormButton.addEventListener('click', closeImageEditingForm);

closeEditorFormButton.addEventListener('keydown', onPopupEscKeydown);

decreaseButton.addEventListener('click', () => {
  const currentScale = Number.parseInt(scaleField.value, DefaultValues.NOTATION);
  const minValue = Number.parseInt(scaleField.min, DefaultValues.NOTATION);
  const stepValue = Number.parseInt(scaleField.step, DefaultValues.NOTATION);
  if (!Number.isNaN(currentScale) && !Number.isNaN(minValue) && !Number.isNaN(stepValue)) {
    if (currentScale > minValue) {
      const newScale = currentScale - stepValue;
      scaleField.value = `${newScale}%`;
      imageScale.style.transform = `scale(${newScale / DefaultValues.SCALE_VALUE})`;
    }
  } else {
    throw new Error('NaN - число в разметке не найдено');
  }
});

increaseButton.addEventListener('click', () => {
  const currentScale = Number.parseInt(scaleField.value, DefaultValues.NOTATION);
  const maxValue = Number.parseInt(scaleField.max, DefaultValues.NOTATION);
  const stepValue = Number.parseInt(scaleField.step, DefaultValues.NOTATION);
  if (!Number.isNaN(currentScale) && !Number.isNaN(maxValue) && !Number.isNaN(stepValue)) {
    if (currentScale < maxValue) {
      const newScale = currentScale + stepValue;
      scaleField.value = `${newScale}%`;
      imageScale.style.transform = `scale(${newScale / DefaultValues.SCALE_VALUE})`;
    }
  } else {
    throw new Error('NaN - число в разметке не найдено');
  }
});

pictureEffectButtons.forEach((radio) => {
  radio.addEventListener('change', () => {
    const elementId = radio.id;
    const classEffect = imageEditingForm.querySelector(`[for=${elementId}]`).querySelector('.effects__preview');
    imageScale.className = '';
    imageScale.classList.add(`${classEffect.classList[1]}`);
  });
});
