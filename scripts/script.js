var noButton = document.getElementById('noButton');

function moveNoButton() {
  var x = Math.floor(Math.random() * window.innerWidth);
  var y = Math.floor(Math.random() * window.innerHeight);

  // Update the button's position
  noButton.style.left = x + 'px';
  noButton.style.top = y + 'px';
}

noButton.addEventListener('mouseover', moveNoButton);
noButton.addEventListener('click', moveNoButton); // in case someone opens it on mobile