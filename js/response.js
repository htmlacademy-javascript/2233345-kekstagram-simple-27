import { isEscapeKey } from './util.js';
import { onPopupEscKeydown } from './image-upload-form.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

function showSuccessTemplate() {
  const successFragment = document.createDocumentFragment();
  const successElement = successTemplate.cloneNode(true);
  successFragment.append(successElement);
  document.body.append(successFragment);
  const closeButton = successElement.querySelector('.success__button');
  closeButton.addEventListener('click', () => {
    successElement.remove();
    document.removeEventListener('keydown', onSuccessEscKeydown);
  });

  document.addEventListener('keydown', onSuccessEscKeydown, { once: true });

  successElement.addEventListener('click', (evt) => {
    if (evt.target.className === 'success' && evt.currentTarget.className === 'success') {
      successElement.remove();
    }
  });

  function onSuccessEscKeydown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successElement.remove();
    }
  }
}

function showErrorTemplate() {
  const errorFragment = document.createDocumentFragment();
  const errorElement = errorTemplate.cloneNode(true);

  errorFragment.append(errorElement);
  document.body.append(errorFragment);
  const closeButton = errorElement.querySelector('.error__button');
  closeButton.addEventListener('click', () => {
    errorElement.remove();
    document.removeEventListener('keydown', onErrorEscKeydown);
  });

  const onClickErrorPromise = new Promise((resolve) => {
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        errorElement.remove();
        resolve();
      }
    }, { once: true });
  });
  onClickErrorPromise
    .then(() => document.addEventListener('keydown', onPopupEscKeydown));

  errorElement.addEventListener('click', (evt) => {
    if (evt.target.className === 'error' && evt.currentTarget.className === 'error') {
      errorElement.remove();
    }
  });

  function onErrorEscKeydown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorElement.remove();
    }
  }
}

export { showSuccessTemplate, showErrorTemplate };
