class RegistrationController {
    constructor(registrationModel, registrationView, userDataCenter) {
        console.log("Initializing Registration Controller...");
        this.registrationModel = registrationModel;
        this.registrationView = registrationView;
        this.userDataCenter = userDataCenter;
        
        this.registrationView.bindFormSubmit(this.handleRegisterUser.bind(this));
        console.log("Form submission handler bound.");
    }

    handleRegisterUser(formData) {
        console.log("Handling user registration with data:", formData);
        
        const isValid = this.validateFormData(formData);
        if (!isValid) {
            this.registrationView.displayError("Validation failed. Please check your input.");
            return;
        }
        
        try {
            console.log("Form data validation passed. Creating new user...");
            const newUser = this.registrationModel.createUser(formData.email, formData.password, formData.username, formData.name, formData.surname, formData.born, formData.country);
            if (newUser) {
                this.userDataCenter.addUser(newUser);
                this.registrationView.displaySuccess("User registered successfully.");
            } else {
                this.registrationView.displayError("An error occurred during registration.");
            }
            
            console.log("New user created successfully:", newUser);

            this.userDataCenter.addUser(newUser); // Add new user to UserDataCenter
            console.log("Current users in UserDataCenter:", this.userDataCenter.getAllUsers()); // Log all users       

            this.registrationView.displaySuccess("User registered successfully.");
            this.registrationView.clearForm();
            
        } catch (error) {
            console.error("Error occurred during user registration:", error);
            this.registrationView.displayError("An error occurred during registration.");
        }
    }

    validateFormData(formData) {
        console.log("Validating form data...");

        // Validate each field using the functions from validations.js
        if (!validateEmail(formData.email)) {
            console.log("Invalid email format.");
            return false;
        }
        if (!validatePassword(formData.password)) {
            console.log("Password does not meet the length requirement.");
            return false;
        }
        if (!validateUsername(formData.username)) {
            console.log("Invalid username format.");
            return false;
        }
        if (!validateFirstName(formData.name)) {
            console.log("First name cannot be empty.");
            return false;
        }
        if (!validateLastName(formData.surname)) {
            console.log("Last name cannot be empty.");
            return false;
        }
        if (!validateDateOfBirth(formData.born)) {
            console.log("Invalid date of birth.");
            return false;
        }
        if (!validateCountry(formData.country)) {
            console.log("Country cannot be empty.");
            return false;
        }

        // If all validations pass
        console.log("All validations passed.");
        return true;
    }
}
