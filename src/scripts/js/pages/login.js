// Écoute l'événement indiquant que le contenu du DOM est entièrement chargé.
document.addEventListener('DOMContentLoaded', () => {
    console.log("Document chargé. Initialisation de la fonctionnalité de connexion...");

    // Crée une instance de UserDataCenter pour gérer les données des utilisateurs.
    const userDataCenter = new UserDataCenter();

    // Ajoute des utilisateurs de test au UserDataCenter pour faciliter le développement et le test.
    console.log("Pré-remplissage des utilisateurs pour les tests...");
    userDataCenter.addUser(new User('test@example.com', 'password123', 'TestUser', 'Test', 'User', '2000-01-01', 'TestLand'));
    userDataCenter.addUser(new User('jane.doe@example.com', 'securePassword123', 'JaneDoe', 'Jane', 'Doe', '1985-01-01', 'Global Tech'));
    userDataCenter.addUser(new User('john.smith@example.com', 'passwordSecure456', 'JohnSmith', 'John', 'Smith', '1982-02-02', 'Tech Innovations'));
    userDataCenter.addUser(new User('sarah.connor@example.com', 'future123', 'SarahConnor', 'Sarah', 'Connor', '1987-03-03', 'Cybernetics'));
    userDataCenter.addUser(new User('james.bond@example.com', '007Secret', 'JamesBond', 'James', 'Bond', '1965-04-04', 'British Intelligence'));
    userDataCenter.addUser(new User('ada.lovelace@example.com', 'algorithmic', 'AdaLovelace', 'Ada', 'Lovelace', '1815-12-10', 'Analytical Engine Co'));

    // Crée une instance de LoginController, en lui passant le UserDataCenter pour qu'il puisse gérer les tentatives de connexion.
    const loginController = new LoginController(userDataCenter);

    // Crée une instance de LoginView et la lie au LoginController, permettant ainsi à l'interface utilisateur de la page de connexion d'interagir avec les données des utilisateurs.
    new LoginView(loginController);
});