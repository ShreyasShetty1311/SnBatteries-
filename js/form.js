/* Contact Form Validation & Toast Notification System */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  
  // Toast Container initialization
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.style.cssText = `
      position: fixed;
      top: 24px;
      right: 24px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 12px;
      pointer-events: none;
    `;
    document.body.appendChild(toastContainer);
  }

  // Toast Functionality
  const showToast = (message, type = 'success') => {
    const toast = document.createElement('div');
    toast.className = `toast-enter`;
    toast.style.cssText = `
      pointer-events: auto;
      width: 320px;
      background-color: var(--color-surface);
      border-left: 4px solid ${type === 'success' ? 'var(--color-success)' : 'var(--color-destructive)'};
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-xl);
      padding: 16px;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      color: var(--color-text-primary);
      font-family: var(--font-body);
      font-size: 14px;
      line-height: 1.4;
    `;

    const iconHtml = type === 'success' 
      ? `<svg width="20" height="20" fill="none" stroke="var(--color-success)" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
      : `<svg width="20" height="20" fill="none" stroke="var(--color-destructive)" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>`;

    toast.innerHTML = `
      <div style="flex-shrink:0; margin-top:2px;">${iconHtml}</div>
      <div style="flex-grow:1;">
        <p style="font-weight:600; margin-bottom:2px;">${type === 'success' ? 'Enquiry Sent!' : 'Error'}</p>
        <p style="color:var(--color-text-secondary); margin:0;">${message}</p>
      </div>
      <button class="toast-close" style="background:none; border:none; color:var(--color-text-muted); cursor:pointer; font-size:16px; padding:0; line-height:1; font-weight:bold;">&times;</button>
    `;

    // Close button event listener
    toast.querySelector('.toast-close').addEventListener('click', () => {
      removeToast(toast);
    });

    toastContainer.appendChild(toast);

    // Auto-dismiss in 4 seconds
    setTimeout(() => {
      removeToast(toast);
    }, 4000);
  };

  const removeToast = (toast) => {
    toast.classList.replace('toast-enter', 'toast-exit');
    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  };

  // Helper for input validation
  const validateInput = (input) => {
    const parent = input.parentElement;
    const errorMsg = parent.querySelector('.form-error-msg');
    let isValid = true;
    let message = '';

    const value = input.value.trim();

    // Reset error classes
    input.classList.remove('input-error');
    if (errorMsg) errorMsg.remove();

    if (input.hasAttribute('required') && !value) {
      isValid = false;
      message = 'This field is required.';
    } else if (value) {
      if (input.type === 'tel') {
        const phoneRegex = /^[6-9]\d{9}$/; // Indian 10-digit format
        if (!phoneRegex.test(value)) {
          isValid = false;
          message = 'Please enter a valid 10-digit mobile number starting with 6-9.';
        }
      } else if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isValid = false;
          message = 'Please enter a valid email address.';
        }
      } else if ((input.id === 'fullname' || input.id === 'wa-fullname') && value.length < 2) {
        isValid = false;
        message = 'Name must be at least 2 characters long.';
      }
    }

    if (!isValid) {
      input.classList.add('input-error');
      const err = document.createElement('span');
      err.className = 'form-error-msg';
      err.textContent = message;
      parent.appendChild(err);
    }

    return isValid;
  };

  // Helper to bind validation events to inputs
  const bindValidationEvents = (inputsArray) => {
    inputsArray.forEach(input => {
      input.addEventListener('blur', () => validateInput(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('input-error')) {
          validateInput(input);
        }
      });
    });
  };

  // 1. Handle Contact Form if it exists
  if (contactForm) {
    const contactInputs = contactForm.querySelectorAll('.input');
    bindValidationEvents(contactInputs);

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isFormValid = true;

      contactInputs.forEach(input => {
        const valid = validateInput(input);
        if (!valid) isFormValid = false;
      });

      if (!isFormValid) {
        showToast('Please correct the validation errors in the form.', 'error');
        return;
      }

      // Submit animation (shows spinner, disables button)
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg style="animation: spin 1s linear infinite; width:16px; height:16px; margin-right:8px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)"></circle>
          <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor"></path>
        </svg> Sending...
      `;

      // Inject spin keyframes style if not exists
      if (!document.getElementById('spin-keyframes')) {
        const style = document.createElement('style');
        style.id = 'spin-keyframes';
        style.textContent = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
        document.head.appendChild(style);
      }

      // Simulate API request (1 second) and then redirect to WhatsApp
      setTimeout(() => {
        const name = document.getElementById('fullname').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const serviceSelect = document.getElementById('service');
        const service = serviceSelect.options[serviceSelect.selectedIndex].text;
        const message = document.getElementById('message').value.trim();

        let text = `Hi SN Batteries,\n\nI would like to make an enquiry:\n\n`;
        text += `*Name:* ${name}\n`;
        text += `*Mobile Number:* ${phone}\n`;
        if (email) {
          text += `*Email:* ${email}\n`;
        }
        text += `*Service Required:* ${service}\n`;
        if (message) {
          text += `*Message:* ${message}\n`;
        }

        const whatsappUrl = `https://wa.me/919880699315?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');

        // Success response
        showToast("Opening WhatsApp to send your enquiry...", 'success');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1000);
    });
  }

  // 2. Handle WhatsApp Enquiry Form (Services Page) if it exists
  const whatsappEnquiryForm = document.getElementById('whatsapp-enquiry-form');
  if (whatsappEnquiryForm) {
    const waInputs = whatsappEnquiryForm.querySelectorAll('.input');
    bindValidationEvents(waInputs);

    whatsappEnquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isFormValid = true;

      waInputs.forEach(input => {
        const valid = validateInput(input);
        if (!valid) isFormValid = false;
      });

      if (!isFormValid) {
        showToast('Please correct the validation errors in the form.', 'error');
        return;
      }

      // Submit animation (shows spinner, disables button)
      const submitBtn = whatsappEnquiryForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg style="animation: spin 1s linear infinite; width:16px; height:16px; margin-right:8px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)"></circle>
          <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor"></path>
        </svg> Sending...
      `;

      // Inject spin keyframes style if not exists
      if (!document.getElementById('spin-keyframes')) {
        const style = document.createElement('style');
        style.id = 'spin-keyframes';
        style.textContent = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
        document.head.appendChild(style);
      }

      // Simulate API request (1 second) and then redirect to WhatsApp
      setTimeout(() => {
        const name = document.getElementById('wa-fullname').value.trim();
        const phone = document.getElementById('wa-phone').value.trim();
        const location = document.getElementById('wa-location').value.trim();
        const optionSelect = document.getElementById('wa-options');
        const optionText = optionSelect.options[optionSelect.selectedIndex].text;
        const message = document.getElementById('wa-message').value.trim();

        let text = `Hi SN Batteries,\n\nI would like to submit my requirements:\n\n`;
        text += `*Name:* ${name}\n`;
        text += `*Mobile Number:* ${phone}\n`;
        text += `*Location:* ${location}\n`;
        text += `*Option Selected:* ${optionText}\n`;
        text += `*Requirement/Message:* ${message}\n`;

        const whatsappUrl = `https://wa.me/919880699315?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');

        // Success response
        showToast("Opening WhatsApp to send your requirements...", 'success');
        whatsappEnquiryForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1000);
    });
  }
});
