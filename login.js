document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5000/api/login', { // Replace with your actual API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            // Handle successful login
            localStorage.setItem('user', JSON.stringify(data.user)); // Store user data
            document.getElementById('message').textContent = 'Login successful!';
            // Redirect to another page
            window.location.href = 'index.html'; 
        } else {
            // Handle errors
            const errorData = await response.json();
            document.getElementById('message').textContent = `Error: ${errorData.message}`;
        }
    } catch (error) {
        // Handle network errors
        document.getElementById('message').textContent = `Network error: ${error.message}`;
    }
    document.getElementById('login-form').addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        // Simulate API call to validate login
        const response = await fetch('db.json'); // Replace with your actual endpoint
        const data = await response.json();
    
        const user = data.users.find((user) => user.email === email && user.password === password);
    
        if (user) {
            alert('Login Successful!');
            // Redirect to homepage or dashboard
            window.location.href = 'index.html';
        } else {
            alert('Invalid Email or Password');
        }
    });
});