// Déclaration de la classe UserDataCenter pour gérer les données des utilisateurs.
class UserDataCenter {
    // Constructeur de la classe, initialise la liste des utilisateurs.
    constructor() {
        this.users = []; // Initialisation d'un tableau vide pour stocker les utilisateurs.
        console.log('UserDataCenter initialisé.'); // Affichage dans la console pour indiquer que l'instance est prête.
    }
  
    // Méthode pour ajouter un nouvel utilisateur à la liste.
    addUser(user) {
        this.users.push(user); // Ajoute l'utilisateur passé en argument à la liste des utilisateurs.
    }

    // Méthode pour changer le rôle d'un utilisateur spécifique.
    setUserRole(email, newRole) {
        const user = this.users.find(user => user.email === email); // Recherche l'utilisateur par email.
        if (user) {
            user.role = newRole; // Si l'utilisateur est trouvé, son rôle est mis à jour avec le nouveau rôle.
        }
    }

    // Méthode pour récupérer la liste des utilisateurs ayant un rôle spécifique.
    getUsersByRole(role) {
        return this.users.filter(user => user.role === role); // Retourne un nouveau tableau contenant uniquement les utilisateurs avec le rôle spécifié.
    }
  
    // Méthode pour obtenir la liste de tous les utilisateurs.
    getAllUsers() {
        return this.users; // Retourne le tableau complet des utilisateurs.
    }
  
    // Méthode pour supprimer un utilisateur à partir de son email.
    deleteUserByEmail(email) {
        this.users = this.users.filter(user => user.email !== email); // Met à jour la liste des utilisateurs en excluant celui avec l'email donné.
    }

    // Méthode pour précharger des utilisateurs fictifs dans la liste des utilisateurs.
    preloadUsers() {
        const mockUsers = [ // Définit une liste d'utilisateurs fictifs pour les tests ou la démonstration.
            // Création d'instances d'utilisateurs fictifs avec des données préétablies.
            new User("player1@example.com", "password123", "PlayerOne", "Player", "One", "1995-01-01", "TechLand", "Joueur", "Active"),
            new User("admin1@example.com", "adminPassword123", "AdminOne", "Admin", "One", "1990-02-02", "AdminVille", "Admin", "Inactive"),
            new User("player2@example.com", "password456", "PlayerTwo", "Player", "Two", "1998-03-03", "GameCity", "Joueur", "Suspended"),
            new User("player3@example.com", "password789", "PlayerThree", "Player", "Three", "1996-04-04", "Playground", "Joueur", "Active"),
            new User("admin2@example.com", "adminPassword456", "AdminTwo", "Admin", "Two", "1985-05-05", "ControlCenter", "Admin", "Active")
        ];
        this.users.push(...mockUsers); // Ajoute les utilisateurs fictifs à la liste des utilisateurs existants.
        console.log('preloaded into UserDataCenter...'); // Affichage dans la console pour indiquer le préchargement des données.
    }
}
