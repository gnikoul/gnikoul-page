const publications = document.querySelectorAll('.project-info');

const publicationObserver = new IntersectionObserver(entries => 
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('active');
        publicationObserver.unobserve(entry.target);
    }
  }), { threshold: 0, rootMargin: '0px 0px -30% 0px' });


publications.forEach(publication => publicationObserver.observe(publication));