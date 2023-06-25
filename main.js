import './style.scss';
import './node_modules/bootstrap/dist/js/bootstrap.bundle';
import ScrollReveal from 'scrollreveal';
import './node_modules/waypoints/lib/noframework.waypoints';



let toDown = {
    distance: '50px',
    origin: 'top',
    interval: 200,
    duration: 800
};

ScrollReveal().reveal('.to-down', toDown);

let toLeft = {
    distance: '50px',
    origin: 'right',
    interval: 200,
    duration: 800
};

ScrollReveal().reveal('.to-left', toLeft);

let toRight = {
    distance: '50px',
    origin: 'left',
    interval: 200,
    duration: 800
};

ScrollReveal().reveal('.to-right', toRight);