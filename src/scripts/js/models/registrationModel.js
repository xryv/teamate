// Classe RegistrationModel pour gérer l'enregistrement des utilisateurs.
class RegistrationModel {
    constructor() {
        // Le constructeur est actuellement vide. 
        // Il pourrait être utilisé à l'avenir pour initialiser des propriétés ou des dépendances nécessaires à la création de l'utilisateur.
    }

    // Méthode pour créer un nouvel utilisateur.
    createUser(email, password, username, name, surname, born, country) {
        console.log("Creating user with:", {email, username, name, surname, born, country});
        // Crée une nouvelle instance de User avec les données fournies.
        const newUser = new User(email, password, username, name, surname, born, country, 'Joueur', 'Active');
        // Notez que 'role' et 'status' ne sont pas passés en paramètre ici. 
        // Vous pourriez envisager de les définir avec des valeurs par défaut ou de les ajouter en tant que paramètres de cette méthode.
        
        console.log("User created:", newUser);
        // Retourne l'instance nouvellement créée de l'utilisateur.
        return newUser;
    }
}

// TODO CRUD?