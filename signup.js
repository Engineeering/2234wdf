document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the default form submission behavior
    
    // Get the user input from the form
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Store user data in local storage (or can use sessionStorage)
    const user = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(user));
    
    // Redirect or notify user of successful sign-up
    alert('Sign-up successful! You can now sign in.');
    window.location.href = 'signin.html'; // Redirect to the sign-in page
});
