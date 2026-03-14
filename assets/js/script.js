/* ============================================================
   Kolabix — Global JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ── Mobile Menu Toggle ─────────────────────────────────── */
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      const icon = hamburger.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars', !isOpen);
        icon.classList.toggle('fa-times', isOpen);
      }
    });

    // Close mobile menu on outside click
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        const icon = hamburger.querySelector('i');
        if (icon) { icon.classList.replace('fa-times', 'fa-bars'); }
      }
    });
  }

  /* ── Sticky Header Shadow ───────────────────────────────── */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Scroll-triggered Fade-in ───────────────────────────── */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
  } else {
    // Fallback: show everything immediately
    document.querySelectorAll('.fade-in').forEach((el) => el.classList.add('visible'));
  }

  /* ── Newsletter Subscribe ───────────────────────────────── */
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach((form) => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      const btn   = form.querySelector('.newsletter-btn');
      if (!input || !input.value.trim()) return;
      const original = btn.textContent;
      btn.textContent = 'Subscribed!';
      btn.style.background = '#059669';
      input.value = '';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
      }, 3000);
    });
  });

  /* ── Active Nav Link Highlight ──────────────────────────── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Smooth Scroll for Anchor Links ────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── AI Agent Page: Contact Form ────────────────────────── */
  const aiForm = document.getElementById('ai-contact-form');
  if (aiForm) {
    aiForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const btn = aiForm.querySelector('[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;

      const data = {
        firstName: aiForm.querySelector('[name="firstName"]')?.value,
        lastName:  aiForm.querySelector('[name="lastName"]')?.value,
        email:     aiForm.querySelector('[name="email"]')?.value,
        company:   aiForm.querySelector('[name="company"]')?.value,
        phone:     aiForm.querySelector('[name="phone"]')?.value,
        solution:  aiForm.querySelector('[name="solution"]')?.value,
        message:   aiForm.querySelector('[name="message"]')?.value,
        source:    'ai-agent-development',
        siteId:    'LS-54ioliz5jv',
      };

      try {
        await fetch('https://oaojaap5re2buacyhw4cycgvza0shopu.lambda-url.us-east-2.on.aws/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        btn.style.background = '#059669';
        aiForm.reset();
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);
      } catch {
        btn.innerHTML = originalText;
        btn.disabled = false;
        alert('Something went wrong. Please email us at ops@kolabix.com');
      }
    });
  }

})();
