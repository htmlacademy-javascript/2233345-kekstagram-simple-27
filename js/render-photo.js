import {createOffersMock} from './data.js';

const data = createOffersMock();

function renderPhoto() {
    const template = document.querySelector('#picture').content.querySelector('.picture');
    const fragment = document.createDocumentFragment();

    data.forEach(({url, descriptions, likes, comments}) => {
        const newPhoto = template.cloneNode(true);
        newPhoto.querySelector('.picture__img').src = url;
        newPhoto.querySelector('.picture__img').alt = descriptions;
        newPhoto.querySelector('.picture__comments').textContent = comments;
        newPhoto.querySelector('.picture__likes').textContent = likes;
        fragment.appendChild(newPhoto);
        console.log(newPhoto)
    });

    document.querySelector('.pictures').appendChild(fragment);
};

renderPhoto();

export {renderPhoto};
