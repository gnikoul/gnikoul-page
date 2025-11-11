const publications = document.querySelectorAll('.publication');

const publicationObserver = new IntersectionObserver(entries => sleep(100, () => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('active');
        publicationObserver.unobserve(entry.target);
    }
  });
}), { threshold: 0.5 });


publications.forEach(publication => publicationObserver.observe(publication));