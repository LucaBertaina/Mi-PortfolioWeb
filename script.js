document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  const themeBtn =  document.getElementById('themeToggle');

  function updateThemeButton() {
    if (!themeBtn) return;
    const isLight = body.classList.contains('light-mode');
    themeBtn.innerHTML = isLight ? 'Dark' : 'Ligth';
  }

  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    body.classList.add('light-mode');
  } else {
    body.classList.remove('light-mode');
  }
  updateThemeButton();

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      const isLight = body.classList.contains('light-mode');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      updateThemeButton();
    });
  }

  // --------- SKILLS ACCORDION ----------
  const skillCards = document.querySelectorAll('.skill-card');

  if (skillCards.length) {
    skillCards.forEach((card) => {
      card.addEventListener('click', () => {
        if (card.classList.contains('active')) {
          card.classList.remove('active');
          return;
        }
        skillCards.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
      });
    });
  }

  // --------- OPTIONAL: project gallery scroll buttons (protegido) ----------
  const scrollBtns = document.querySelectorAll('.scroll-btn');
  if (scrollBtns.length) {
    scrollBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const direction = e.currentTarget.dataset.dir;
        const gallery = e.currentTarget.closest('.project')?.querySelector('.project-gallery');
        if (!gallery) return;
        gallery.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
      });
    });
  }

});
