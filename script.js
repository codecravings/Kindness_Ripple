// Function to send OTP to the user's email
document.getElementById('sendOtp').addEventListener('click', function() {
    const email = document.querySelector('input[name="email"]').value;

    if (!email) {
        alert('Please enter an email address first.');
        return;
    }

    fetch('send_otp.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('OTP sent to your email!');
        } else {
            alert('Error: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Function to handle form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Check if password matches confirm password
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirm_password"]').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    let formData = new FormData(event.target);

    fetch('submit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Registration successful! Please check your email for verification.');
        } else {
            alert('Error: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const bcrypt = require('bcrypt');

// Hash a password
const saltRounds = 10;
bcrypt.hash('user_password', saltRounds, function(err, hash) {
    if (err) throw err;
    // Store hash in your password database.
    console.log(hash);
});

// Check a password against a hash
bcrypt.compare('user_password', 'stored_hash', function(err, result) {
    if (err) throw err;
    if (result) {
        console.log('Password is correct!');
    } else {
        console.log('Password is incorrect.');
    }
});
