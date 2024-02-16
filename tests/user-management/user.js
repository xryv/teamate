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
    role;
    status;

    // Constructeur de la classe, initialisant les propriétés avec les valeurs fournies
    constructor(email, password, username, name, surname, born, country, role, status) {
        console.log(`Initialisation d'un nouvel utilisateur : ${username}`);

        this.email = email; // Adresse email de l'utilisateur
        this.password = password; // Mot de passe de l'utilisateur
        this.username = username; // Nom d'utilisateur
        this.name = name; // Prénom de l'utilisateur
        this.surname = surname; // Nom de famille de l'utilisateur
        this.born = born; // Date de naissance de l'utilisateur
        this.country = country; // Pays de l'utilisateur

        this.role = role;
        this.status = status;

        console.log(`Utilisateur ${this.username} (${this.name} ${this.surname}) créé avec succès.`);
    }

    // Méthodes d'accès (getters) pour lire les propriétés de l'objet
    // Ces méthodes sont utiles si vous décidez plus tard d'ajouter de la logique de validation ou de transformation lors de l'accès aux propriétés.

    getEmail() {
        console.log(`Accès à l'adresse email de l'utilisateur ${this.username} : ${this.email}`);
        return this.email;
    }

    getPassword() {
        console.log(`Accès au mot de passe de l'utilisateur ${this.username}`);
        return this.password;
    }

    getUsername() {
        console.log(`Accès au nom d'utilisateur : ${this.username}`);
        return this.username;
    }

    getName() {
        console.log(`Accès au prénom de l'utilisateur ${this.username} : ${this.name}`);
        return this.name;
    }

    getSurname() {
        console.log(`Accès au nom de famille de l'utilisateur ${this.username} : ${this.surname}`);
        return this.surname;
    }

    getBorn() {
        console.log(`Accès à la date de naissance de l'utilisateur ${this.username} : ${this.born}`);
        return this.born;
    }

    getCountry() {
        console.log(`Accès au pays de l'utilisateur ${this.username} : ${this.country}`);
        return this.country;
    }

    getRole() { 
        console.log(`Accès au Role ${this.email} : ${this.role}`);
        return this.role;
    }

    getStatus() {
        console.log(`Accessing user's status: ${this.status}`);
        return this.status;
    }
}
