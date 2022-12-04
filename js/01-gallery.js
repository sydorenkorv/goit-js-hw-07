import { galleryItems } from './gallery-items.js';


// Change code below this line


const galleryContainer = document.querySelector('.gallery');


const cardsMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);




function createGalleryMarkup(galleryItems) {

   return galleryItems.map(({ preview, original, description }) => {
     return `
    <li class="gallery__item">
   <a
     class="gallery__link"
     href="${original}"
   >
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
   </a>
 </li>
     `;
   })
     .join('');
}
 
galleryContainer.addEventListener("click", onOpenModal);

function onOpenModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }

const imgOriginal = event.target.dataset.source;
    const imgAlt = event.target.alt;

const instance = basicLightbox.create(`
    <img src="${imgOriginal}" alt=${imgAlt}>
`)

    instance.show()
    
    window.addEventListener('keydown', onEscapeClick);
function onEscapeClick(event) {
        if (event.code == 'Escape') {
            instance.close();
            window.removeEventListener('keydown', onEscapeClick);
        }
    }

}

