// teamate\tests\userDataCenter-management\userDataCenter.js

class UserDataCenter {
    constructor() {
        // Initialisation d'un tableau vide pour stocker les informations des utilisateurs
        this.users = [];
    }

    // Ajoute un nouvel utilisateur dans le tableau
    addUser(user) {
        this.users.push(user);
    }

    // Retourne tous les utilisateurs
    getAllUsers() {
        return this.users;
    }
}
