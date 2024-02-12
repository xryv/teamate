// teamate\src\pages\register\register.js
console.log("coucou")
import UserDataCenter from '../../../api/models/UserDataCenter';
// Assuming UserDataCenter is available globally or imported correctly
const userDataCenter = new UserDataCenter();
const registrationForm = document.querySelector('#registration-form');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Extract form data
  const email = registrationForm.elements['email'].value;
  const password = registrationForm.elements['password'].value;
  const confirmPassword = registrationForm.elements['confirm-password'].value;

  // Log form submission attempt
  console.log("Attempting to register user...");

  // Validate email and password
  if (!validateEmail(email)) {
    console.error("Invalid email address.");
    // Display error message to user here...
    return;
  }
  if (password !== confirmPassword) {
    console.error("Passwords do not match.");
    // Display error message to user here...
    return;
  }

  // Password strength validation can be added here...

  // If validation passes, attempt to add user
  try {
    const newUser = userDataCenter.addUser({ email, password }); // password should be hashed in production
    console.log("Registration successful:", newUser);

    // Redirect or update UI after successful registration
    window.location.href = '/login.html';
  } catch (error) {
    // Handle errors (e.g., user already exists)
    console.error("Registration failed:", error);
    // Display error message to user here...
  }
});

// Helper function for email validation
function validateEmail(email) {
  // Simple regex for demonstration; use a more robust regex for production
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}
