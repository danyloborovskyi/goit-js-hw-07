function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const currentColor = document.querySelector(".color");
const wrapper = document.querySelector(".widget");

button.addEventListener("click", () => {
  currentColor.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
});

body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.flexDirection = "column";
body.style.height = "50vw";

wrapper.style.display = "flex";
// wrapper.style.justifyContent = "center";
wrapper.style.alignItems = "center";
wrapper.style.flexDirection = "column";

button.style.backgroundColor = "#4E75FF";
button.style.width = "148px";
button.style.height = "40px";







