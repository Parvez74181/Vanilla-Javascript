const dropDownIcon = document.querySelectorAll("main .container span");
const dropDownContent = document.querySelectorAll("main .details");

dropDownIcon.forEach((item, i) => {
  item.addEventListener("click", () => {
    dropDownContent[i].classList.toggle("active");
  });
});
