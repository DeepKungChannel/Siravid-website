const nav_button = document.querySelector('.nav-button');
const bar = document.querySelector('.bar');
const x = document.querySelector('.x');
const nav_link = document.querySelector('.nav_link');
const link = document.querySelectorAll('.link');

nav_button.addEventListener('click', () => {
  bar.classList.toggle('show');
  x.classList.toggle('show');
  nav_link.classList.toggle('hide');

})



for (var i = link.length - 1; i >= 0; i--) {
  link[i].addEventListener('click', () => {
    bar.classList.toggle('show');
    x.classList.toggle('show');
    nav_link.classList.toggle('hide'); 
  })
}