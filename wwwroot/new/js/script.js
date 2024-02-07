$(document).ready(function(){
  $(".menu-toggle").click(function(){
     $(".menu-toggle").toggleClass("active");
    $(".modal").toggleClass("modal-active");
    $("nav").toggleClass("nav-active");
  });
});

jalaliDatepicker.startWatch({
    minDate: "attr",
    maxDate: "attr"
});

const slider = document.querySelector('.gallerys');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('activez');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('activez');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('activez');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});