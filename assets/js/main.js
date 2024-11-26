


// Change the active item as the page is scrolled
window.addEventListener('scroll', function() {
  const navbarHeight = document.querySelector('.navbar').offsetHeight; // Navbar height
  const aboutSection = document.getElementById('about');
  const projectsSection = document.getElementById('projects');
  const contactSection = document.getElementById('contact'); // Contact section
  const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  // Update the active link as the page is scrolled
  navbarLinks.forEach(link => link.classList.remove('active'));
  
  // Trigger color change early based on the scroll position
  if (window.scrollY + navbarHeight < aboutSection.offsetTop) {
    // Home
    document.querySelector('.navbar-nav .nav-link[href="#hero"]').classList.add('active');
  } else if (window.scrollY + navbarHeight >= aboutSection.offsetTop && window.scrollY + navbarHeight < projectsSection.offsetTop) {
    // About
    document.querySelector('.navbar-nav .nav-link[href="#about"]').classList.add('active');
  } else if (window.scrollY + navbarHeight >= projectsSection.offsetTop && window.scrollY + navbarHeight < contactSection.offsetTop) {
    // Projects
    document.querySelector('.navbar-nav .nav-link[href="#projects"]').classList.add('active');
  } else if (window.scrollY + navbarHeight >= contactSection.offsetTop) {
    // Contact
    document.querySelector('.navbar-nav .nav-link[href="#contact"]').classList.add('active');
  }
});

  // Add active class when navbar links are clicked
  const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navbarLinks.forEach(link => {
    link.addEventListener('click', function() {
      navbarLinks.forEach(link => link.classList.remove('active')); // Remove all active classes
      this.classList.add('active'); // Add active class to the clicked link
    });
  });



//changig light and dark modes
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("darkModeToggle").addEventListener("click", function (event) {
      event.preventDefault();
      const body = document.body;
      const darkIcon = document.getElementById("darkIcon");
      const lightIcon = document.getElementById("lightIcon");
  
      // Toggle the dark mode class
      body.classList.toggle("dark-mode");
  
      // Change the visibility of the icons
      if (body.classList.contains("dark-mode")) {
        darkIcon.style.display = "none";
        lightIcon.style.display = "inline";
      } else {
        darkIcon.style.display = "inline";
        lightIcon.style.display = "none";
      }
    });
  });
  