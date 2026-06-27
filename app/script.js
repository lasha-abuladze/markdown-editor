`use strict`;


const sectionPreview = document.querySelector(`.section--preview`);
const btnHideShow = document.querySelector(`.btn--hide-show`);
const iconHideShow = document.querySelectorAll(`.icon--hide-show`);
const btnsMenu = document.querySelectorAll(`.btn--menu`);
const mainSection = document.querySelector(`.main`);
const btnThemeSwitcher = document.querySelector(`.theme-switcher`);
const circleThemeSwitcher = document.querySelector(`.theme-switcher--circle`);
const IconsThemeSwitcher = document.querySelectorAll(`.icon--theme-switcher`);

const markdownContainer = document.querySelector(`.section--markdown`);


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


// let counter = 0;


const markdown = document.querySelector(`.markdown`);
markdown.focus();

const handleMarkdown = function(markdown) {

    markdown.addEventListener(`keydown`, (e) => {

        if(e.key === `Enter`) {
            e.preventDefault();

            // counter++;

            
            const markup = `
                <textarea class="markdown"></textarea>
            `
            markdownContainer.insertAdjacentHTML(`beforeend`, markup);
            const arrmarkdowns = Array.from(document.querySelectorAll(`.markdown`));
            arrmarkdowns.at(-1).focus();
                
            if(arrmarkdowns.at(-2)) {
                console.log(arrmarkdowns.at(-2).value.split(`\n`).slice(0, -1))
            };

            handleMarkdown(arrmarkdowns.at(-1));
            
        }

        // if(e.key !== `Enter`) {
        //     // counter = 0;
        //     // console.log(counter)
        // }
    })

    markdown.addEventListener(`input`, (e) => {
        markdown.style.height = 'auto';
        markdown.style.height = markdown.scrollHeight + 'px';
        markdown.style.overflow = 'hidden';
    })
}



// const xx = function(markdown) {

//     markdown.addEventListener(`keydown`, (e) => {

//         if(e.key === `Enter`) {
//             e.preventDefault();
//             const markup = `
//                 <textarea class="markdown"></textarea>
//             `
//             markdownContainer.insertAdjacentHTML(`beforeend`, markup);

//             const arrmarkdowns = Array.from(document.querySelectorAll(`.markdown`));
//             // console.log(arrmarkdowns)
//             arrmarkdowns.at(-1).focus();
//             // arrmarkdowns.at(-1).value = `1`
//             console.log(markdown.value.startsWith(`##`))
       


//             xx(arrmarkdowns.at(-1));
//         }

//     })

    // markdown.addEventListener(`input`, (e) => {
    //     // markdown.style.height = 'auto';
    //     markdown.style.height = markdown.scrollHeight + 'px';
    // })
// }


handleMarkdown(markdown);
