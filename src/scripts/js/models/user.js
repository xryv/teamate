// Classe représentant un utilisateur dans l'application.
class User {
    // Initialisation des propriétés de la classe User.
    email;
    password;
    username;
    name;
    surname;
    born;
    country;
    role;
    status;

    // Constructeur pour initialiser un nouvel utilisateur avec les données fournies.
    constructor(email, password, username, name, surname, born, country, role, status) {
        console.log(`Initialisation d'un nouvel utilisateur : ${username}`);
        
        // Affectation des valeurs aux propriétés de l'instance de User.
        this.email = email; // Adresse email de l'utilisateur.
        this.password = password; // Mot de passe de l'utilisateur (à hasher dans une application réelle pour la sécurité).
        this.username = username; // Nom d'utilisateur utilisé pour l'identification sur la plateforme.
        this.name = name; // Prénom de l'utilisateur.
        this.surname = surname; // Nom de famille de l'utilisateur.
        this.born = born; // Date de naissance de l'utilisateur, utile pour des vérifications d'âge ou des personnalisations.
        this.country = country; // Pays d'origine de l'utilisateur, peut être utilisé pour la localisation.
        this.role = role; // Rôle de l'utilisateur dans l'application (ex : admin, joueur), détermine les accès autorisés.
        this.status = status; // Statut de l'utilisateur (ex : actif, inactif), peut être utilisé pour gérer les accès.

        console.log(`Utilisateur ${this.username} (${this.name} ${this.surname}) créé avec succès.`);
    }

    // Getters pour accéder aux propriétés de l'utilisateur.
    // Ces méthodes permettent un accès contrôlé et pourraient inclure de la logique supplémentaire pour la validation ou la transformation des données.
    getEmail() {
        console.log(`Accès à l'adresse email de l'utilisateur ${this.username} : ${this.email}`);
        return this.email;
    }

    getPassword() {
        console.log(`Accès au mot de passe de l'utilisateur ${this.username}`);
        // À noter : Exposer un getter pour le mot de passe n'est généralement pas une bonne pratique en termes de sécurité.
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
        console.log(`Accès au rôle de l'utilisateur ${this.email} : ${this.role}`);
        return this.role;
    }

    getStatus() {
        console.log(`Accès au statut de l'utilisateur ${this.status}`);
        return this.status;
    }
}
