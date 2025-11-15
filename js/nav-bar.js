// scroll
function updateNavBarColor() {
  const intro = document.querySelector('.intro');
  const footer = document.querySelector('.contact');

  const introHeight = intro.offsetHeight - 20;
  const footerTop = footer.offsetTop - 30;

  const scrollY = window.scrollY;

  let color = 'white'; // default color

  if (scrollY > introHeight && scrollY < footerTop) {
    color = 'black';
  }

  document.documentElement.style.setProperty('--nav-bar-color', color);
}


updateNavBarColor();
window.addEventListener('scroll', updateNavBarColor);

document.querySelector('#AboutMe').addEventListener('click', (e) => {
  window.scrollTo({
    top: 0,      
    behavior: 'smooth'
  });
});

document.querySelector('#Career').addEventListener('click', () => {
  document.querySelector('.career').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('#Projects').addEventListener('click', () => {
  document.querySelector('.projects').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('#Contact').addEventListener('click', () => {
  document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
});


function sleep(ms, callback) {
  setTimeout(callback, ms);
}
