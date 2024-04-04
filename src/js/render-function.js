import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const galleryEl = document.querySelector('.gallery');

function imageTemplate(obj) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = obj;
  return `<li class="gallery-item">
  <a class="gallery-link"
    href="${largeImageURL}"
    ><img class="img" loading="lazy"
      src="${webformatURL}"
      alt="${tags}"
  />
  <ul class="img-dscr">
    <li>
      <p><b>Likes</b><br /> ${likes}</p>
    </li>
    <li>
      <p><b>Views</b><br /> ${views}</p>
    </li>
    <li>
      <p><b>Comments</b><br /> ${comments}</p>
    </li>
    <li>
      <p><b>Downloads</b><br /> ${downloads}</p>
    </li>
  </ul>
  </a>
</li>

`;
}
function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}

export function createMarkUp(arr) {
  const markup = imagesTemplate(arr);
  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

// У файлі render-functions.js створи функції для відображення елементів інтерфейсу.
