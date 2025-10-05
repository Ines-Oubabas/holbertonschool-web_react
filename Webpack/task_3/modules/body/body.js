import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append('<p>Dashboard data for the students</p>');

const $controls = $('<div class="controls"></div>');
const $btn = $('<button>Click here to get started</button>');
const $count = $("<p id='count'></p>");
$controls.append($btn, $count);
$('body').append($controls);

let clicks = 0;
function updateCounter() {
  clicks += 1;
  $count.text(`${clicks} clicks on the button`);
}
$btn.on('click', _.debounce(updateCounter, 500));
