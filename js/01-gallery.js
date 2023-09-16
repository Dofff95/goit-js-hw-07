import { galleryItems } from "./gallery-items.js";
// Change code below this line
let galleryList = document.querySelector(".gallery");

galleryList.insertAdjacentHTML("beforeend", createMurkup(galleryItems));
function createMurkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
        <li class="gallery__item">
        <img src="${preview}" alt="${description}" class="gallery__image" data-source="${original}"/>
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

const instance = basicLightbox.create(
  ` <img src="" width="1280" height="auto">  `,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", escKeyPress);
    },
  }
);

function escKeyPress(evt) {
  if (evt.code !== "Escape") return;
  instance.close();
}

galleryList.addEventListener("click", fullImgClick);
function fullImgClick(evt) {
  evt.preventDefault();
  const datasetSource = evt.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector("img").src = datasetSource;
  instance.show();
}
