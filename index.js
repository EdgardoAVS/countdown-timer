
let nextYear = new Date().getFullYear() + 1;
function countdown () {
  const newYear = new Date(`1 Jan ${nextYear}`);
  const currentDate = new Date();
  // console.log(currentDate)


  const secondsLeft = (newYear - currentDate) / 1000;

  const days = Math.floor(secondsLeft / 3600 / 24)
  const hours = Math.floor(secondsLeft / 3600) % 24;
  const minutes = Math.floor(secondsLeft / 60) % 60;
  const seconds = Math.floor(secondsLeft) % 60;
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = format(hours);
  document.getElementById("minutes").innerHTML = format(minutes);
  document.getElementById("seconds").innerHTML = format(seconds);
  if(days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    nextYear++;
  }
} 
function format (time) {
  return time < 10 
    ? `0${time}`
    : time
}
countdown();
setInterval(countdown, 1000)
