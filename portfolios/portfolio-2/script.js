
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const menuLinks = document.querySelectorAll('.header .nav-bar .nav-list ul li');
const header = document.querySelector('.header.container');

// When hamburger is clicked, let it close the nav menu and change the hamburger
hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});
// When each nav link is clicked, let it close the nav menu
menuLinks.forEach(function(menuLink) {
  menuLink.addEventListener('click', ()=>{
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
   });
});
//window scroll for the header
document.addEventListener('scroll', ()=>{
  let scrollPosition = window.scrollY;
  if (scrollPosition > 250) {
    header.style.backgroundColor = '#29323c';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});
