function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const box = document.querySelector("#boxes");

buttonCreate.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (!isNaN(amount) && amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    console.log("Please enter a valid number between 1 and 100.");
  }
});
function createBoxes(amount) {
  box.innerHTML = "";
  let step = 30;
  for (let index = 1; index <= amount; index += 1) {
    const elem = document.createElement("div");
    elem.style.width = `${step}px`;
    elem.style.height = `${step}px`;
    elem.style.backgroundColor = getRandomHexColor();
    box.appendChild(elem);
    step += 10;
  }
}
buttonDestroy.addEventListener("click", () => {
  box.innerHTML = "";
  input.value = "";
});
console.dir(input);