const aboutUsPageNavigationButton = document.querySelectorAll(
  "#about .container .content ul li a"
);
const aboutUsPageNavigationText = document.querySelector(
  "#about .container .content .text"
);

const contactInput = document.querySelectorAll(
  "#contact form .user-data input"
);
const contactTextarea = document.querySelector(
  "#contact form .user-data textarea"
);
const text = [
  `History is the study of change over time, and it covers all aspects of human society. Political, social, economic, scientific, technological, medical, cultural, intellectual, religious and military developments are all part of history.`,

  `A vision is a way to answer your own “why” of life. It gives you the reason for your actions, choices, hopes, and desires. This fills your daily activities with meaning and purpose.`,

  `Life goals are all the things you want to accomplish in your life. Often your life goals are very meaningful to you and can make a lasting impact on your life. They can be large and challenging goals, or they can be smaller and more personal. It all depends on what you want to achieve.`,
];

window.addEventListener("DOMContentLoaded", () => {
  aboutUsPageNavigationText.innerText = text[0];
});

aboutUsPageNavigationButton.forEach((button, i) => {
  button.addEventListener("click", () => {
    // removing all the active class from the aboutUsPageNavigationButton and then add active class to the clicked aboutUsPageNavigationButton
    for (let i = 0; i < aboutUsPageNavigationButton.length; i++) {
      aboutUsPageNavigationButton[i].parentElement.classList.remove("active");
    }

    button.parentElement.classList.add("active");
    aboutUsPageNavigationText.innerText = text[i];
  });
});

contactInput.forEach((input) => {
  input.addEventListener("keyup", () => {
    input.value !== 0
      ? input.classList.add("active")
      : input.classList.remove("active");
  });
});
contactTextarea.addEventListener("keyup", () => {
  contactTextarea.value !== 0
    ? contactTextarea.classList.add("active")
    : contactTextarea.classList.remove("active");
});
