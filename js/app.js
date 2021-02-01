const clockContainer = document.querySelector(".countdown");
const day = clockContainer.querySelector(".day");
const hour = clockContainer.querySelector(".hour");
const min = clockContainer.querySelector(".min");
const sec = clockContainer.querySelector(".sec");


function intoUnits (timeLeft) {
    const secondsInDay = 60 * 60 * 24;
    const secondsInHour = 60 * 60;
    const secondsInMin = 60;

    const dayLeft = Math.floor(timeLeft / secondsInDay);
    const hourLeft = Math.floor((timeLeft - dayLeft * secondsInDay)/secondsInHour);
    const minLeft = Math.floor((timeLeft - dayLeft * secondsInDay - hourLeft * secondsInHour)/60);
    const secLeft = timeLeft - dayLeft * secondsInDay - hourLeft * secondsInHour - minLeft * secondsInMin;

    return [dayLeft, hourLeft, minLeft, secLeft];
}

function getTimeLeft(){
    const now = new Date();
    const launch = new Date('2021-02-10T00:00:00');

    const timeLeft = Math.floor((launch - now)/1000); // 남은 시간(초단위)

    const [dayLeft, hourLeft, minLeft, secLeft] = intoUnits(timeLeft);

    day.innerHTML = dayLeft < 10 ? `0${dayLeft}` : dayLeft;
    hour.innerHTML = hourLeft < 10 ? `0${hourLeft}` : hourLeft;
    min.innerHTML = minLeft < 10 ? `0${minLeft}` : minLeft;
    sec.innerHTML = secLeft < 10 ? `0${secLeft}` : secLeft;
}

function init(){
    getTimeLeft();
    setInterval(getTimeLeft,1000);
}

init();