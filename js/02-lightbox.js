import { galleryItems } from "./gallery-items.js";
// Change code below this line

let galleryList = document.querySelector(".gallery");

galleryList.insertAdjacentHTML("beforeend", createMurkup(galleryItems));
function createMurkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img src="${preview}" alt="${description}" class="gallery__image"/>
        </a>
         </li>`
    )
    .join("");
}

galleryList.addEventListener("click", selectImg);
function selectImg(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
