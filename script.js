(function () {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-link]').forEach((a) => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  const toggles = document.querySelectorAll('[data-theme-toggle]');
  toggles.forEach((btn) => btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  }));
})();
