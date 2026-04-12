/* ═══════════════════════ TYPING ANIMATION ═══════════════════════ */
(function () {
  const el = document.getElementById('typed');
  if (!el) return;

  const words = ['.NET Developer', 'Vue.js Developer', 'Full-stack Dev', 'C# Enthusiast'];
  let wi = 0, ci = 0, deleting = false;
  const SPEED_TYPE = 80, SPEED_DEL = 45, PAUSE = 1800;

  function tick() {
    const word = words[wi];
    el.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);

    if (!deleting && ci > word.length) {
      deleting = true;
      setTimeout(tick, PAUSE);
      return;
    }
    if (deleting && ci < 0) {
      deleting = false;
      ci = 0;
      wi = (wi + 1) % words.length;
    }
    setTimeout(tick, deleting ? SPEED_DEL : SPEED_TYPE);
  }
  tick();
})();

/* ═══════════════════════ SCROLL REVEAL ═══════════════════════ */
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    observer.observe(el);
  });
})();

/* ═══════════════════════ MOBILE NAV TOGGLE ═══════════════════════ */
(function () {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
})();

/* ═══════════════════════ ACTIVE NAV LINK ON SCROLL ═══════════════════════ */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#navLinks a[href^="#"]');

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          navLinks.forEach((a) => a.classList.remove('active'));
          const active = document.querySelector(`#navLinks a[href="#${e.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((s) => obs.observe(s));
})();

/* ═══════════════════════ CONTACT FORM ═══════════════════════ */
(function () {
  const form = document.getElementById('contactForm');
  const btn = document.getElementById('formBtn');
  const success = document.getElementById('formSuccess');
  const error = document.getElementById('formError');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btn.textContent = 'Envoi en cours…';
    btn.disabled = true;
    error.style.display = 'none';

    try {
      const res = await fetch('https://formspree.io/f/mlgaraja', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form),
      });

      if (res.ok) {
        form.style.display = 'none';
        success.style.display = 'flex';
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        throw new Error('server');
      }
    } catch {
      error.style.display = 'block';
      btn.textContent = 'Envoyer le message';
      btn.disabled = false;
    }
  });
})();

