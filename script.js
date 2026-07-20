document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Спасибо за заявку! Я свяжусь с вами в ближайшее время.');
  this.reset();
});