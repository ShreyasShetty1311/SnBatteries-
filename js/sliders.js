/* Infinite Marquee Slider — Pixel-Exact Seamless Loop
 *
 * Strategy:
 *  1. Measure the exact pixel width of one set of original items (Set 1).
 *  2. Clone the original items multiple times to ensure there is enough content
 *     to cover the screen width during translation, preventing empty space or cuts.
 *  3. Set --marquee-shift CSS custom property to the exact negative width of one set.
 *  4. Recalculate on image load and window resize to handle late layout shifts.
 */

document.addEventListener('DOMContentLoaded', () => {
  const marqueeContents = document.querySelectorAll('.marquee-content');

  marqueeContents.forEach(content => {
    const originalItems = Array.from(content.children);
    if (originalItems.length === 0) return;

    // Helper to calculate the exact width of one set of items including margins
    function getOneSetWidth() {
      let width = 0;
      originalItems.forEach(item => {
        const style = window.getComputedStyle(item);
        const rect = item.getBoundingClientRect();
        // Use bounding rect width to get precise float value (prevents sub-pixel rounding jank)
        width += rect.width + (parseFloat(style.marginRight) || 0);
      });
      return width;
    }

    const oneSetWidth = getOneSetWidth();
    if (oneSetWidth === 0) return;

    // Clone enough times to cover the viewport width + 1 safety buffer set
    const viewportWidth = window.innerWidth;
    const neededClones = Math.ceil(viewportWidth / oneSetWidth) + 1;

    for (let i = 0; i < neededClones; i++) {
      originalItems.forEach(item => {
        const clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        content.appendChild(clone);
      });
    }

    // Apply the exact negative shift value for the marquee translation
    function measureAndApply() {
      const currentWidth = getOneSetWidth();
      if (currentWidth > 0) {
        content.style.setProperty('--marquee-shift', `-${currentWidth}px`);
      }
    }

    // Run immediately
    measureAndApply();

    // Re-run whenever images inside finish loading (handles image-load layout shifts)
    content.querySelectorAll('img').forEach(img => {
      if (img.complete) return;
      img.addEventListener('load', measureAndApply);
      img.addEventListener('error', measureAndApply);
    });

    // Re-run on resize
    window.addEventListener('resize', () => {
      measureAndApply();
    });
  });
});
