
const firstText = document.getElementById("firstText");
const lastText = document.getElementById("lastText");
const submitBtn = document.getElementById("submitBtn");
const cookieBtn = document.getElementById("cookieBtn");

submitBtn.addEventListener("click", () => {
  setCookie("firstName", firstText.value, 365);
  setCookie("lastName", lastText.value, 365);
}); 

cookieBtn.addEventListener("click", () => {
  firstText.value = getCookie("firstName");
  lastText.value = getCookie("lastName");
}); 
// myButton2.addEventListener("click", () => window.print()); // prints the page

function setCookie(name, value, daysToLive){
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 1000); //converted to ms
  let expires = "expires=" + date.toUTCString(); // converted to string
  document.cookie = `${name}=${value}; ${expires}; path=/`; // path is optional
}
// setCookie("email", "Jay@gmail.com", 365);
// setCookie("firstName", "Jude", 365);  // we are getting it from the user via the textbox
// setCookie("lastName", "Monye", 365);  // we are getting it from the user via the textbox

console.log(document.cookie);  // to view the cookies you have available

function deleteCookie(name){
  setCookie(name, null, null);  // deletes the specified name because the expire date is empty
}
deleteCookie("email");
// deleteCookie("firstName");
// deleteCookie("lastName");

function getCookie(name){
  const cookieDecoded = decodeURIComponent(document.cookie);
  const cookieArray = cookieDecoded.split("; ");
  let result = null;

  cookieArray.forEach(element => {
    if(element.indexOf(name) == 0){
      result = element.substring(name.length + 1)
    }
  });
    return result;
}
console.log(getCookie("firstName"));
console.log(getCookie("lastName"));
