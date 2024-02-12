// completeRegister.js
console.log("completeRegister.js loaded successfully.");


import { UserDataCenter } from '../../userDataCenter';

// Assuming the user's email is stored in session storage or a similar mechanism after login
const userEmail = sessionStorage.getItem('userEmail');
const userDataCenter = new UserDataCenter();

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('updateAccountForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form's default submission behavior

        console.log(`Starting complete registration for: ${userEmail}`);

        const updatedProfile = {
            // Assume these fields are added by the user in the complete_register.html form
            username: document.getElementById('username').value,
            name: document.getElementById('first-name').value,
            surname: document.getElementById('last-name').value,
            born: document.getElementById('dob').value,
            country: document.getElementById('country').value,
            // Additional fields as necessary
        };

        try {
            console.log('Attempting to update user profile...');
            
            // Validate necessary data
            if (!updatedProfile.name || !updatedProfile.surname) {
                throw new Error('Required fields are missing.');
            }

            userDataCenter.updateUser(userEmail, updatedProfile);

            console.log('User profile updated successfully.');
            console.dir(updatedProfile);

            // Optionally, redirect the user or confirm the update in the UI
        } catch (error) {
            console.error('Failed to complete user registration:', error);
            // Update the UI to reflect the error to the user
        } finally {
            console.log(`Complete registration attempt for ${userEmail} has concluded.`);
            // Any cleanup actions, like clearing the form or resetting the UI
        }
    });
});
