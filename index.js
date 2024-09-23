window.onload = function() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    const userGreeting = document.getElementById('userGreeting');
    const signoutLink = document.getElementById('signoutLink');
    const signinLink = document.getElementById('signinLink');
    const signupLink = document.getElementById('signupLink');

    if (loggedInUser) {
        userGreeting.textContent = `Hello, ${loggedInUser}!`;
        signinLink.style.display = 'none';
        signupLink.style.display = 'none';
        signoutLink.style.display = 'block';
    } else {
        userGreeting.textContent = 'Guest';
        signinLink.style.display = 'block';
        signupLink.style.display = 'block';
        signoutLink.style.display = 'none';
    }

    signoutLink.addEventListener('click', function(event) {
        event.preventDefault();
        sessionStorage.removeItem('loggedInUser');
        alert('You have been signed out.');
        window.location.href = 'index.html';
    });
};
