const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const menuIcon = mobileMenu.querySelector('i');

mobileMenu.addEventListener('click', () => {

  navLinks.classList.toggle('active');
  

  if (navLinks.classList.contains('active')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
});

const typewriterSpan = document.getElementById('typewriter-text');
const phrases = ['Software Engineer', 'Junior Backend Developer (.NET)'];
let phraseIndex = 0; 
let charIndex = 0; 
let isErasing = false; 
let typeSpeed = 100; 
let eraseSpeed = 50; 
let delayBetweenPhrases = 2000; 


function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  

  if (isErasing) {

    typewriterSpan.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {

    typewriterSpan.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isErasing && charIndex === currentPhrase.length) {

    isErasing = true;
    setTimeout(typeEffect, delayBetweenPhrases);
  } 

  else if (isErasing && charIndex === 0) {
    isErasing = false;

    phraseIndex++;

    if (phraseIndex === phrases.length) {
      phraseIndex = 0;
    }

    setTimeout(typeEffect, 500);
  } 

  else {

    setTimeout(typeEffect, isErasing ? eraseSpeed : typeSpeed);
  }
}

document.addEventListener('DOMContentLoaded', typeEffect);

const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');


const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3 
};


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      
      navItems.forEach(link => {
        link.classList.remove('active');
      });
      

      const activeId = entry.target.getAttribute('id');

      const activeLink = document.querySelector(`.nav-links a[href="#${activeId}"]`);
      
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});