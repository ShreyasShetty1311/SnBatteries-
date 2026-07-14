/* Header and Mobile Drawer Logic */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const drawer = document.getElementById('mobile-drawer');
  const openBtn = document.getElementById('drawer-open');
  const closeBtn = document.getElementById('drawer-close');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  // 1. Scroll behaviour (Transparent -> Glass)
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // Run immediately and on scroll
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  // 2. Mobile Drawer controls
  const openDrawer = () => {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
    closeBtn.focus();
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    document.body.style.overflow = ''; // Unlock scrolling
    openBtn.focus();
  };

  if (openBtn && drawer && closeBtn) {
    openBtn.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);

    // Close when clicking outside drawer content
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) {
        closeDrawer();
      }
    });

    // Close on link click
    drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    // Keyboard support: Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }
});
