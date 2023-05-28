// to get Username from email address using slice.

function getUserNameFromEmail(email){
  return email.slice(0, email.indexOf("@"));
}
console.log("Username: " + getUserNameFromEmail("SomeUser@RandomEmail.com"));