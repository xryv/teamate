// register.js

console.log("register.js loaded successfully.");

import { UserDataCenter } from '../../userDataCenter';

// Initialize UserDataCenter outside of the event listener to ensure it's a single instance
const userDataCenter = new UserDataCenter();

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // Prevent the form's default submission behavior

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value; // In practice, handle securely
        const confirmPassword = document.getElementById('confirm-password').value;

        // Log initial attempt to register a user
        console.log('Attempting to register user with email:', email);

        try {
            if (password !== confirmPassword) {
                throw new Error('Passwords do not match.'); // Throwing error for mismatched passwords
            }

            // Check if the email already exists in the users array
            console.log('Checking if email already exists...');
            const existingUser = userDataCenter.queryData(email);
            if (existingUser) {
                throw new Error('Email already exists.'); // Throwing error for existing email
            }

            // Create user with the provided email and password
            console.log('Creating user...');
            const newUser = userDataCenter.createUser({
                email: email,
                password: password, // Note: This is for illustration only. Implement secure password handling.
                username: '', name: '', surname: '', born: '', country: '', state: '', role: 'player'
            });

            console.log('User registration successful:', newUser);
            // Redirect or update UI to reflect successful registration
        } catch (error) {
            console.error('Registration error:', error.message);
            // Optionally, update the UI to show the error to the user
        } finally {
            console.log('Registration attempt for email:', email, 'has concluded.');
            // Any cleanup or final actions, such as resetting form fields
        }
    });
});
