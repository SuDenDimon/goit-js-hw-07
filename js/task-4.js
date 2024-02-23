const submitForm = document.querySelector(".login-form");

submitForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  console.dir(formElements);

  if (mail === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      mail,
      password,
    };

    console.log(formData);
  }
  event.currentTarget.reset();
});
