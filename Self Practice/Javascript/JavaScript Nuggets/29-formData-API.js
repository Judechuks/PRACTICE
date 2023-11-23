// FormData API - is used to get the data on a form upon submit
/*
const form = document.querySelector(".form");
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  console.log(
    "Name:",
    nameValue,
    "Email:",
    emailValue,
    "Password:",
    passwordValue
  );

  // clear values
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
});
NOTE: Having many form fields will make the code longer, hence the need for formData API
*/

//formData = new FormData(form)
//NOTE: when using this, your form must have a name attribute, that will serve as the input property
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  // entries(), values(), keys(), set(), get(), append(), delete(), etc

  const values = [...formData.values()];
  console.log(values);
  const keys = [...formData.keys()];
  console.log(keys);

  // iterate over with 'for of' loop
  for (let [name, value] of formData) {
    console.log(`${name} = ${value}`);
  }

  // check for value
  const name = formData.get("name");
  console.log(name);

  // append(key, value)
  formData.append("text", "textValue");

  // delete(key)
  formData.delete("text");

  // has(key)
  const checkName = formData.has("name");
  console.log(checkName);

  // entries
  const entries = [...formData.entries()];
  console.log(entries);
});
