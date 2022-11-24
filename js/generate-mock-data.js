import { getRandomElement, getRandomPositiveInteger } from './util.js';

const DESCRIPTIONS = [
  'Кот',
  'Собака',
  'Пират',
  'Дельфин',
  'Ящерица',
  'Слон',
  'Торт',
  'Сигарета',
  'Тело',
  'Бумага',
  'Ручка',
  'Карандаш',
  'Монитор',
  'Клавиатура',
  'Мышь',
  'Геральт',
  'Цири',
  'Очки',
  'Шарф',
  'Куртка',
  'Перчатки',
  'Башня',
  'Работа',
  'Ozon',
  'Аналитик',
];

const ANY_COUNTS = {
  LIKES: {
    MIN_LIKES: 15,
    MAX_LIKES: 200
  },
  COMMENTS: {
    MIN_COUNT: 0,
    MAX_COUNT: 200
  }
};

const SIMILAR_DESCRIPTION_COUNT = 25;

function getPhotoDescription(index) {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(ANY_COUNTS.LIKES.MIN_LIKES, ANY_COUNTS.LIKES.MAX_LIKES),
    comments: getRandomPositiveInteger(ANY_COUNTS.COMMENTS.MIN_COUNT, ANY_COUNTS.COMMENTS.MAX_COUNT)
  };
}

function getDescriptionArray() {
  return Array.from({ length: SIMILAR_DESCRIPTION_COUNT },
    (_, indexArr) => getPhotoDescription(indexArr + 1));
}
// window.getDescriptionArray = getDescriptionArray; - для вызова из консоли

export { getDescriptionArray };
