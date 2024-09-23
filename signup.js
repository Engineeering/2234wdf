document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the default form submission behavior

    // Get the user input from the form
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Basic validation
    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Check if a user already exists
    const existingUser = JSON.parse(localStorage.getItem('user'));
    if (existingUser && existingUser.username === username) {
        alert('Username already exists. Please choose a different one.');
        return;
    }

    // Store user data in local storage
    const user = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(user));

    // Notify user of successful sign-up
    alert('Sign-up successful! You can now sign in.');
    window.location.href = 'signin.html'; // Redirect to the sign-in page
});
