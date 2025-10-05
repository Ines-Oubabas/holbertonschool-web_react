import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
const $btn = $('<button>Click here to get started</button>');
$('body').append($btn);
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

let clicks = 0;
function updateCounter() {
  clicks += 1;
  $('#count').text(`${clicks} clicks on the button`);
}

// 500 ms
$btn.on('click', _.debounce(updateCounter, 500));
