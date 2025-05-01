// Countdown Timer
const countdown = document.getElementById('countdown');
const endTime = new Date(Date.now() + 60 * 60 * 1000); // 1h
const updateTimer = () => {
  const diff = endTime - new Date();
  const minutes = String(Math.floor(diff / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
  countdown.textContent = `${minutes}m ${seconds}s`;
  if (diff > 0) requestAnimationFrame(updateTimer);
};
updateTimer();

// Progress bar fake animation
const progressBar = document.getElementById('progress-bar');
const video = document.getElementById('vsl');
video.controls = false;

let duration = 60 * 60;
let progress = 0;

const simulateProgress = () => {
  if (progress >= 100) return;
  let rate = 0.5 + 2.5 * (1 - progress / 100);
  progress += rate;
  progressBar.style.width = `${Math.min(progress, 100)}%`;
  setTimeout(simulateProgress, 1000);
};
simulateProgress();

// Mostrar botão após 19 minutos
const buyButton = document.getElementById('buy-button');
setTimeout(() => {
  buyButton.classList.remove('hidden');
}, 1 * 5 * 1000);
