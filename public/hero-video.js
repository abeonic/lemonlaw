'use strict';

const heroVideo = document.querySelector('.hero-video');
const videoToggle = document.querySelector('.video-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

async function playBackground() {
  if (!heroVideo.hasAttribute('src')) heroVideo.src = heroVideo.dataset.source;
  try {
    await heroVideo.play();
    videoToggle.textContent = 'Pause background video';
    videoToggle.hidden = false;
  } catch {
    videoToggle.textContent = 'Play background video';
    videoToggle.hidden = Boolean(heroVideo.error);
  }
}

function pauseBackground() {
  heroVideo.pause();
  videoToggle.textContent = 'Play background video';
}

videoToggle.addEventListener('click', () => {
  if (heroVideo.paused) playBackground();
  else pauseBackground();
});

reducedMotion.addEventListener('change', (event) => {
  if (event.matches) pauseBackground();
});

if (!reducedMotion.matches) playBackground();
