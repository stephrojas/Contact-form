document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name === '' || email === '' || message === '') {
        showMessage('All fields are required.', 'error');
        return;
    }

    // Here you would typically send the form data to your server
    // For this example, we'll just simulate a successful submission
    showMessage('Thank you for your message!', 'success');
    
    // Clear form fields
    document.getElementById('contactForm').reset();
});

function showMessage(message, type) {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = message;
    responseMessage.className = type;
}

// Optional: You can add styles for success and error messages in your CSS