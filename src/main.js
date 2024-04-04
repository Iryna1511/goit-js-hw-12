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
let queryTrimed;
let currentPage = 1;
let maxPage = 0;
const ppageSize = 15;
let arrImages;

refs.formEl.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

async function onFormSubmit(event) {
  event.preventDefault();
  showLoader();
  galleryEl.innerHTML = '';
  lightbox.refresh();

  queryTrimed = refs.inputEl.value.trim();
  if (queryTrimed === '') {
    hideLoader();
    return iziToast.warning({
      title: 'Caution',
      message: 'Please complete the field!',
      position: 'topRight',
    });
  }
  currentPage = 1;

  try {
    arrImages = await getImages(queryTrimed, currentPage);
    maxPage = Math.ceil(arrImages.totalHits / ppageSize);

    if (arrImages.hits.length === 0) {
      hideLoader();
      checkBtnStatus();
      return iziToast.info({
        title: 'Sorry',
        message:
          'There are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }

    createMarkUp(arrImages.hits);
  } catch (error) {
    console.error('Error fetching images:', error);
  } finally {
    hideLoader();
    checkBtnStatus();
  }

  refs.inputEl.value = '';
}

async function onLoadMore(event) {
  showLoader();
  currentPage += 1;
  try {
    arrImages = await getImages(queryTrimed, currentPage);
    createMarkUp(arrImages.hits);
  } catch (error) {
    console.error('Error fetching images:', error);
  } finally {
    hideLoader();
    checkBtnStatus();
  }
}

function showLoader() {
  refs.loaderEl.classList.add('is-open');
}
function hideLoader() {
  refs.loaderEl.classList.remove('is-open');
}
function showBtnLoad() {
  refs.loadMoreBtn.classList.add('is-open');
}
function hideBtnLoad() {
  refs.loadMoreBtn.classList.remove('is-open');
}
function checkBtnStatus() {
  if (currentPage >= maxPage) {
    hideBtnLoad();
  } else {
    showBtnLoad();
  }
}

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

// У файлі main.js напиши всю логіку роботи додатка.

//  && arrImages.hits.length !== 0
