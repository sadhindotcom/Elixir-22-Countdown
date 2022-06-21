const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const mintsEl = document.getElementById("mints");
const secondsEl = document.getElementById("seconds");



const hallDay = '2 july 2022'

function countdown() {
    const hallDayDate = new Date(hallDay);
    const currDate = new Date();

    const totalSeconds = (hallDayDate - currDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mints = Math.floor(totalSeconds / 3600) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTiming(hours);
    mintsEl.innerHTML = formatTiming(mints);
    secondsEl.innerHTML = formatTiming(seconds);
}
function formatTiming(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);