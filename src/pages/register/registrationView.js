class RegistrationView {
    constructor() {
        console.log("Initializing Registration View...");
        this.registerForm = document.getElementById('registration-form');
        this.registerForm.addEventListener('submit', (e) => this.submitHandler(e));
    }

    bindFormSubmit(callback) {
        console.log("Binding form submit callback.");
        this.formSubmitCallback = callback;
    }

    submitHandler(e) {
        e.preventDefault();
        console.log("Form submission event triggered.");
        const formData = new FormData(this.registerForm);
        const userData = Object.fromEntries(formData.entries());
        console.log("Form data captured:", userData);
        this.formSubmitCallback(userData);
        
    }

    displayError(message) {
        // Assume there's an element with the ID 'formFeedback' for displaying messages
        const feedbackElement = document.getElementById('formFeedback');
        feedbackElement.textContent = message;
        feedbackElement.style.color = 'red'; // Example styling for error messages
    }

    displaySuccess(message) {
        const feedbackElement = document.getElementById('formFeedback');
        feedbackElement.textContent = message;
        feedbackElement.style.color = 'green'; // Example styling for success messages
    }

    clearForm() {
        console.log("Clearing form fields.");
        const form = document.getElementById('registration-form');
        if (form) {
            form.reset();
            console.log("Form fields have been cleared.");
        } else {
            console.log("Form not found, cannot clear fields.");
        }
    }
}
