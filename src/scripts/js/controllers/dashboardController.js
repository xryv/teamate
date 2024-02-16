// Classe DashboardController : Gère les interactions dans la page du tableau de bord.
class DashboardController {
    // Constructeur qui initialise le contrôleur avec une référence vers UserDataCenter.
    constructor(userDataCenter) {
        this.userDataCenter = userDataCenter; // Stockage de la référence vers l'instance de UserDataCenter pour gérer les données utilisateurs.
        console.log('DashboardController initialisé.'); // Message de log pour indiquer l'initialisation du contrôleur.
    }

    // Méthode pour récupérer tous les utilisateurs du système.
    getAllUsers() {
        console.log('Récupération de tous les utilisateurs.'); // Log pour suivre l'exécution.
        return this.userDataCenter.getAllUsers(); // Appelle la méthode getAllUsers de UserDataCenter pour obtenir tous les utilisateurs.
    }

    // Méthode pour supprimer un utilisateur à partir de son email.
    deleteUser(email) {
        console.log(`Suppression de l'utilisateur avec l'email : ${email}`); // Log indiquant l'action de suppression.
        this.userDataCenter.deleteUserByEmail(email); // Appelle deleteUserByEmail de UserDataCenter pour supprimer l'utilisateur spécifié.

        // Vérifie si une vue est associée et si elle possède une méthode renderUsers pour la mise à jour de l'affichage.
        if (this.view && typeof this.view.renderUsers === 'function') {
            // Si une méthode de rendu des utilisateurs est présente, l'appelle avec la liste mise à jour des utilisateurs.
            this.view.renderUsers(this.getAllUsers());
        }
    }
}
