import './js/pixabay-api.js';
import { getImages } from './js/pixabay-api.js';
import './js/render-function.js';
import { createMarkUp, galleryEl } from './js/render-function.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
let dataImages;

refs.formEl.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

async function onFormSubmit(event) {
  event.preventDefault();
  showLoader();
  galleryEl.innerHTML = '';

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
    dataImages = await getImages(queryTrimed, currentPage);
    maxPage = Math.ceil(dataImages.totalHits / ppageSize);

    if (dataImages.hits.length === 0) {
      hideLoader();
      hideBtnLoad();
      return iziToast.info({
        title: 'Sorry',
        message:
          'There are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }

    createMarkUp(dataImages.hits);
  } catch (error) {
    console.error('Error fetching images:', error);
  } finally {
    hideLoader();
  }
  checkBtnStatus();
  refs.inputEl.value = '';
}

async function onLoadMore(event) {
  showLoader();
  currentPage += 1;

  try {
    dataImages = await getImages(queryTrimed, currentPage);
    createMarkUp(dataImages.hits);
  } catch (error) {
    console.error('Error fetching images:', error);
  } finally {
    hideLoader();
    checkBtnStatus();
    scrollGallery();
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
    return iziToast.info({
      title: 'Sorry',
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  } else {
    showBtnLoad();
  }
}

function scrollGallery() {
  const countCards = 2;
  const height =
    galleryEl.firstElementChild.getBoundingClientRect().height * countCards;

  scrollBy({
    top: height,
    behavior: 'smooth',
  });
}

// У файлі main.js напиши всю логіку роботи додатка.
