const header = document.querySelector("header");
window.addEventListener("scroll", function(){
  header.classList.toggle("sticky", window.scrollY>60);
});

const scroller = document.querySelector(".scroll");
window.addEventListener("scroll", function () {
  scroller.classList.toggle("scrollTop", window.scrollY > 190);
});

const darkModeBtn = document.querySelector('.dark-mode');
const lightModeBtn = document.querySelector('.light-mode');
const lightDarkIcon = document.querySelector('.light-mode i');

darkModeBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent page refresh
  document.documentElement.style.setProperty('--main-color', '#ff9f0d');
  document.documentElement.style.setProperty('--text-color', '#fff');
  document.documentElement.style.setProperty('--other-color', '#212121');
  document.documentElement.style.setProperty('--second-color', '#9e9e9e');
  document.documentElement.style.setProperty('--bg-color', '#111111');
  
  // Show light mode button, hide dark mode button
  lightModeBtn.style.display = 'inline-block';
  darkModeBtn.style.display = 'none';
});

lightModeBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent page refresh
  document.documentElement.style.setProperty('--main-color', '#ff9f0d');
  document.documentElement.style.setProperty('--text-color', '#000000');
  document.documentElement.style.setProperty('--other-color', '#7b8882');
  document.documentElement.style.setProperty('--second-color', '#111111');
  document.documentElement.style.setProperty('--bg-color', '#eafdf4');
  
  // Toggle dark mode icon
  lightDarkIcon.classList.toggle('bx-sun');
  lightDarkIcon.classList.toggle('bx-moon');
  
  header.style.backgroundColor = '#7b8882';
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};
