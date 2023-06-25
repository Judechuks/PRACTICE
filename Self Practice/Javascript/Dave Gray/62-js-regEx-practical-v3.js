// Regular Expression (regEx)
// encodedURI = transform a text as a url, replacing 'white space' as '%20'
// useful when you are working with API that has to do with url

document.getElementById("textForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("textEntry");
  const regex = / {2,}/g;
  // replace every '2 or more spaces with one spaces' from the input
  const newText = input.value.replaceAll(regex, " ").trim();
  // trim() removes the white space from beginning and end
  console.log(newText);
  const encodedInputText = encodeURI(input.value); // text with multiple spaces
  const encodedCleanText = encodeURI(newText); // encoded url
  console.log(encodedInputText);
  console.log(encodedCleanText);
});