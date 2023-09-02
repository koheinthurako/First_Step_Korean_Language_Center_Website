import './style.scss';
import './node_modules/bootstrap/dist/js/bootstrap.bundle';
import ScrollReveal from 'scrollreveal';
import './node_modules/waypoints/lib/noframework.waypoints';

const course = document.querySelector(".navbar #course");
const feature = document.querySelector(".navbar #feature");
const contact = document.querySelector(".navbar #contact");
const login = document.querySelector(".navbar #login");

course.addEventListener('click', () => {
    document.querySelector(".container #courses").scrollIntoView({behavior: "smooth"});
});

feature.addEventListener('click', () => {
    document.querySelector(".container #features").scrollIntoView({behavior: "smooth"});
});

login.addEventListener('click', () => {
    document.querySelector(".container #loginBox").scrollIntoView({behavior: "smooth"});
});

contact.addEventListener('click', () => {
    document.querySelector("footer#contactBox").scrollIntoView({behavior: "smooth"});
});

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