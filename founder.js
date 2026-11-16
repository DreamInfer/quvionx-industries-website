/* Lightweight effects only; no analytics, external libraries or network calls. */
(() => {
  'use strict';
  const menuButton = document.querySelector('.mobile-nav-toggle');
  const menu = document.querySelector('.site-menu');
  if (menuButton && menu) {
    const closeMenu = () => {
      menu.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open portfolio navigation');
    };
    menuButton.addEventListener('click', () => {
      const open = !menu.classList.contains('is-open');
      menu.classList.toggle('is-open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close portfolio navigation' : 'Open portfolio navigation');
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    document.addEventListener('click', event => {
      if (!menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
  }
  const year = document.querySelector('#founder-year');
  if (year) year.textContent = String(new Date().getFullYear());
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion && 'IntersectionObserver' in window) {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }, {threshold: 0.08, rootMargin: '0px 0px 30px 0px'});
    elements.forEach(el => observer.observe(el));
    document.documentElement.classList.add('js-ready');
  }
})();