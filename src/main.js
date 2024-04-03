import './js/pixabay-api.js';
import { getImages } from './js/pixabay-api.js';
import './js/render-function.js';
import { createMarkUp, galleryEl } from './js/render-function.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  formEl: document.querySelector('.form'),
  inputEl: document.querySelector('input'),
  loaderEl: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-btn'),
};

refs.formEl.addEventListener('submit', async event => {
  event.preventDefault();
  refs.loaderEl.classList.add('is-open');
  galleryEl.innerHTML = '';
  lightbox.refresh();

  const queryTrimed = refs.inputEl.value.trim();
  if (queryTrimed === '') {
    refs.loaderEl.classList.remove('is-open');
    return iziToast.warning({
      title: 'Caution',
      message: 'Please complete the field!',
      position: 'topRight',
    });
  }

  let arrImages;
  try {
    arrImages = await getImages(queryTrimed, 1);

    if (arrImages.hits.length === 0) {
      refs.loaderEl.classList.remove('is-open');
      return iziToast.info({
        title: 'Sorry',
        message:
          'There are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }

    createMarkUp(arrImages.hits);
  } catch {
    error => {
      console.error('Error fetching images:', error);
    };
  } finally {
    refs.loaderEl.classList.remove('is-open');

    if (
      arrImages.totalHits >= arrImages.hits.length &&
      arrImages.hits.length !== 0
    ) {
      refs.loadMoreBtn.classList.add('is-open');
    }
  }

  // todo
  refs.loadMoreBtn.addEventListener('submit', async e => {
    const arrImages = await getImages(queryTrimed, 2);
    createMarkUp(arrImages.hits);
  });

  refs.inputEl.value = '';
});

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

// У файлі main.js напиши всю логіку роботи додатка.
