// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the buttons
    const button = document.getElementById('changeColorBtn');
    const button2 = document.getElementById('setDefaultColor');

    // Add event listener to button 1 (Change Color)
    button.addEventListener('click', function () {
        // Generate a random color in RGB format
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        
        // Set the background color of the body to the random color
        document.body.style.backgroundColor = randomColor;
    });

    // Add event listener to button 2 (Set Default Color)
    button2.addEventListener('click', function () {
        // Reset the background color to black
        document.body.style.backgroundColor = 'black';
    });
});