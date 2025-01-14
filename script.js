// Handles the "Yes" button click
function handleYes() {
    document.getElementById('question').innerHTML = '❤️ I love you too! ❤️';
    document.getElementById('yes-btn').style.display = 'none';
    document.getElementById('no-btn').style.display = 'none';
  }
  
  // Handles the "No" button click
  function handleNo() {
    const noButton = document.getElementById('no-btn');
    
    // Make the "No" button move away
    noButton.style.transition = 'transform 0.5s ease';
    noButton.style.transform = 'translateX(300px) translateY(-200px)';
    
    // Add floating hearts effect on "No" click
    createFloatingHeart();
  
    setTimeout(() => {
      noButton.style.transform = 'translateX(0) translateY(0)';
    }, 500);
  }
  
  // Function to create floating hearts
  function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomDelay = Math.floor(Math.random() * 2) + 1; // Randomize the float speed
    
    heart.style.left = `${randomX}px`;
    heart.style.animationDuration = `${randomDelay}s`;
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
      heart.remove();
    }, randomDelay * 1000); // Remove the heart after animation ends
  }
  