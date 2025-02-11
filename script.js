const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Hide navbar on nav link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

//----------------------------------------contact section

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('response').style.display = 'block';
  setTimeout(() => {
      document.getElementById('response').style.display = 'none';
      document.getElementById('contactForm').reset();
  }, 3000);
});

//-----------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".hidden");

  const observer = new  IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add("visible");
      }
    });
  });

  elements.forEach((el) => observer.observe(el));
})