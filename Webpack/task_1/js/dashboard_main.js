import $ from 'jquery';
import { debounce } from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');

const $btn = $('<button>Click here to get started</button>');
$('body').append($btn);

const $count = $("<p id='count'></p>");
$('body').append($count);

$('body').append('<p>Copyright - Holberton School</p>');

let clicks = 0;
function updateCounter() {
  clicks += 1;
  $count.text(`${clicks} clicks on the button`);
}

// anti-spam: 500ms
$btn.on('click', debounce(updateCounter, 500));
