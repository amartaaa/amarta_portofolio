// ---------- Splash screen ----------
const SPLASH_DURATION = 2200;

const splash = document.getElementById('splash');
const htmlEl = document.documentElement;

function hideSplash() {
  splash.classList.add('is-leaving');
  htmlEl.classList.remove('is-loading'); 
  setTimeout(() => { splash.style.display = 'none'; }, 850);
}

window.addEventListener('load', () => {
  setTimeout(hideSplash, SPLASH_DURATION);
});

setTimeout(() => {
  if (htmlEl.classList.contains('is-loading')) hideSplash();
}, SPLASH_DURATION + 1500);

splash.addEventListener('click', hideSplash);

// ---------- Category filters on Selected Work ----------
const buttons = document.querySelectorAll('#work .filter-btn');
const cards = document.querySelectorAll('#work .card');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.cat.split(' ').includes(filter);
      card.style.display = match ? '' : 'none';
    });
  });
});

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle('in-view', entry.isIntersecting);
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => io.observe(el));