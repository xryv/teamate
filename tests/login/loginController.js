class LoginController {
    constructor(userDataCenter) {
        this.userDataCenter = userDataCenter;
    }

    login(email, password) {
        const users = this.userDataCenter.getAllUsers();
        const user = users.find(user => user.getEmail() === email && user.getPassword() === password);
        if (user) {
            console.log("Login successful for:", email);
            return true; // Indicate login success
        } else {
            console.log("Login failed for:", email);
            return false; // Indicate login failure
        }
    }
}
