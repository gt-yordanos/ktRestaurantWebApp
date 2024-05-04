const header = document.querySelector("header");
window.addEventListener("scroll", function(){
  header.classList.toggle("sticky", window.scrollY>80);
});

const scroller = document.querySelector(".scroll");
  window.addEventListener("scroll", function () {
    scroller.classList.toggle("scrollTop", window.scrollY > 190);
  });