function validateForm() {
    // Get input values
    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;

    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email and password
    if (!emailRegex.test(emailValue) || passwordValue.length < 8) {
        displayErrorMessage("Invalid email or password!");
    } else {
        displaySuccessMessage("Valid email and password!");
    }
}

function displayErrorMessage(message) {
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.textContent = message;
    resultMessage.className = "error-message";
}

function displaySuccessMessage(message) {
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.textContent = message;
    resultMessage.className = "success-message";
}