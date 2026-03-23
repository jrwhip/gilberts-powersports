/* ========================================
   SHARED HEADER & FOOTER COMPONENTS
   ======================================== */

(function () {
  'use strict';

  function getBasePath() {
    const path = window.location.pathname;
    return path.indexOf('/utv/') !== -1 ? '../' : '';
  }

  function loadHeader() {
    const el = document.getElementById('site-header');
    if (!el) return;

    const base = getBasePath();
    const path = window.location.pathname;

    const isActive = (href) => {
      if (href === '/') return path === '/' || path === '/index.html';
      return path.indexOf(href) === 0;
    };

    const activeClass = (href) => isActive(href) ? ' class="active"' : '';
    const navCtaClass = (href) => isActive(href) ? ' class="nav-cta active"' : ' class="nav-cta"';
    const utvActive = path.indexOf('/utv/') !== -1 ? ' active' : '';

    el.innerHTML = `
      <header class="site-header" id="siteHeader">
        <div class="container header-inner">
          <a href="${base}index.html" aria-label="Gilbert's Powersports Home">
            <img src="${base}img/gilbert-logo-white.svg" alt="Gilbert's Powersports" class="logo">
          </a>
          <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation">
            <span></span><span></span><span></span>
          </button>
          <ul class="nav-links" id="navLinks">
            <li><a href="${base}services.html"${activeClass('/services')}>Services</a></li>
            <li class="nav-dropdown">
              <button class="nav-dropdown-toggle${utvActive}" aria-expanded="false" aria-haspopup="true">UTVs
                <svg class="dropdown-arrow" viewBox="0 0 12 8"><polyline points="1 1 6 6 11 1"></polyline></svg>
              </button>
              <ul class="nav-dropdown-menu">
                <li><a href="${base}utv/ut6.html">Segway UT6</a></li>
                <li><a href="${base}utv/ut10.html">Segway UT10</a></li>
                <li><a href="${base}utv/ut10-crew.html">Segway UT10 Crew</a></li>
                <li><a href="${base}utv/villain-sx10.html">Segway Villain SX10</a></li>
              </ul>
            </li>
            <li><a href="${base}contact.html"${navCtaClass('/contact')}>Contact Us</a></li>
          </ul>
        </div>
      </header>`;

    initHeaderScroll();
    initMobileMenu();
    initDropdown();
  }

  function loadFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;

    const base = getBasePath();

    el.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-top">
            <div class="footer-brand">
              <img src="${base}img/gilbert-logo-white.svg" alt="Gilbert's Powersports" class="footer-logo">
              <p>Preston, Idaho's premier Segway powersports dealer and multi-generational family repair shop. Side-by-sides, UTVs, parts, and service.</p>
            </div>
            <div class="footer-links">
              <div class="footer-column">
                <h4>Vehicles</h4>
                <ul>
                  <li><a href="${base}utv/ut6.html">Segway UT6</a></li>
                  <li><a href="${base}utv/ut10.html">Segway UT10</a></li>
                  <li><a href="${base}utv/ut10-crew.html">Segway UT10 Crew</a></li>
                  <li><a href="${base}utv/villain-sx10.html">Segway Villain SX10</a></li>
                </ul>
              </div>
              <div class="footer-column">
                <h4>Company</h4>
                <ul>
                  <li><a href="${base}services.html">Services</a></li>
                  <li><a href="${base}contact.html">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p class="footer-copyright">&copy; ${new Date().getFullYear()} Gilbert's Powersports &amp; Repair. All rights reserved.</p>
            <div class="footer-social">
              <a href="https://www.facebook.com/GilbertsRepair/" target="_blank" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/gilbertsrepair" target="_blank" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#060606"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>`;
  }

  function initHeaderScroll() {
    const header = document.getElementById('siteHeader');
    if (!header) return;

    let scrolled = false;

    function onScroll() {
      if (window.scrollY > 60 && !scrolled) {
        header.classList.add('scrolled');
        scrolled = true;
      } else if (window.scrollY <= 60 && scrolled) {
        header.classList.remove('scrolled');
        scrolled = false;
      }
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('navLinks');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        nav.classList.remove('open');
      });
    });

  }

  function initDropdown() {
    const btn = document.querySelector('.nav-dropdown-toggle');
    if (!btn) return;
    const dropdown = btn.closest('.nav-dropdown');
    let pinned = false;
    let closeTimer = null;

    function openMenu() {
      dropdown.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
      dropdown.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      pinned = false;
      clearTimeout(closeTimer);
    }

    // Hover: open immediately, close after 300ms delay (unless pinned)
    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
      openMenu();
    });

    dropdown.addEventListener('mouseleave', () => {
      if (pinned) return;
      closeTimer = setTimeout(closeMenu, 300);
    });

    // Click: if closed → open and pin. If hover-open → pin. If pinned → close.
    btn.addEventListener('click', () => {
      if (pinned) {
        closeMenu();
      } else {
        openMenu();
        pinned = true;
      }
    });

    // Click outside closes and unpins
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        closeMenu();
      }
    });

    // Escape closes and unpins, returns focus to toggle
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dropdown.classList.contains('open')) {
        closeMenu();
        btn.focus();
      }
    });

    // Clicking a dropdown link closes and unpins
    dropdown.querySelectorAll('.nav-dropdown-menu a').forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });
  }

  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal:not(.visible)');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach((el) => observer.observe(el));
  }

  function initFaqToggles() {
    document.querySelectorAll('.faq-question').forEach((q) => {
      q.addEventListener('click', function () {
        this.parentElement.classList.toggle('open');
      });
    });
  }

  window.SiteComponents = {
    loadHeader,
    loadFooter,
    initScrollReveal,
    initFaqToggles,
    initHeaderScroll,
    initMobileMenu,
    initDropdown
  };

  document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    initScrollReveal();
    initFaqToggles();
  });
})();
