window.onload = function() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    const userGreeting = document.getElementById('userGreeting');
    const signoutLink = document.getElementById('signoutLink');
    const signinLink = document.getElementById('signinLink');

    if (loggedInUser) {
        userGreeting.textContent = loggedInUser;
        signinLink.style.display = 'none';
        signoutLink.style.display = 'block';
    } else {
        userGreeting.textContent = 'Guest';
        signinLink.style.display = 'block';
        signoutLink.style.display = 'none';
    }

    signoutLink.addEventListener('click', function() {
        sessionStorage.removeItem('loggedInUser');
        alert('You have been signed out.');
        window.location.href = 'index.html';
    });
};
