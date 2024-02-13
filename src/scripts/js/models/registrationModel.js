
class RegistrationModel {
    constructor() {
       
    }

    createUser(email, password, username, name, surname, born, country) {
        console.log("Creating user with:", {email, username, name, surname, born, country});
        const newUser = new User(email, password, username, name, surname, born, country);
        console.log("User created:", newUser);
        return newUser;
    }
}
