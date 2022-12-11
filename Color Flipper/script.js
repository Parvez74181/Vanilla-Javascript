const container = document.querySelector(".container");
const input = document.querySelector("#generated-color-code");
const button = document.querySelector("button");

const hexCode = () => {
  const hex = 0xffffff;
  return (randomColor = Math.floor((Math.random() * hex) << 0).toString(16));
};

button.addEventListener("click", () => {
  let rgb = hexCode();
  container.style.background = `#${rgb}`;
  input.value = `#${rgb}`;
});
