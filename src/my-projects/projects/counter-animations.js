import anime from 'animejs';

export function counterFromZeroToValueAnimation(cssSelector, countToValue) {
    return anime({
        targets: cssSelector,
        innerText: [0, countToValue],
        round: 1,
        easing: 'easeOutExpo',
        autoplay: false,
        duration: countToValue * 0.8
    });
}

export function setUpSectionObserver(cssSelector, animation) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animation.play();
                observer.unobserve(entry.target);
            }
        });
    });
    var element = document.querySelector(cssSelector);
    observer.observe(element);
}