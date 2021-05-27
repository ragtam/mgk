import VanillaTilt from 'vanilla-tilt';

export function initializeTiltElement(selector, config) {
    const element = document.querySelector(selector);
    VanillaTilt.init(element, config);
    return element;
}

export function destroyTilt(tiltElement) {
    if (tiltElement && tiltElement.vanillaTilt) {
        tiltElement.vanillaTilt.destroy();
    } else {
        console.warn('TiltAnimation not available on the HTML element', tiltElement);
    }
}