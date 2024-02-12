// login.js
console.log("login.js loaded successfully.");

import { UserDataCenter } from '../../userDataCenter';

const userDataCenter = new UserDataCenter();

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form's default submission behavior

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value; // Reminder: In real applications, handle securely

        console.log(`Attempting login for: ${email}`);

        try {
            // Assuming a method exists for validating users (this would typically involve checking a hashed password)
            const user = userDataCenter.queryData(email);
            if (!user) {
                throw new Error('User not found.');
            }

            // Placeholder for password validation - in real scenarios, you'd compare hashed passwords
            if (user.password !== password) {
                throw new Error('Invalid password.');
            }

            console.log('Login successful:', email);
            alert('Login successful!'); // Display an alert for successful login

            // Set user email in session storage to use in subsequent steps or pages
            sessionStorage.setItem('userEmail', email);

            // Optionally, redirect the user to another page or update the UI to show they're logged in
            // window.location.href = '/path/to/next/page.html'; // Uncomment to redirect
        } catch (error) {
            console.error('Login attempt failed:', error);
            alert('Login failed: ' + error.message); // Optionally, alert the user of the failure
        } finally {
            console.log(`Login attempt for ${email} has concluded.`);
            // Any cleanup actions, like clearing the form
        }
    });
});
