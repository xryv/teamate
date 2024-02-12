class LoginView {
    constructor(loginController) {
        this.loginController = loginController;
        this.initialize(); // Ensure elements are set up in initialize method
    }

    initialize() {
        this.loginForm = document.getElementById('login-form');
        this.feedbackElement = document.getElementById('loginFeedback');
        if (this.loginForm) {
            this.loginForm.addEventListener('submit', (e) => this.handleSubmit(e));
        } else {
            console.error('Login form not found');
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const emailField = this.loginForm.querySelector('input[name="email"]');
        const passwordField = this.loginForm.querySelector('input[name="password"]');
        
        if (!emailField || !passwordField) {
            console.error('Email or password field not found');
            return;
        }

        const email = emailField.value;
        const password = passwordField.value;

        const loginSuccess = this.loginController.login(email, password);
        if (loginSuccess) {
            this.displayFeedback("Login successful!", true);
        } else {
            this.displayFeedback("Login failed: Invalid email or password.", false);
        }
        
    }

    displayFeedback(message, isSuccess) {
        if (this.feedbackElement) {
            this.feedbackElement.textContent = message;
            this.feedbackElement.style.color = isSuccess ? 'green' : 'red';
        } else {
            console.error('Feedback element not found');
        }
    }
    
}
