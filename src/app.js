function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');

  // Random horizontal position
  flower.style.left = Math.random() * 100 + 'vw';

  // Random animation duration
  flower.style.animationDuration = Math.random() * 3 + 5 + 's';

  // Add flower to the shower container
  document.getElementById('flower-shower').appendChild(flower);

  // Remove flower after animation is done
  setTimeout(() => {
    flower.remove();
  }, 5000); // Keep in sync with the animation duration
}

// Generate flowers every 300ms
setInterval(createFlower, 300);
