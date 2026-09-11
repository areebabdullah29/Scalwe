document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-reveal-delay]').forEach((el) => {
    el.style.setProperty('--reveal-delay', el.dataset.revealDelay);
  });

  const revealEls = document.querySelectorAll('.reveal');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  const bars = document.querySelector('.bars');
  if (bars) {
    const startBars = () => {
      bars.querySelectorAll('span').forEach((bar) => {
        bar.style.setProperty('--bar-height', `${bar.dataset.height}%`);
      });
      bars.classList.add('is-animated');
    };
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      startBars();
    } else {
      const barsObserver = new IntersectionObserver(
        (entries, observer) => {
          if (entries[0].isIntersecting) {
            startBars();
            observer.disconnect();
          }
        },
        { threshold: 0.4 }
      );
      barsObserver.observe(bars);
    }
  }

  const countEls = document.querySelectorAll('.count-up');
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.countTo);
    const suffix = el.dataset.suffix || '';
    const isDecimal = String(el.dataset.countTo).includes('.');
    const duration = 1400;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = `${isDecimal ? value.toFixed(1) : Math.round(value)}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  if (countEls.length) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      countEls.forEach((el) => {
        el.textContent = `${el.dataset.countTo}${el.dataset.suffix || ''}`;
      });
    } else {
      const countObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      countEls.forEach((el) => countObserver.observe(el));
    }
  }
});
