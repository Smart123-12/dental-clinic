// ===== HEADER SCROLL =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ===== MOBILE NAV =====
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
  });
});

// ===== FORM SUBMIT =====
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('apptForm').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'flex';
  document.getElementById('formSuccess').style.flexDirection = 'column';
  document.getElementById('formSuccess').style.alignItems = 'center';
  document.getElementById('formSuccess').style.gap = '8px';
}

// ===== FADE IN ON SCROLL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.service-card, .testi-card, .info-card, .about-content, .about-img-wrap')
  .forEach(el => { el.classList.add('fade-in'); observer.observe(el); });

// ===== SET MIN DATE FOR APPOINTMENT =====
const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}
