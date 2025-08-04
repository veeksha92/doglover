  document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.button');

    // Smooth scroll function
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0, // Scrolls to the top of the page
        behavior: 'smooth' // Enables smooth scrolling animation
      });
    });

    // Optional: Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.scrollY > 200) { // Show button after scrolling 200px down
        backToTopButton.style.display = 'flex'; // Use 'flex' if you have display:flex on the button
      } else {
        backToTopButton.style.display = 'none';
      }
    });

    // Initially hide the button if not scrolled down
    if (window.scrollY <= 200) {
      backToTopButton.style.display = 'none';
    }
  });
