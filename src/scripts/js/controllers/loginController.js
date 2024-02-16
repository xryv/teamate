// Classe LoginController : Gère la logique de connexion des utilisateurs.
class LoginController {
    // Constructeur avec injection de dépendance pour le centre de données des utilisateurs.
    constructor(userDataCenter) {
        this.userDataCenter = userDataCenter; // Stocke une référence au stockage des données utilisateur pour accéder à la liste des utilisateurs.
    }

    // Méthode pour gérer la tentative de connexion d'un utilisateur.
    login(email, password) {
        // Récupère tous les utilisateurs pour trouver une correspondance avec les identifiants fournis.
        const users = this.userDataCenter.getAllUsers();
        // Recherche dans la liste des utilisateurs celui dont l'email et le mot de passe correspondent à ceux fournis.
        const user = users.find(user => user.getEmail() === email && user.getPassword() === password);

        if (user) {
            console.log("Connexion réussie pour :", email); // Log en cas de succès de la connexion.
            return true; // Retourne vrai pour indiquer que l'utilisateur a été correctement authentifié.
        } else {
            console.log("Échec de la connexion pour :", email); // Log en cas d'échec de la connexion.
            return false; // Retourne faux pour signaler l'échec de l'authentification.
        }
    }
    // Des méthodes supplémentaires peuvent être ajoutées ici pour étendre les fonctionnalités liées à la connexion.
}
