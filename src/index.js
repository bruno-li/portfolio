// Global app controller
// import SASS
import './main.scss';
import './normalize.scss';

// import num from './app/app';

// Remove the preload body class preventing the animations as soon as the page loads.
window.addEventListener('load', () => {
	document.body.classList.remove('preload');
});

// Display and animate elements after quote animation is finished
const quote = document.querySelector('#quote');
const container = document.querySelector('#container');
const nav = document.querySelector('#nav__links');

// Wait for the quote animation to end
quote.addEventListener('animationend', displayElements);

// Display the elements - container and nav - after quote's animation is finished
function displayElements() {
	// add class to display nav
	nav.classList.add('display__nav');
	document.body.style.overflow = 'unset';

	setTimeout(() => {
		container.classList.add('active__container');
		nav.classList.add('active__nav');
	}, 50);
}

//****** SMOOTH SCROLLING SCRIPT */
// https://github.com/cferdinandi/smooth-scroll
const scroll = new SmoothScroll('nav a[href*="#"]', {
	speed: 500
});
