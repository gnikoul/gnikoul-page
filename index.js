function updateNavBarColor() {
  if (window.scrollY > 450) {
    document.documentElement.style.setProperty('--nav-bar-color', 'black');
  } else {
    document.documentElement.style.setProperty('--nav-bar-color', 'white');
  }
}

// Run once on page load
updateNavBarColor();

// Run on scroll
window.addEventListener('scroll', updateNavBarColor);

document.querySelector('#AboutMe').addEventListener('click', (e) => {
  window.scrollTo({
    top: 0,      
    behavior: 'smooth'
  });
});

document.querySelector('#Career').addEventListener('click', (e) => {
  window.scrollTo({
    top: 410,      
    behavior: 'smooth'
  });
});

document.querySelector('#Publications').addEventListener('click', (e) => {
  window.scrollTo({
    top: 1225,      
    behavior: 'smooth'
  });
});





const timeline = document.getElementById('timeline');
const stops = document.querySelectorAll('.time-stop');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Trigger the timeline animation
      timeline.classList.add('active');

      // Trigger stops with delays
      stops.forEach((stop, i) => {
        const reversedIndex = stops.length - 1 - i;
        stop.style.transitionDelay = `${reversedIndex * 0.25}s`;
        stop.classList.add('active');
      });

      // Only trigger once
      observer.unobserve(timeline);
    }
  });
}, { threshold: 0.5 });

observer.observe(timeline);
