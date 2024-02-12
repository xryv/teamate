document.addEventListener('DOMContentLoaded', () => {
    console.log("Document chargé. Initialisation de la fonctionnalité de connexion...");
    const userDataCenter = new UserDataCenter();

    // Exemples d'utilisateurs pour le test
    console.log("Pré-remplissage des utilisateurs pour les tests...");
    userDataCenter.addUser(new User('test@example.com', 'password123'));

    const loginController = new LoginController(userDataCenter);
    new LoginView(loginController);
});
