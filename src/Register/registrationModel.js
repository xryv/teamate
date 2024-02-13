
class RegistrationModel {
    constructor() {
        // This model could handle data validation and user creation
    }

    createUser(email, password, username, name, surname, born, country) {
        console.log("Creating user with:", {email, username, name, surname, born, country});
        // Assume User is a class that has been defined elsewhere
        const newUser = new User(email, password, username, name, surname, born, country);
        console.log("User created:", newUser);
        return newUser;
    }
}
