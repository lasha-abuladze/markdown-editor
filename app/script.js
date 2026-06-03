`use strict`;


const sectionPreview = document.querySelector(`.section--preview`);
const btnHideShow = document.querySelector(`.btn--hide-show`);
const iconHideShow = document.querySelectorAll(`.icon--hide-show`);
const btnsMenu = document.querySelectorAll(`.btn--menu`);
const mainSection = document.querySelector(`.main`);
const btnThemeSwitcher = document.querySelector(`.theme-switcher`);
const circleThemeSwitcher = document.querySelector(`.theme-switcher--circle`);
const IconsThemeSwitcher = document.querySelectorAll(`.icon--theme-switcher`);
// const iconsHideShow = document.querySelectorAll(`.icon--hide-show`);


sectionPreview.classList.add(`display-none`);


btnHideShow.addEventListener(`click`, () => {
    sectionPreview.classList.toggle(`display-none`);
    iconHideShow.forEach(icon => icon.classList.toggle(`display-none`));
})


document.addEventListener(`click`, (e) => {
    if(e.target.closest(`.btn--menu`)) {
        btnsMenu.forEach(btn => btn.classList.toggle(`display-none`));
        mainSection.classList.toggle(`main--show-asid`);
    }
})


btnThemeSwitcher.addEventListener(`click`, () => {
    mainSection.classList.toggle(`main--dark`);
    IconsThemeSwitcher.forEach(icon => icon.classList.toggle(`icon--theme-switcher-light`));
    circleThemeSwitcher.classList.toggle(`theme-switcher--circle-dark`);
})