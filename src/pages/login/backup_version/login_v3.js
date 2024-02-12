class UserAuth {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.init();
    }

    init() {
        this.form.addEventListener('submit', this.handleLoginSubmit.bind(this));
    }

    async handleLoginSubmit(event) {
        event.preventDefault();

        const email = this.form.querySelector('#email').value;
        const password = this.form.querySelector('#password').value;

        if (!this.validateLoginForm(email, password)) {
            return; // Validation failed
        }

        const formData = {
            email: email,
            password: password
        };

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log('Login Success:', data);
            // Handle successful login here (e.g., redirect or update UI)
        } catch (error) {
            console.error('Login Error:', error);
            // Handle login error (e.g., show message to user)
        }
    }

    validateLoginForm(email, password) {
        if (!email || !password) {
            alert('Email and password are required.');
            return false;
        }
        // Add more validations as needed
        return true;
    }
}

// Usage
new UserAuth('login-form');
