// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const input = document.querySelector("input");
// input.style = `border: 1px solid #808080;
//               border-radius: 8px;
//               width: 150px;
//               height: 40px;`;
// const buttonCreate = document.querySelector("button[data-create]");
// buttonCreate.style = `border-radius: 8px;
//               border: none;
//               width: 120px;
//               height: 40px;
//               background-color: #4E75FF;
//               font-family: "Montserrat", sans-serif;
//               font-weight: 500;
//               font-size: 16px;
//               line-height: 1.5;
//               letter-spacing: 0.04em;
//               color: #fff;`;
// const buttonDestroy = document.querySelector("button[data-destroy]");
// buttonDestroy.style = `border-radius: 8px;
//               border: none;
//               width: 120px;
//               height: 40px;
//               background-color: #FF4E4E;
//               font-family: "Montserrat", sans-serif;
//               font-weight: 500;
//               font-size: 16px;
//               line-height: 1.5;
//               letter-spacing: 0.04em;
//               color: #fff;`;
// input.addEventListener("input", (event) => {
//   const numberInput = Number(event.currentTarget.value);
//   buttonCreate.addEventListener("click", () => {
//     if (numberInput <= 100 && numberInput >= 1) {
//       boxes.innerHTML = "";
//       let boxsize = 30;
//       for (let i = 0; i < numberInput; i++) {
//         let newDiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
//         boxes.insertAdjacentHTML("beforeend", newDiv);
//         boxsize += 10;
//       }
//     } else {
//       boxes.innerHTML = "";
//     }
//   });
// });
// buttonDestroy.addEventListener("click", () => {
//   boxes.innerHTML = "";
// });

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
  let step = 30;
  for (let index = 1; index <= amount; index += 1) {
    const elem = document.createElement('div');
    elem.style.width = `${step}px`;
    elem.style.height = `${step}px`;
    elem.style.backgroundColor = getRandomHexColor();
    box.appendChild(elem);
    step += 10;
  }
}
  buttonDestroy.addEventListener("click", () => {
    box.innerHTML = "";
   })

  //  buttonCreate.classList.add("style__button__create");

