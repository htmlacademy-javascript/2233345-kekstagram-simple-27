// 2.18

function getRandomPositiveNumber(min, max) {
  if ((typeof min) === 'number' && (typeof max) === 'number'){
    if (min != Infinity && max != Infinity) {
      if (min != NaN && max != NaN) {
        if (min >= 0 && max >= 0) {
          if ((max - min) >= 1) {
            min = Math.ceil(min);
            max = Math.floor(max);
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(rand);
          }
        }
      }
    }
  }
  return NaN
};

console.log(getRandomPositiveNumber(1, 5));
