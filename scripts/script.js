// Get the button element
var noButton = document.getElementById('noButton');

// Add a mouseover event listener to the button
noButton.addEventListener('mouseover', function() {
    // Generate random x and y coordinates within the window's dimensions
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);

    // Update the button's position
    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
});
