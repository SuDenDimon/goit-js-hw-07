const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (textPls) => {

  const textInput = input.value.trim();

  if (textInput === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = textInput;
  }
});
