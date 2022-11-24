// isNaN() - функция, определяющая не число. Отдает булевый признак
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

export {
  getRandomElement,
  getRandomPositiveInteger,
  isEscapeKey
};
