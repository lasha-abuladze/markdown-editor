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

let counter = 0;

btnHideShow.addEventListener(`click`, () => {
  sectionPreview.classList.toggle(`display-block`);
  iconHideShow.forEach((icon) => icon.classList.toggle(`display-none`));
});

document.addEventListener(`click`, (e) => {
  if (e.target.closest(`.btn--menu`)) {
    btnsMenu.forEach((btn) => btn.classList.toggle(`display-none`));
    mainSection.classList.toggle(`main--show-asid`);
  }
});

btnThemeSwitcher.addEventListener(`click`, () => {
  mainSection.classList.toggle(`main--dark`);
  IconsThemeSwitcher.forEach((icon) =>
    icon.classList.toggle(`icon--theme-switcher-light`),
  );
  circleThemeSwitcher.classList.toggle(`theme-switcher--circle-dark`);
});

let markdown = document.querySelector(`.markdown-0`);
markdown.focus();

const createHeading = function (h, arrmarkdowns) {
  const textContent = arrmarkdowns.at(-2).value.split(` `).slice(1).join(` `);
  const markup = `
        <h${h} class="preview-h${h}">${textContent}</h${h}>
    `;
  sectionPreview.insertAdjacentHTML(`beforeend`, markup);
};

const xxx = function () {
  counter++;

  const textareaHTML = `
        <textarea class="markdown markdown-${counter}"></textarea>
    `;
  markdown.insertAdjacentHTML(`afterend`, textareaHTML);
  const arrmarkdowns = Array.from(document.querySelectorAll(`.markdown`));
  arrmarkdowns.forEach((el) => {
    if (el.classList.contains(`markdown-${counter}`)) {
      el.focus();
    }
  });

  markdown = document.querySelector(`.markdown-${counter}`);
  handleMarkdown(markdown);
};

const handleMarkdown = function (markdown) {
  markdown.addEventListener(`keydown`, (e) => {
    if (e.key === `Enter`) {
      e.preventDefault();

      xxx();

      //   counter++;

      //   const textareaHTML = `
      //               <textarea class="markdown markdown-${counter}"></textarea>
      //           `;
      //   markdown.insertAdjacentHTML(`afterend`, textareaHTML);
      //   const arrmarkdowns = Array.from(document.querySelectorAll(`.markdown`));
      //   arrmarkdowns.forEach((el) => {
      //     if (el.classList.contains(`markdown-${counter}`)) {
      //       el.focus();
      //     }
      //   });

      //   markdown = document.querySelector(`.markdown-${counter}`);
      //   handleMarkdown(markdown);

      //   if (arrmarkdowns.at(-2).value.startsWith(`# `)) {
      //     createHeading(1, arrmarkdowns);
      //   } else if (arrmarkdowns.at(-2).value.startsWith(`## `)) {
      //     createHeading(2, arrmarkdowns);
      //   } else if (arrmarkdowns.at(-2).value.startsWith(`### `)) {
      //     createHeading(3, arrmarkdowns);
      //   } else if (arrmarkdowns.at(-2).value.startsWith(`#### `)) {
      //     createHeading(4, arrmarkdowns);
      //   } else if (arrmarkdowns.at(-2).value.startsWith(`##### `)) {
      //     createHeading(5, arrmarkdowns);
      //   } else if (arrmarkdowns.at(-2).value.startsWith(`###### `)) {
      //     createHeading(6, arrmarkdowns);
      //   } else if (arrmarkdowns.at(-2).value.startsWith(`- `)) {
      //     console.log(`hi`);
      //     const textContent = arrmarkdowns
      //       .at(-2)
      //       .value.split(` `)
      //       .slice(1)
      //       .join(` `);
      //     const markup = `
      //                 <p class="list-p">
      //                     <span class="red-dot"></span>
      //                     ${textContent}
      //                 </p>
      //             `;
      //     sectionPreview.insertAdjacentHTML(`beforeend`, markup);
      //   } else if (arrmarkdowns.at(-2).value.startsWith(`> `)) {
      //     const textContent = arrmarkdowns
      //       .at(-2)
      //       .value.split(` `)
      //       .slice(1)
      //       .join(` `);
      //     const markup = `
      //                 <div class="blockquote-div">
      //                     <p class="blockquote-p">${textContent}</p>
      //                 </div>
      //             `;
      //     sectionPreview.insertAdjacentHTML(`beforeend`, markup);
      //   } else {
      //     const textContent = arrmarkdowns.at(-2).value;
      //     const markup = `
      //                 <p class="preview-p">${textContent}</p>
      //             `;
      //     sectionPreview.insertAdjacentHTML(`beforeend`, markup);
      //   }

      //   handleMarkdown(arrmarkdowns.at(-1));
    }
  });

  markdown.addEventListener(`input`, (e) => {
    // markdown.style.height = 'auto';
    markdown.style.height = markdown.scrollHeight + "px";
    markdown.style.overflow = "hidden";
  });
};

markdownContainer.addEventListener(`click`, (e) => {
  if (e.target.classList.contains(`markdown`)) {
    markdown = e.target;
  }
});

handleMarkdown(markdown);
