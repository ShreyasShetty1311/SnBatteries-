/* Floating Action Buttons Entrance Stagger Logic */

document.addEventListener('DOMContentLoaded', () => {
  const fabs = document.querySelectorAll('.fab');
  
  if (fabs.length === 0) return;

  // Stagger entrance delay
  fabs.forEach((fab, index) => {
    setTimeout(() => {
      fab.classList.add('slide-in');
    }, 500 + index * 150); // Start after 500ms, then stagger by 150ms
  });
});
