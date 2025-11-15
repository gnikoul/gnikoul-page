const publications = document.querySelectorAll('.project');

const publicationObserver = new IntersectionObserver(entries => 
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('active');
        publicationObserver.unobserve(entry.target);
    }
  }), { threshold: 0.3 });


publications.forEach(publication => publicationObserver.observe(publication));