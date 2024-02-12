// login.js
import UserDataCenter from '../../../api/models/UserDataCenter.js';

const userDataCenter = new UserDataCenter();
const loginForm = document.querySelector('#login form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Extract form data
  const email = loginForm.elements['email'].value;
  const password = loginForm.elements['password'].value;

  // Log form submission attempt
  console.log("Attempting to log in user...");

  // Validate email
  if (!validateEmail(email)) {
    console.error("Invalid email address.");
    // Display error message to user here...
    return;
  }

  // Attempt to find user and check credentials
  try {
    const user = userDataCenter.findUser({ email: email });
    if (user.length === 0 || user[0].password !== password) { // Assuming password is stored and checked here
      console.error("Invalid login credentials.");
      // Display error message to user here...
      return;
    }

    console.log("Login successful:", user);
    // Proceed with user session creation and page redirection after successful login
    // window.location.href = '/dashboard.html';
  } catch (error) {
    // Handle errors (e.g., user not found or server error)
    console.error("Login failed:", error);
    // Display error message to user here...
  }
});

// Helper function for email validation
function validateEmail(email) {
  // Simple regex for demonstration; use a more robust regex for production
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}
