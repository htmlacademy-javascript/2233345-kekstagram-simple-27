// isNaN() - функция, определяющая не число. Отдает булевый признак
const ALERT_SHOW_TIME = 1000 * 5;

function getRandomPositiveInteger(a, b) {

  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomElement(elements) {
  if (elements.length === 0) {
    return undefined;
  }
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { getRandomElement, getRandomPositiveInteger, isEscapeKey, showAlert };
