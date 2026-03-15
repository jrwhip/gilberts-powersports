/* ========================================
   CONTACT FORM HANDLER
   Sends form submissions to Lambda + SES
   ======================================== */

(function () {
  'use strict';

  var CONTACT_URL = 'https://iwqj4dq2stas3rbnikkwqeft740jljqn.lambda-url.us-west-2.on.aws/';

  function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    var messageEl = document.getElementById('formMessage');
    var submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('contactName').value.trim();
      var email = document.getElementById('contactEmail').value.trim();
      var phone = document.getElementById('contactPhone').value.trim();
      var subject = document.getElementById('contactSubject').value;
      var message = document.getElementById('contactMessage').value.trim();

      // Basic validation
      if (!name || !email || !subject || !message) {
        showMessage('Please fill in all required fields.', 'error');
        return;
      }

      if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      fetch(CONTACT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          subject: subject,
          message: message
        })
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.success) {
            showMessage('Message sent successfully! We\'ll get back to you soon.', 'success');
            form.reset();
          } else {
            showMessage(data.error || 'Something went wrong. Please try again or call us directly.', 'error');
          }
        })
        .catch(function () {
          showMessage('Something went wrong. Please try again or call us directly.', 'error');
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        });
    });

    function showMessage(text, type) {
      messageEl.textContent = text;
      messageEl.className = 'form-message ' + type;
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  }

  // Init on DOMContentLoaded or immediately if already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
  } else {
    initContactForm();
  }

  // Expose for SPA re-init
  window.initContactForm = initContactForm;
})();
