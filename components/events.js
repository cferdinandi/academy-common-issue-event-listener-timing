import {removeFave, addFave} from './faves.js';

// Get the "Favorite" button
// let btn = document.querySelector('[data-fave]');

// Define the btn variable
let btn;

/**
 * Handle click events
 * @param  {Event} event The event object
 */
function clickHandler (event) {

	// Get place ID
	let id = btn.getAttribute('data-fave');

	// Update button UI and save
	if (btn.getAttribute('aria-pressed') === 'true') {
		btn.setAttribute('aria-pressed', 'false');
		removeFave(id);
	} else {
		btn.setAttribute('aria-pressed', 'true');
		addFave(id);
	}

}

// Listen for clicks on fave and visited buttons
// btn.addEventListener('click', clickHandler);

/**
 * Listen for clicks on fave and visited buttons
 */
function runListener () {
	btn = document.querySelector('[data-fave]');
	if (!btn) return;
	btn.addEventListener('click', clickHandler);
}

export {runListener};