import { getDescriptionArray } from './generate-mock-data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');
const similarPhotos = getDescriptionArray();

function printPhotos() {
  const photosListFragment = document.createDocumentFragment();

  similarPhotos.forEach(({ url, likes, comments }) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments;
    photosListFragment.append(photoElement);
  });

  pictureContainer.append(photosListFragment);
}

export { printPhotos };