// Cookie = a small text file stored on your computer, used to remember information about the user
//          saved in name=value pairs

// console.log(navigator.cookieEnabled); // checks if cookie is enabled, returns true or false
// document.cookie = "firstName=Jude; expires=Sun, 1 January 2030 12:00:00 UTC; path=/"; //sets a cookie with an expiry date and a path
// a cookie is an object
// when the cookie is passed its expiry date, the cookie gets deleted. thats how to delete a cookie
// console.log(document.cookie);  // to view the cookies you have available

function setCookie(name, value, daysToLive){
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 1000); //converted to ms
  let expires = "expires=" + date.toUTCString(); // converted to string
  document.cookie = `${name}=${value}; ${expires}; path=/`; // path is optional
}
setCookie("email", "Jay@gmail.com", 365);
setCookie("firstName", "Jude", 365);
setCookie("lastName", "Monye", 365);

console.log(document.cookie);  // to view the cookies you have available

function deleteCookie(name){
  setCookie(name, null, null);  // deletes the specified name because the expire date is empty
}
deleteCookie("email");

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