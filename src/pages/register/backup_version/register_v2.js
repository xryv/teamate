// Partie 1: Définition des classes

class User {
    #email;
    #password;

    constructor(email, password) {
        this.#email = email;
        this.#password = password;
        console.log(`Nouvel utilisateur créé: ${this.#email}`); // Log pour indiquer la création d'un nouvel utilisateur
    }

    get email() {
        return this.#email;
    }

    set email(newEmail) {
        console.log(`Mise à jour de l'email: de ${this.#email} à ${newEmail}`); // Log pour suivre les changements d'email
        this.#email = newEmail;
    }

    validatePassword(password) {
        const isValid = this.#password === password;
        console.log(`Validation du mot de passe pour ${this.#email}: ${isValid ? 'Réussie' : 'Échouée'}`); // Log résultat de la validation
        return isValid;
    }

    toString() {
        return `Utilisateur: ${this.#email}`;
    }
}

class UserManager {
    #users = [];

    // Ajouter un nouvel utilisateur
    addUser(email, password) {
        if (this.findUser(email)) {
            console.error(`Échec de l'ajout: L'utilisateur ${email} existe déjà.`);
            return;
        }
        const user = new User(email, password);
        this.#users.push(user);
        console.log(`Utilisateur ${email} ajouté avec succès. Total utilisateurs: ${this.#users.length}`);
    }

    // Trouver un utilisateur par email
    findUser(email) {
        const user = this.#users.find(user => user.email === email);
        if (user) {
            console.log(`Utilisateur trouvé: ${email}`);
        } else {
            console.log(`Aucun utilisateur trouvé pour: ${email}`);
        }
        return user;
    }
}

// Partie 2: Gestion de l'inscription

document.addEventListener('DOMContentLoaded', function() {
    const userManager = new UserManager();
    const registrationForm = document.querySelector('#registration form');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Logging the data to the console for verification
        console.log('Registration Data:', {
            Email: email,
            Password: password,
            ConfirmPassword: confirmPassword
        });

        console.log('Tentative d\'inscription avec l\'email:', email); // Log de la tentative d'inscription

        // Vérifier si les mots de passe correspondent
        if (password !== confirmPassword) {
            console.error('Les mots de passe ne correspondent pas.'); // Utilisation de console.error pour une erreur
            alert('Les mots de passe ne correspondent pas.');
            return;
        }

        userManager.addUser(email, password);
        // Ici, on pourrait loguer un succès ou rediriger l'utilisateur après l'inscription
    });
});
