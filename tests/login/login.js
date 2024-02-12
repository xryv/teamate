document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded. Initializing login functionality...");
    const userDataCenter = new UserDataCenter();

    // Example users for testing
    console.log("Pre-populating users for testing...");
    userDataCenter.addUser(new User('test@example.com', 'password123'));

    const loginController = new LoginController(userDataCenter);
    new LoginView(loginController);
});
