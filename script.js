document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form-note').hidden = false;
});
