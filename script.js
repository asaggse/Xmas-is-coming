/*---------------
   DOM ELEMENTS
---------------*/
const daysElm = document.querySelector('#days');
const hoursElm = document.querySelector('#hours');
const minutesElm = document.querySelector('#minutes');
const secondsElm = document.querySelector('#seconds');

// daysElm.innerHTML = 25;

// Christmas's day
const endDate = new Date("December 25 2022");
const endDateInMs = endDate.getTime();
// Today in ms
const nowInMs = new Date().getTime();

const diff = endDateInMs - nowInMs;

// table in ms
const secondsInMs = 1000;
const minutesInMs = 60 * secondsInMs;
const hoursInMs = 60 * minutesInMs;
const daysInMs = 24 * hoursInMs;


daysElm.innerHTML = Math.floor(diff / daysInMs);

console.log( 4 % 2);