/**
 * SCRIPT.JS
 * - Videos only appear when cursor is directly ON the No button (hovering inside it).
 * - Videos disappear instantly when cursor leaves the No button.
 * - No button does not move. Clicking it does nothing.
 * - Videos are kept playing at all times so they don't freeze.
 */

document.addEventListener('DOMContentLoaded', () => {
  const noBtn = document.getElementById('noBtn');
  const sideVideos = document.querySelectorAll('.side-video');
  const videoElements = document.querySelectorAll('.border-video');

  if (!noBtn || sideVideos.length === 0) return;

  // Keep videos playing at all times (they're hidden via opacity, not paused)
  function ensureVideosPlaying() {
    videoElements.forEach((video) => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    });
  }

  // Start videos immediately and keep checking every 2 seconds
  ensureVideosPlaying();
  setInterval(ensureVideosPlaying, 2000);

  // Show videos ONLY when cursor is inside the No button
  noBtn.addEventListener('mouseenter', () => {
    sideVideos.forEach((el) => {
      el.classList.add('visible');
    });
  });

  noBtn.addEventListener('mouseleave', () => {
    sideVideos.forEach((el) => {
      el.classList.remove('visible');
    });
  });

  // Clicking No does nothing
  noBtn.addEventListener('click', (e) => {
    e.preventDefault();
  });
});
