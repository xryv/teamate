class LoginController {
    // Constructeur avec injection de dépendance pour le centre de données des utilisateurs
    constructor(userDataCenter) {
        this.userDataCenter = userDataCenter; // Référence au stockage des données utilisateur
    }

    // Méthode pour gérer la tentative de connexion d'un utilisateur
    login(email, password) {
        // Récupération de tous les utilisateurs pour trouver une correspondance
        const users = this.userDataCenter.getAllUsers();
        // Recherche d'un utilisateur correspondant à l'email et au mot de passe fournis
        const user = users.find(user => user.getEmail() === email && user.getPassword() === password);

        if (user) {
            console.log("Connexion réussie pour :", email);
            // Retourne vrai pour indiquer le succès de la connexion
            return true;
        } else {
            console.log("Échec de la connexion pour :", email);
            // Retourne faux pour indiquer l'échec de la connexion
            return false;
        }
    }
    // Ajouter ici des méthodes supplémentaires au besoin
}