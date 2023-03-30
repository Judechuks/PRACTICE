let date = new Date();
// let date = new Date(2023, 0, 30, 24, 30, 20, 12);

function formatDate(date){
  let year = date.getFullYear();
  let month = date.getMonth() + 1; // remember that month starts from zero in js, so we add 1
  let day = date.getDate();
  return `${day}/${month}/${year}`
}

function formatTime(date){
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let amOrPm = hours >= 12 ? "pm" : "am";

  hours = (hours % 12) || 12; 
  // if the remainder of hours divided by 12 gives us 0, then let hours be 12 
  // else give us the remainder

  return `${hours}:${minutes}:${seconds} ${amOrPm}`;
}

console.log(formatDate(date));
console.log(formatTime(date));