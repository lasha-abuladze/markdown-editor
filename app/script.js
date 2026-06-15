`use strict`;


const sectionPreview = document.querySelector(`.section--preview`);
const btnHideShow = document.querySelector(`.btn--hide-show`);
const iconHideShow = document.querySelectorAll(`.icon--hide-show`);
const btnsMenu = document.querySelectorAll(`.btn--menu`);
const mainSection = document.querySelector(`.main`);
const btnThemeSwitcher = document.querySelector(`.theme-switcher`);
const circleThemeSwitcher = document.querySelector(`.theme-switcher--circle`);
const IconsThemeSwitcher = document.querySelectorAll(`.icon--theme-switcher`);


btnHideShow.addEventListener(`click`, () => {
    sectionPreview.classList.toggle(`display-block`);
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




let counter = 0;
let textArr = [];
let xx = ``;


const markdown = document.querySelector(`.markdown`);
// console.log(markdown)

markdown.addEventListener(`keydown`, (e) => {
    // console.log(markdown.textContent);

    if(e.key === `Enter` && counter <2) {
        counter++;
        // console.log(counter);
        textArr = markdown.value.split(`\n`);
        xx = textArr;
        console.log(xx)
    }

    if(e.key === `Enter` && counter === 2) {
        counter = 0;
        textArr = markdown.value.split(`\n`);
        // console.log(textArr)
        textArr.forEach((el, i) => {
            if(el === ``) {
                console.log(i)
                textArr.splice(i, 1);
                xx = textArr;
                // xx = textArr.join(` `);
                console.log(xx);
                // xx.forEach(el => console.log(el));
                console.log(xx[0])
            }
        })
    }

    if(e.key !== `Enter`) {
        counter = 0;
    }

    // console.log(e.key);

})