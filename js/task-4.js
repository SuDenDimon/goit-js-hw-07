const submitForm = document.querySelector(".login-form");

submitForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value.trim();
  const password = formElements.password.value.trim();
  console.dir(formElements);

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email,
      password,
    };
    event.currentTarget.reset();
    console.log(formData);
  }
});
