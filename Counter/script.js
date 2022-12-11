const count = document.querySelector("#count");
const reset = document.querySelector("#reset");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");

increase.addEventListener("click", () => {
  count.innerText = parseInt(count.innerText) + 1;
});
decrease.addEventListener("click", () => {
  if (parseInt(count.innerText) === 0) return;
  count.innerText = parseInt(count.innerText) - 1;
});
reset.addEventListener("click", () => {
  count.innerText = 0;
});
