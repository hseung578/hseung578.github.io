const hour = document.getElementById("clock-hour");
const minute = document.getElementById("clock-minute");
const second = document.getElementById("clock-second");

function getTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourAngle =
    Math.abs(hours - 12) * 30 + minutes * 0.5 + (seconds * 0.5) / 60;
  const minuteAngle = minutes * 6 + seconds / 10;
  const secondAngle = seconds * 6;

  hour.style.transform = `rotate(${hourAngle}deg)`;
  minute.style.transform = `rotate(${minuteAngle}deg)`;
  second.style.transform = `rotate(${secondAngle}deg)`;
}

getTime();
setInterval(getTime, 1000);
