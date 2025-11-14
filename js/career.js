const timeline = document.getElementById('timeline');
const stops = document.querySelectorAll('.time-stop');

const observer = new IntersectionObserver(entries => sleep(100, () => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Trigger the timeline animation
      timeline.classList.add('active');

      // Trigger stops with delays
      
      stops.forEach((stop, i) => {
        //const reversedIndex = stops.length - 1 - i;
        stop.style.transitionDelay = `${i * 0.25}s`;
        stop.classList.add('active');
      });

      // Only trigger once
      observer.unobserve(timeline);
    }
  });
}), { threshold: 0.3 });

observer.observe(timeline);

const containers = document.querySelectorAll('.timeline .container');

const boxobserver = new IntersectionObserver(entries => sleep(100, () => { {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const contentRight = entry.target.querySelector('.content-right');
      const contentLeft = entry.target.querySelector('.content-left');
      if (contentRight) {contentRight.classList.add('active');}
      if (contentLeft) {contentLeft.classList.add('active');}
      boxobserver.unobserve(entry.target); 
    }
  });
};}), {
  root: null,               // viewport
  threshold: 0,             // trigger as soon as any pixel enters root
  rootMargin: '-50% 0px -50% 0px' // top and bottom offsets
});
containers.forEach(container => boxobserver.observe(container));
