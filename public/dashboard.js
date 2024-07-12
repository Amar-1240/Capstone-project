document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch user data and update UI
    fetchUserData()
        .then(data => {
            console.log('User details:', data);
            displayWelcomeMessage(data.username);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });

    // Function to fetch user data
    async function fetchUserData() {
        try {
            const response = await fetch('/user/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const data = await response.json();
            return data; // Assuming data contains { username: 'John Doe' }
        } catch (error) {
            throw error;
        }
    }

    // Function to display the welcome message with the username
    function displayWelcomeMessage(username) {
        const welcomeMessage = document.querySelector('.welcome-message');
        if (welcomeMessage) {
            welcomeMessage.textContent = `Welcome, ${username}!`;
        }
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-list a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to the top when clicking on the Home link
    const homeLink = document.querySelector('a[href="#home"]');

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
