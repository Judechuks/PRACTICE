let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');

// function to highlight active tab and display its contents
function openTab(tabName){
   // select each tab links and remove the active link display as highlighted
   for(tabLink of tabLinks){
      tabLink.classList.remove("active-link");
   }
   // select each tab content and remove the active tab
   for(tabContent of tabContents){
      tabContent.classList.remove("active-tab");
   }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabName).classList.add("active-tab")
}

// For The Open and Close bar
let sideMenu = document.getElementById("side-menu");

function openMenu(){
   sideMenu.style.right = "0";
}
function closeMenu(){
   sideMenu.style.right = "-200px"; 
}

// form submission message
const msg = document.getElementById("msg");

function showMsg() {
  msg.textContent = `Message Sent Successfully`;
  setTimeout(function(){
     disappear();
  }, 5000);
}
function disappear(){
   msg.textContent = ``;
}


//========== Top link display ==========//
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function() {
//pageYOffset is a read only - window property that returns the number of pixels the document has been scrolled vertically.
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});