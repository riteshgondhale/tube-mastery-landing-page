// Timer functionality
let timeLeft = 900; // 15 minutes in seconds
const timerElement = document.getElementById('timer');

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  timeLeft--;
  if (timeLeft < 0) {
    timeLeft = 900; // Reset timer
  }
}

setInterval(updateTimer, 1000);

// Smooth animation for CTA button
const ctaBtn = document.getElementById('enroll-btn');
ctaBtn.addEventListener('mouseover', () => {
  ctaBtn.style.transform = 'scale(1.1)';
});
ctaBtn.addEventListener('mouseout', () => {
  ctaBtn.style.transform = 'scale(1)';
});
