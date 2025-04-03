
// Simple JavaScript functionality

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  let menuOpen = false;
  
  if (menuBtn) {
    menuBtn.addEventListener('click', function() {
      if (!menuOpen) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.padding = '1rem';
        navLinks.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navLinks.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        menuBtn.textContent = 'Close';
        menuOpen = true;
      } else {
        navLinks.style.display = '';
        menuBtn.textContent = 'Menu';
        menuOpen = false;
      }
    });
  }
  
  // Scroll to top functionality
  const scrollTopBtn = document.getElementById('scroll-to-top');
  
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Simple form handling
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Simple validation
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      // For demo purposes, just log the form data
      console.log({
        name,
        email,
        subject,
        message
      });
      
      // Show a success message
      alert('Thank you for your message! I will get back to you soon.');
      
      // Reset the form
      contactForm.reset();
    });
  }
  
  // Simple scroll animation
  function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    const projectCards = document.querySelectorAll('.project-card');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight - 150) {
        section.classList.add('fade-in');
      }
    });
    
    projectCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (cardTop < windowHeight - 100) {
        card.classList.add('fade-in');
      }
    });
  }
  
  // Run once on load
  revealOnScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', revealOnScroll);
});
