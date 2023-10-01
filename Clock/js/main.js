document.addEventListener('DOMContentLoaded', function() {
  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');
  let lastSecond = new Date().getSeconds();

  document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
  });

  function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = ((hours % 12) / 12 * 360) + ((minutes / 60) * 30) + 90;
    const minuteDeg = (minutes / 60 * 360) + ((seconds / 60) * 6) + 90;
    const secondDeg = (seconds / 60 * 360) + 90;

    // Check if the second hand completes a full rotation
    if (lastSecond === 59 && seconds === 0) {
      secondHand.style.transition = 'none';
    } else {
      secondHand.style.transition = '';
    }
    lastSecond = seconds;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
  }

  setInterval(updateClock, 1000);
  updateClock();
});
