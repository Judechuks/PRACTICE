// FormData API - is used to get the data on a form upon submit
//NOTE: when using this, your form must have a name attribute, that will serve as the input property
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  // if empty
  const values = [...formData.values()];
  if (values.includes("")) {
    console.log("Please fill all the fields");
    alert("Please fill all the fields");
    return;
  }

  const formObject = Object.fromEntries(formData);
  console.log(formObject);
  // axios.post(someUrl, formObject);

  // reset
  e.currentTarget.reset();
});
