var noButton = document.getElementById('noButton');
var yesButton = document.getElementById('yesButton');

function moveNoButton() {
  var x = Math.floor(Math.random() * window.innerWidth);
  var y = Math.floor(Math.random() * window.innerHeight);

  // Update the button's position
  noButton.style.left = x + 'px';
  noButton.style.top = y + 'px';
}

function displayAlert() {
  alert('See you on 26.02 at 19:00!'); // change this to your needs
}

noButton.addEventListener('mouseover', moveNoButton);
noButton.addEventListener('click', moveNoButton); // in case someone opens it on mobile

yesButton.addEventListener('click', displayAlert);