/* Infinite Marquee Slider Support */

document.addEventListener('DOMContentLoaded', () => {
  const marquees = document.querySelectorAll('.marquee-container');

  marquees.forEach(marquee => {
    const content = marquee.querySelector('.marquee-content');
    if (!content) return;

    // Clone all children to make it look seamless and loop infinitely
    const items = Array.from(content.children);
    
    // We duplicate the items inside the content container
    items.forEach(item => {
      const clone = item.cloneNode(true);
      content.appendChild(clone);
    });
  });
});
