`use strict`;


const sectionPreview = document.querySelector(`.section--preview`);
const btnHideShow = document.querySelector(`.btn--hide-show`);
const iconHideShow = document.querySelectorAll(`.icon--hide-show`);

sectionPreview.classList.add(`display-none`);
btnHideShow.addEventListener(`click`, () => {
    sectionPreview.classList.toggle(`display-none`);
    iconHideShow.forEach(icon => icon.classList.toggle(`display-none`));
})