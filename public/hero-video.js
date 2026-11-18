'use strict';

const heroVideo = document.querySelector('.hero-video');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function updateBackgroundVideo() {
  if (reducedMotion.matches) {
    heroVideo.pause();
    return;
  }
  if (!heroVideo.hasAttribute('src')) heroVideo.src = heroVideo.dataset.source;
  heroVideo.play().catch(() => {
    // The poster remains visible if playback is unavailable.
  });
}

reducedMotion.addEventListener('change', updateBackgroundVideo);
updateBackgroundVideo();
