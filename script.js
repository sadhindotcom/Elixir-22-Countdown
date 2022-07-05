const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const mintsEl = document.getElementById("mints");
const secondsEl = document.getElementById("seconds");



const hallDay = '1 january 2023'

function countdown() {
    const hallDayDate = new Date(hallDay);
    const currDate = new Date();

    const totalSeconds = (hallDayDate - currDate);

     const days = Math.floor(totalSeconds / (1000*60*60*24));
    const hours = Math.floor((totalSeconds % (1000*60*60*24)) / (1000*60*60));
    const mints = Math.floor((totalSeconds % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((totalSeconds % (1000*60)) /(1000));



    daysEl.innerHTML = formatTiming(days);
    hoursEl.innerHTML = formatTiming(hours);
    mintsEl.innerHTML = formatTiming(mints);
    secondsEl.innerHTML = formatTiming(seconds);
}
function formatTiming(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);
