/* ========================================
   CONTACT FORM HANDLER
   Works as mailto: fallback without Amplify,
   wired to Amplify DataStore when available.
   ======================================== */

(function () {
  'use strict';

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

      // Check if Amplify is configured
      if (window.AmplifyContactAPI && typeof window.AmplifyContactAPI.submit === 'function') {
        window.AmplifyContactAPI.submit({
          name: name,
          email: email,
          phone: phone,
          subject: subject,
          message: message
        }).then(function () {
          showMessage('Message sent successfully! We\'ll get back to you soon.', 'success');
          form.reset();
        }).catch(function () {
          showMessage('Something went wrong. Please try again or call us directly.', 'error');
        }).finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        });
      } else {
        // Fallback: mailto link
        var mailtoSubject = encodeURIComponent('[' + subject + '] Message from ' + name);
        var mailtoBody = encodeURIComponent(
          'Name: ' + name + '\n' +
          'Email: ' + email + '\n' +
          'Phone: ' + (phone || 'Not provided') + '\n' +
          'Subject: ' + subject + '\n\n' +
          message
        );

        window.location.href = 'mailto:?subject=' + mailtoSubject + '&body=' + mailtoBody;

        showMessage('Your email client should open with the message. If it doesn\'t, please call us directly.', 'success');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
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
