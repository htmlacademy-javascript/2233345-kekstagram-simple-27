// window.getDescriptionArray() - для вызова из консоли
import { printPhotos } from './print-photo.js';
import './image-upload-form.js';
import './slider-element.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { handleSubmit } from './image-upload-form.js';
import { closeImageEditingForm } from './image-upload-form.js';

getData(printPhotos, showAlert);

handleSubmit(closeImageEditingForm);
