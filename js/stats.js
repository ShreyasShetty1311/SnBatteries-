/* Animated Count-up Statistics Logic */

document.addEventListener('DOMContentLoaded', () => {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  if (statNumbers.length === 0) return;

  const countUp = (element) => {
    const targetText = element.getAttribute('data-target'); // e.g., "10000", "5", "10"
    const targetVal = parseInt(targetText.replace(/,/g, ''), 10);
    const suffix = element.getAttribute('data-suffix') || ''; // e.g., "+", "%"
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const easeOutQuad = (t) => t * (2 - t);

    const animate = () => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      const currentVal = Math.round(targetVal * progress);

      // Add commas to number formatting
      element.textContent = currentVal.toLocaleString('en-US') + suffix;

      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = parseInt(targetText, 10).toLocaleString('en-US') + suffix;
      }
    };

    requestAnimationFrame(animate);
  };

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, observerOptions);

  statNumbers.forEach(num => {
    observer.observe(num);
  });
});
