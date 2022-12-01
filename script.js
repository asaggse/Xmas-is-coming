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
const secondInMs = 1000;
const minuteInMs = 60 * secondInMs;
const hourInMs = 60 * minuteInMs;
const dayInMs = 24 * hourInMs;

daysElm.innerHTML = Math.floor(diff / dayInMs);
hoursElm.innerHTML = Math.floor((diff % dayInMs) / hourInMs);
minutesElm.innerHTML = Math.floor((diff % hourInMs) / minuteInMs);
secondsElm.innerHTML = Math.floor((diff % minuteInMs) / secondInMs);