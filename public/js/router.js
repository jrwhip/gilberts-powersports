/* ========================================
   SPA CLIENT-SIDE ROUTER
   Progressive enhancement — pages work
   fully without JS, router prevents
   full reloads when JS is available.
   ======================================== */

(function () {
  'use strict';

  var transitioning = false;

  function isInternalLink(anchor) {
    if (!anchor || !anchor.href) return false;
    if (anchor.target === '_blank') return false;
    if (anchor.hasAttribute('download')) return false;
    if (anchor.href.indexOf('mailto:') === 0) return false;
    if (anchor.href.indexOf('tel:') === 0) return false;
    var rawHref = anchor.getAttribute('href');
    if (!rawHref || rawHref === '#' || rawHref.charAt(0) === '#') return false;

    try {
      var url = new URL(anchor.href);
      if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;
      return url.origin === window.location.origin;
    } catch (e) {
      return false;
    }
  }

  function navigate(url, pushState) {
    if (transitioning) return;
    transitioning = true;

    var main = document.querySelector('main');
    if (!main) {
      window.location.href = url;
      return;
    }

    // Fade out
    main.classList.add('page-exit');

    setTimeout(function () {
      fetch(url)
        .then(function (response) {
          if (!response.ok) throw new Error('Page not found');
          return response.text();
        })
        .then(function (html) {
          var parser = new DOMParser();
          var doc = parser.parseFromString(html, 'text/html');

          // Extract new main content
          var newMain = doc.querySelector('main');
          if (!newMain) {
            window.location.href = url;
            return;
          }

          // Update main content
          main.innerHTML = newMain.innerHTML;

          // Update page title
          var newTitle = doc.querySelector('title');
          if (newTitle) {
            document.title = newTitle.textContent;
          }

          // Update meta description
          var newDesc = doc.querySelector('meta[name="description"]');
          var currentDesc = document.querySelector('meta[name="description"]');
          if (newDesc && currentDesc) {
            currentDesc.setAttribute('content', newDesc.getAttribute('content'));
          }

          // Push state
          if (pushState !== false) {
            history.pushState({ path: url }, '', url);
          }

          // Scroll to top
          window.scrollTo(0, 0);

          // Re-init header active states
          if (window.SiteComponents) {
            window.SiteComponents.loadHeader();
            window.SiteComponents.initScrollReveal();
            window.SiteComponents.initFaqToggles();
          }

          // Run page-specific init if defined
          var pageScripts = doc.querySelectorAll('script');
          pageScripts.forEach(function (script) {
            if (script.src) return; // skip external scripts
            var text = script.textContent;
            // Look for pageInit function declarations
            if (text.indexOf('function pageInit') !== -1 || text.indexOf('pageInit') !== -1) {
              try {
                var fn = new Function(text + '\nif (typeof pageInit === "function") pageInit();');
                fn();
              } catch (e) {
                // silently fail
              }
            }
          });

          // Fade in
          main.classList.remove('page-exit');
          transitioning = false;
        })
        .catch(function () {
          window.location.href = url;
          transitioning = false;
        });
    }, 300); // match CSS transition duration
  }

  // Intercept internal link clicks
  document.addEventListener('click', function (e) {
    var anchor = e.target.closest('a');
    if (!anchor) return;
    if (!isInternalLink(anchor)) return;

    e.preventDefault();
    var href = anchor.href;

    if (href === window.location.href) return;

    navigate(href, true);
  });

  // Handle browser back/forward
  window.addEventListener('popstate', function () {
    navigate(window.location.href, false);
  });

  // Replace initial state
  history.replaceState({ path: window.location.href }, '', window.location.href);
})();
