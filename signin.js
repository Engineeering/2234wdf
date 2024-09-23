document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the default form submission behavior

    // Get the user input from the form
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Retrieve stored user data from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if the username and password match the stored data
    if (storedUser && storedUser.username === username && storedUser.password === password);
        // Store session information
        sessionStorage.setItem('loggedInUser', username);
        window.location.href = 'index.html'; // Redirect to home page after sign-in
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
