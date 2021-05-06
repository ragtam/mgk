import Rellax from 'rellax';

const breakpoints = [576, 768, 1201];

export function initializeRellax(cssSelector) {
    return new Rellax(cssSelector, {
        breakpoints: breakpoints,
    });
}

export function destroyRellax(rellaxRef) {
    if (rellaxRef) {
        rellaxRef.destroy();
    }
}