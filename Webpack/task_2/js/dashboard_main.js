// Webpack/task_2/js/dashboard_main.js
import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

// Logo en haut de page (le CSS lui mettra l'image de fond)
$('body').prepend('<div id="logo" aria-label="Holberton logo"></div>');

// Textes
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');

// Bouton + compteur (compteur à droite, en gras via CSS)
const $controls = $('<div class="controls"></div>');
const $btn = $('<button>Click here to get started</button>');
const $count = $("<p id='count'></p>");
$controls.append($btn, $count);
$('body').append($controls);

// Footer
$('body').append('<p>Copyright - Holberton School</p>');

// Compteur anti-spam (500ms)
let clicks = 0;
function updateCounter() {
  clicks += 1;
  $count.text(`${clicks} clicks on the button`);
}
$btn.on('click', _.debounce(updateCounter, 500));
