var noButton = document.getElementById('noButton');
var yesButton = document.getElementById('yesButton');
var buttonWidth = noButton.offsetWidth;
var buttonHeight = noButton.offsetHeight;

function moveNoButton() {
  noButton.style.position = 'absolute';

  var x = Math.floor(Math.random() * (window.innerWidth - buttonWidth));
  var y = Math.floor(Math.random() * (window.innerHeight - buttonHeight)); 

  // Update the button's position
  noButton.style.left = x + 'px';
  noButton.style.top = y + 'px';

  setTimeout(function() {
    noButton.style.position = 'static';
  }, 1000);
}

function displayAlert() {
  alert('See you on 26.02 at 19:00!'); // Pass this to your needs
}

noButton.addEventListener('mouseover', moveNoButton);
noButton.addEventListener('click', moveNoButton); // In case someone opens it on mobile
yesButton.addEventListener('click', displayAlert);
