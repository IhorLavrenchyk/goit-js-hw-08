// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryList = item =>
  item.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `
<div class="gallery__item">
  <a class="gallery__link" rel="nofollow, noopener, noreferrer" download="" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`,
    ''
  );

const galleryDiv = document.querySelector('.gallery');
galleryDiv.insertAdjacentHTML('beforeend', galleryList(galleryItems));

galleryDiv.addEventListener('click', ImgClick);

let modalImg;

function ImgClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) return;
  modalImg = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  }).show();

  galleryDiv.addEventListener('keydown', escPress);
  escPress();
}

function escPress(e) {
  if (e?.code !== 'Escape') return;

  modalImg.close();
  galleryDiv.removeEventListener('keydown', escPress);
}
