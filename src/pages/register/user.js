// Classe représentant un utilisateur dans l'application
class User {
    // Déclaration des propriétés de la classe User
    email;
    password;
    username;
    name;
    surname;
    born;
    country;

    // Constructeur de la classe, initialisant les propriétés avec les valeurs fournies
    constructor(email, password, username, name, surname, born, country) {
        this.email = email; // Adresse email de l'utilisateur
        this.password = password; // Mot de passe de l'utilisateur
        this.username = username; // Nom d'utilisateur
        this.name = name; // Prénom de l'utilisateur
        this.surname = surname; // Nom de famille de l'utilisateur
        this.born = born; // Date de naissance de l'utilisateur
        this.country = country; // Pays de l'utilisateur
    }

    // Méthodes d'accès (getters) pour lire les propriétés de l'objet
    // Ces méthodes sont utiles si vous décidez plus tard d'ajouter de la logique de validation ou de transformation lors de l'accès aux propriétés.

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getUsername() {
        return this.username;
    }

    getName() {
        return this.name;
    }

    getSurname() {
        return this.surname;
    }

    getBorn() {
        return this.born;
    }

    getCountry() {
        return this.country;
    }
}
