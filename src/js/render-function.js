import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const galleryEl = document.querySelector('.gallery');
export function createMarkUp(images) {
  const markUp = images
    .map(
      image => `<li class="gallery-item">
  <a class="gallery-link"
    href="${image.largeImageURL}"
    ><img class="img" 
      src="${image.webformatURL}"
      alt="${image.tags}"
  />
  <ul class="img-dscr">
    <li>
      <p><b>Likes</b><br /> ${image.likes}</p>
    </li>
    <li>
      <p><b>Views</b><br /> ${image.views}</p>
    </li>
    <li>
      <p><b>Comments</b><br /> ${image.comments}</p>
    </li>
    <li>
      <p><b>Downloads</b><br /> ${image.downloads}</p>
    </li>
  </ul>
  </a>
</li>

`
    )
    .join('');
  galleryEl.insertAdjacentHTML('beforeend', markUp);
  const lightbox = new SimpleLightbox('.gallery-link', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

// У файлі render-functions.js створи функції для відображення елементів інтерфейсу.
