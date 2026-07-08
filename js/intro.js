var typed = new Typed('#intro-profession', {
    strings: ['Researcher', 'Physicist', 'Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    cursorChar: '│',
    loop: true
});

const intro = document.getElementById("intro");

function updateIntro() {
    const scroll = window.scrollY;
    const newTop = window.innerHeight - intro.offsetHeight;

    intro.style.top = `${newTop}px`;

    // How much of the intro can actually be scrolled through
    const fadeStart = intro.offsetHeight - window.innerHeight;

    // Fade over the next viewport height
    const progress = Math.min(
        Math.max((scroll - fadeStart) / window.innerHeight, 0),
        1
    );

    intro.style.opacity = 1 - progress;
    intro.style.transform = `scale(${1 - progress * 0.1})`;

    // Growing white inset shadow
    const shadowSize = progress * 5;
    intro.style.boxShadow = `inset 0 0 ${shadowSize}rem rgba(255, 255, 255, ${shadowSize})`;
}

window.addEventListener("scroll", updateIntro);
window.addEventListener("resize", updateIntro);

updateIntro();