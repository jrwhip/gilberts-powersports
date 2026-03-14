/* ========================================
   SHARED HEADER & FOOTER COMPONENTS
   ======================================== */

(function () {
  'use strict';

  function getBasePath() {
    var path = window.location.pathname;
    if (path.indexOf('/utv/') !== -1) {
      return '../';
    }
    return '';
  }

  function loadHeader() {
    var el = document.getElementById('site-header');
    if (!el) return;

    var base = getBasePath();
    var path = window.location.pathname;

    function isActive(href) {
      if (href === '/') return path === '/' || path === '/index.html';
      return path.indexOf(href) === 0;
    }

    function activeClass(href) {
      return isActive(href) ? ' class="active"' : '';
    }

    function navCtaClass(href) {
      return isActive(href) ? ' class="nav-cta active"' : ' class="nav-cta"';
    }

    el.innerHTML =
      '<header class="site-header" id="siteHeader">' +
        '<div class="container header-inner">' +
          '<a href="' + base + 'index.html" aria-label="Gilbert\'s Powersports Home">' +
            '<img src="' + base + 'img/gilbert-logo-white.svg" alt="Gilbert\'s Powersports" class="logo">' +
          '</a>' +
          '<button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation">' +
            '<span></span><span></span><span></span>' +
          '</button>' +
          '<ul class="nav-links" id="navLinks">' +
            '<li><a href="' + base + 'services.html"' + activeClass('/services') + '>Services</a></li>' +
            '<li class="nav-dropdown">' +
              '<a href="#"' + (path.indexOf('/utv/') !== -1 ? ' class="active"' : '') + '>UTVs ' +
                '<svg class="dropdown-arrow" viewBox="0 0 12 8"><polyline points="1 1 6 6 11 1"></polyline></svg>' +
              '</a>' +
              '<ul class="nav-dropdown-menu">' +
                '<li><a href="' + base + 'utv/ut6.html">Segway UT6</a></li>' +
                '<li><a href="' + base + 'utv/ut10.html">Segway UT10</a></li>' +
                '<li><a href="' + base + 'utv/ut10-crew.html">Segway UT10 Crew</a></li>' +
                '<li><a href="' + base + 'utv/villain-sx10.html">Segway Villain SX10</a></li>' +
              '</ul>' +
            '</li>' +
            '<li><a href="' + base + 'mccormick.html"' + activeClass('/mccormick') + '>McCormick</a></li>' +
            '<li><a href="' + base + 'contact.html"' + navCtaClass('/contact') + '>Contact Us</a></li>' +
          '</ul>' +
        '</div>' +
      '</header>';

    initHeaderScroll();
    initMobileMenu();
  }

  function loadFooter() {
    var el = document.getElementById('site-footer');
    if (!el) return;

    var base = getBasePath();

    el.innerHTML =
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<div class="footer-top">' +
            '<div class="footer-brand">' +
              '<img src="' + base + 'img/gilbert-logo-white.svg" alt="Gilbert\'s Powersports" class="footer-logo">' +
              '<p>Utah\'s premier Segway powersports dealer and multi-generational family repair shop. Side-by-sides, UTVs, tractors, parts, and service.</p>' +
            '</div>' +
            '<div class="footer-links">' +
              '<div class="footer-column">' +
                '<h4>Vehicles</h4>' +
                '<ul>' +
                  '<li><a href="' + base + 'utv/ut6.html">Segway UT6</a></li>' +
                  '<li><a href="' + base + 'utv/ut10.html">Segway UT10</a></li>' +
                  '<li><a href="' + base + 'utv/ut10-crew.html">Segway UT10 Crew</a></li>' +
                  '<li><a href="' + base + 'utv/villain-sx10.html">Segway Villain SX10</a></li>' +
                  '<li><a href="' + base + 'mccormick.html">McCormick Tractors</a></li>' +
                '</ul>' +
              '</div>' +
              '<div class="footer-column">' +
                '<h4>Company</h4>' +
                '<ul>' +
                  '<li><a href="' + base + 'services.html">Services</a></li>' +
                  '<li><a href="' + base + 'contact.html">Contact</a></li>' +
                '</ul>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="footer-bottom">' +
            '<p class="footer-copyright">&copy; ' + new Date().getFullYear() + ' Gilbert\'s Powersports &amp; Repair. All rights reserved.</p>' +
            '<div class="footer-social">' +
              '<a href="#" aria-label="Facebook">' +
                '<svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>' +
              '</a>' +
              '<a href="#" aria-label="Instagram">' +
                '<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>' +
              '</a>' +
              '<a href="#" aria-label="YouTube">' +
                '<svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#060606"/></svg>' +
              '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</footer>';
  }

  function initHeaderScroll() {
    var header = document.getElementById('siteHeader');
    if (!header) return;

    var scrolled = false;

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
    var toggle = document.getElementById('menuToggle');
    var nav = document.getElementById('navLinks');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('active');
        nav.classList.remove('open');
      });
    });
  }

  function initScrollReveal() {
    var reveals = document.querySelectorAll('.reveal:not(.visible)');
    if (!reveals.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initFaqToggles() {
    document.querySelectorAll('.faq-question').forEach(function (q) {
      q.addEventListener('click', function () {
        this.parentElement.classList.toggle('open');
      });
    });
  }

  // Expose globally
  window.SiteComponents = {
    loadHeader: loadHeader,
    loadFooter: loadFooter,
    initScrollReveal: initScrollReveal,
    initFaqToggles: initFaqToggles,
    initHeaderScroll: initHeaderScroll,
    initMobileMenu: initMobileMenu
  };

  // Auto-init on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {
    loadHeader();
    loadFooter();
    initScrollReveal();
    initFaqToggles();
  });
})();
