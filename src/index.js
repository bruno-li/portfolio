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

// **** EMAILJS API SETUP****/
// https://www.emailjs.com/docs/tutorial/overview/
// Email service initialization - EmailJS
(function() {
	emailjs.init('user_YAKeUqQ5UyCiipjDqTqJQ');
})();

// Get form button and element for error
const submitBtn = document.querySelector('#submitBtn');
// Input fields
const name = document.querySelector('#name_input');
const email = document.querySelector('#email_input');
const subject = document.querySelector('#subject_input');
const message = document.querySelector('#message_input');

// // Send mail when submiting the form
document.querySelector('#contact-form').addEventListener('submit', function(event) {
	// Prevent default behaviour
	event.preventDefault();

	// Template parameters for the email. Dynamic variables from EmailJS template
	const templateParams = {
		user_name: this.user_name.value,
		user_email: this.user_email.value,
		mail_subject: this.mail_subject.value,
		text: this.text.value
	};

	// Check the fields for value, if there is, send, if not, decline
	if (name.value && email.value && subject.value && message.value) {
		// Send the email and return a promise
		emailjs
			.send('bruno_gmail', 'contact_form', templateParams)
			.then(() => {
				// If send message was successfull:
				// Change button message
				submitBtn.innerHTML = 'Message Sent! <i class="fas fa-check-circle"></i>';

				// Clear fields
				name.value = '';
				email.value = '';
				subject.value = '';
				message.value = '';

				// Reset button to default text
				setTimeout(() => {
					submitBtn.innerHTML = 'Send message <i class="fas fa-envelope"></i></button>';
				}, 3000);
			})
			.catch(() => {
				// SENDING MESSAGE FAILED
				// Change the button message
				submitBtn.innerHTML = `Something went wrong... <i class="fas fa-exclamation-circle"></i>`;

				// Clear fields and reset button text
				setTimeout(() => {
					name.value = '';
					email.value = '';
					subject.value = '';
					message.value = '';

					submitBtn.innerHTML = 'Send message <i class="fas fa-envelope"></i></button>';
				}, 3000);
			});
	}
});
