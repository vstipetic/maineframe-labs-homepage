// MaineFrame Labs — small interactions, no dependencies
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    // close menu when a link is clicked (mobile)
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mark active nav link based on current file or body[data-nav]
  var path = window.location.pathname.split('/').pop() || 'index.html';
  var explicit = document.body.getAttribute('data-nav');
  document.querySelectorAll('.nav-links a[data-page]').forEach(function (a) {
    var target = explicit || path;
    if (a.getAttribute('data-page') === target) a.classList.add('active');
  });
})();
