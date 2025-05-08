document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelector('.nav-links');
  
    if (logo && navLinks) {
      logo.addEventListener('click', () => {
        navLinks.classList.toggle('open');
      });
    }
  });
  