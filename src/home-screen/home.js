import Rellax from 'rellax';
import anime from 'animejs/lib/anime.es.js';

export function animateOnEntry() {
    const t = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750,
    });
    t.add({
        targets: '.intro-overlay div',
        opacity: 1,
        delay: anime.stagger(100),
    });
    t.add(
        {
            targets: '.background-overlay',
            opacity: 1,
        },
        '-=400'
    );
    t.add(
        {
            targets: '.intro-overlay div',
            opacity: 0,
            delay: anime.stagger(100),
        },
        '-=900'
    );
    t.add(
        {
            targets: '#text',
            opacity: [0, 1],
        },
        '-=900'
    );
    t.add(
        {
            targets: '#image',
            translateX: ['200', '0'],
            opacity: [0, 1],
            easing: 'spring(1, 80, 10, 0)',
        },
        '-=600'
    );
}

export function setUpParallaxEffect() {
    new Rellax('.rellax');
}

export function setUpScrollAnimation() {
    const overlayAnimation = anime({
        targets: '.overlay',
        easing: 'easeInOutQuad',
        opacity: 1,
        autoplay: false,
        duration: 500,
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    overlayAnimation.play();
                } else {
                    overlayAnimation.seek(0);
                }
            });
        },
        { threshold: 0.5 }
    );

    const target = document.querySelector('.sentinel');

    observer.observe(target);
}