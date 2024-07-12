document.getElementById('login')?.addEventListener('submit', async function(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  console.log('Submitting login form:', { email, password });

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (data.success) {
      alert('Login successful!');
      console.log('Login successful:', data);
      // Redirect to dashboard.html
      window.location.href = 'dashboard.html';
    } else {
      alert('Login failed: ' + data.message);
      console.log('Login failed:', data);
    }
  } catch (error) {
    alert('An error occurred during login');
    console.error('Login error:', error);
  }
});

document.getElementById('signup')?.addEventListener('submit', async function(event) {
  event.preventDefault();
  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;

  console.log('Submitting signup form:', { username, email, password, confirmPassword });

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  try {
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();
    if (data.success) {
      alert('Signup successful!');
      console.log('Signup successful:', data);
      // Redirect or update UI as needed
    } else {
      alert('Signup failed: ' + data.message);
      console.log('Signup failed:', data);
    }
  } catch (error) {
    alert('An error occurred during signup');
    console.error('Signup error:', error);
  }
});
