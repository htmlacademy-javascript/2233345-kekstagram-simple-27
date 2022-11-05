import {getRandomPositiveNumber} from './util.js';

const createOffersMock = () => {
  const descriptions = [
    'Описание 1',
    'Описание 2',
    'Описание 3',
    'Описание 4',
    'Описание 5',
    'Описание 6',
    'Описание 7',
    'Описание 8',
    'Описание 9',
    'Описание 10',
    'Описание 11',
    'Описание 12',
    'Описание 13',
    'Описание 14',
    'Описание 15',
    'Описание 16',
    'Описание 17',
    'Описание 18',
    'Описание 19',
    'Описание 20',
    'Описание 21',
    'Описание 22',
    'Описание 23',
    'Описание 24',
    'Описание 25',
  ];

  const likes = {
    min: 15,
    max: 200
  };

  const comments = {
    min: 0,
    max: 200
  };

  const arrayElement = [];


  for (let i = 0; i < 25; i++) {
    const obj = {
      id: i,
      url: `photos/${i}.jpg`,
      descriptions: descriptions[getRandomPositiveNumber(0, descriptions.length)],
      likes: getRandomPositiveNumber(likes.min, likes.max),
      comments: getRandomPositiveNumber(comments.min, comments.max)
    };
    arrayElement[i] = obj;
  }
  return arrayElement;
};

createOffersMock();

export {
  createOffersMock
};
