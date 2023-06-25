// Regular Expression (regEx)

document.getElementById("textForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("textEntry");
  // console.log(input.value);
  const regex = / {2,}/g;
  // replace every '2 or more spaces with one spaces' from the input
  const newText = input.value.replaceAll(regex, " ").trim();
  // trim() removes the white space from beginning and end
  console.log(newText);
});