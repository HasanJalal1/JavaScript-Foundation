// JavaScript to handle button click and toggle heading text
document.getElementById('toggleButton').addEventListener('click', function () {
    // Get the current heading text
    const currentText = document.getElementById('heading').textContent;

    // Toggle between "The most affordable learning platform" and "PW Skills"
    const newText = (currentText === "The most affordable learning platform") ? "PW Skills" : "The most affordable learning platform";

    // Update the heading text
    document.getElementById('heading').textContent = newText;
});