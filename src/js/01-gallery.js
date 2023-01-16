// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

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
  modalImg = basicLightbox.create(
    `<img width="800" height="600" src="${e.target.dataset.source}">`
  );
  modalImg.show();

  galleryDiv.addEventListener('keydown', escPress);
  escPress();
}

function escPress(e) {
  if (e?.code !== 'Escape') return;

  modalImg.close();
  galleryDiv.removeEventListener('keydown', escPress);
}
