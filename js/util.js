function getRandomPositiveNumber(min, max) {
    if ((typeof min) === 'number' && (typeof max) === 'number'){
      if (min !== Infinity && max !== Infinity) {
        if (!isNaN(min) && !isNaN(max)) {
          if (min >= 0 && max >= 0) {
            if ((max - min) >= 1) {
              min = Math.ceil(min);
              max = Math.floor(max);
              const rand = min - 0.5 + Math.random() * (max - min + 1);
              return Math.round(rand);
            }
          }
        }
      }
    }
    return NaN;
  }

getRandomPositiveNumber(1, 5);

function isAcceptableLength(line, maxLength) {
  return line.length <= maxLength;
}

isAcceptableLength('adjkla', 7);

export {getRandomPositiveNumber, isAcceptableLength};