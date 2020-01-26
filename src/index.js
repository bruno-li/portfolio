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

// Wait for the quote animation to end
quote.addEventListener('animationend', displayElements);

// Display the elements - container - after quote's animation is finished
function displayElements() {
	document.body.style.overflow = 'unset';

	setTimeout(() => {
		container.classList.add('active__container');
	}, 50);
}
