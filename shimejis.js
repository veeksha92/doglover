document.addEventListener('DOMContentLoaded', () => {
  const shimejiContainer = document.getElementById('shimejiContainer');
  const walkingGif = document.getElementById('walkingGif');
  const clickedGif = document.getElementById('clickedGif');

  // initialization 
  let position = 0; // current position of gif
  let direction = 1; // 1 for right, -1 for left
  const speed = 2; // Pixels per frame


  //function to animate the shimeji
  function animateShimeji() {
    //width of the window and shimeji container
    const containerWidth = window.innerWidth;
    const shimejiWidth = shimejiContainer.offsetWidth;

    //checking for collisions to reverse direction
    position += direction * speed;
    shimejiContainer.style.left = position + 'px'; //setup of the new position

    // Reverse direction if hitting boundaries
    if (position + shimejiWidth > containerWidth && direction === 1) {
      direction = -1;
      walkingGif.style.transform = 'scaleX(-1)'; // Flip horizontally for left movement
    } else if (position < 0 && direction === -1) {
      direction = 1;
      walkingGif.style.transform = 'scaleX(1)'; // Original orientation for right movement
    }

    requestAnimationFrame(animateShimeji); //request next shimeji when clicked
  }

  shimejiContainer.addEventListener('click', () => {
    // Toggle visibility of GIFs
    if (walkingGif.style.display !== 'none') {
      walkingGif.style.display = 'none';
      clickedGif.style.display = 'block';
      // Optionally hide the clicked GIF after a few seconds
      setTimeout(() => {
        clickedGif.style.display = 'none';
        walkingGif.style.display = 'block';
      }, 3000); // Display for 3 seconds
    }
  });

  // Start the walking animation only if the walking GIF is initially visible
  if (walkingGif.style.display !== 'none') {
    animateShimeji();
  }
});