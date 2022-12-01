/*---------------
   DOM ELEMENTS
---------------*/
const daysElm = document.querySelector('#days');
const hoursElm = document.querySelector('#hours');
const minutesElm = document.querySelector('#minutes');
const secondsElm = document.querySelector('#seconds');
const panelElm = document.querySelector('.panel');

// Christmas's day
const endDate = new Date("December 25 2022");
const endDateInMs = endDate.getTime();

// table in ms
const secondInMs = 1000;
const minuteInMs = 60 * secondInMs;
const hourInMs = 60 * minuteInMs;
const dayInMs = 24 * hourInMs;

const counterTimer = setInterval(timer, 1000);

function timer(){
   // Today in ms
   const nowInMs = new Date().getTime();
   
   const diff = endDateInMs - nowInMs;

   if(diff > 0){
      daysElm.innerHTML = Math.floor(diff / dayInMs);
      hoursElm.innerHTML = Math.floor((diff % dayInMs) / hourInMs);
      minutesElm.innerHTML = Math.floor((diff % hourInMs) / minuteInMs);
      secondsElm.innerHTML = Math.floor((diff % minuteInMs) / secondInMs);
   } else {
      clearInterval(timer);
      panelElm.innerHTML = "<h1>Merry Christmas!🎅🏻</h1>";
   }
}