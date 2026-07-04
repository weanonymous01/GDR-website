/* ===========================
   GRD Hospital — JavaScript
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

  // ========== NAVBAR SCROLL ==========
  const navbar = document.getElementById('navbar');
  const handleNavbarScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });

  // ========== MOBILE HAMBURGER ==========
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ========== ACTIVE NAV LINK ON SCROLL ==========
  const sections = document.querySelectorAll('section[id]');
  const navLinkElements = document.querySelectorAll('.nav-link');

  const updateActiveLink = () => {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinkElements.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', updateActiveLink, { passive: true });

  // ========== COUNTER ANIMATION ==========
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  let countersAnimated = false;

  const animateCounters = () => {
    if (countersAnimated) return;
    const heroContent = document.getElementById('hero-content');
    const rect = heroContent.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      countersAnimated = true;
      statNumbers.forEach(el => {
        const target = parseInt(el.getAttribute('data-count'), 10);
        const duration = 2000;
        const start = performance.now();

        const step = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(target * eased);
          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };
        requestAnimationFrame(step);
      });
    }
  };
  window.addEventListener('scroll', animateCounters, { passive: true });
  animateCounters(); // also run on load in case hero is in view

  // ========== SCROLL REVEAL ==========
  const revealElements = document.querySelectorAll(
    '.about-card, .service-card, .doctor-card, .book-wrapper, .section-header'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Stagger siblings
        const parent = entry.target.parentElement;
        const siblings = Array.from(parent.children).filter(c => c.classList.contains('reveal'));
        const index = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // ========== FORM HANDLING ==========
  const form = document.getElementById('book-form');
  const submitBtn = document.getElementById('form-submit-btn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Request Sent!
    `;
    submitBtn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.style.background = '';
      submitBtn.disabled = false;
      form.reset();
    }, 3000);
  });

  // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const offset = 80;
        const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ========== PARALLAX-LIKE VIDEO SLOW SCROLL ==========
  const heroVideo = document.getElementById('hero-video');
  if (heroVideo) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroVideo.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
      }
    }, { passive: true });
  }

});
