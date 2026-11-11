(function () {
  'use strict';
  const qs = (selector) => document.querySelector(selector);
  const menuToggle = qs('.menu-toggle');
  const nav = qs('.nav-links');
  if (menuToggle && nav) {
    const closeMenu = () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('is-open');
    };
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('is-open', open);
    });
    nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
  }
  const year = qs('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  const form = qs('#quote-form');
  const productField = qs('#product');
  const status = qs('#form-status');
  document.querySelectorAll('.choose-product').forEach((link) => link.addEventListener('click', () => {
    const product = link.getAttribute('data-product');
    if (productField && product) productField.value = product;
  }));

  function enquiry() {
    if (!form || !form.reportValidity()) return null;
    const product = productField.value;
    const format = qs('#format').value;
    const quantity = qs('#quantity').value;
    const event = qs('#event').value.trim();
    const requirements = qs('#requirements').value.trim();
    const subject = `QuvionX enquiry — ${product} (${quantity} unit${quantity === '1' ? '' : 's'})`;
    const body = [
      'Hello QuvionX Industries,', '',
      'I would like a quotation for the following robotics project:', '',
      `Product: ${product}`, `Build format: ${format}`, `Quantity: ${quantity}`,
      `Event / category: ${event || 'Not specified'}`,
      `Requirements: ${requirements || 'Please contact me to discuss.'}`, '',
      'Please advise on available specifications, estimated price, production timeline and delivery.', '',
      'Name:', 'Phone:', 'Location:'
    ].join('\n');
    return {subject, body};
  }
  if (form) form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = enquiry();
    if (!data) return;
    status.textContent = 'Opening your email application. Review and send the message to complete your enquiry.';
    window.location.href = `mailto:mahaananth.nivas@quvionxindia.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.body)}`;
  });
  const wa = qs('#whatsapp-quote');
  if (wa) wa.addEventListener('click', () => {
    const data = enquiry();
    if (!data) return;
    status.textContent = 'Opening WhatsApp with your enquiry. Press Send there to contact QuvionX.';
    window.location.href = `https://wa.me/919843430172?text=${encodeURIComponent(data.body)}`;
  });
})();
