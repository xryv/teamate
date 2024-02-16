class LoginView {
    constructor(loginController) {
        this.loginController = loginController; // Stocke une référence au contrôleur de connexion pour gérer les tentatives de connexion.
        this.initialize(); // Initialise les composants de l'interface de connexion.
    }

    initialize() {
        // Récupère l'élément du formulaire de connexion et le stocke pour un usage ultérieur.
        this.loginForm = document.getElementById('login-form');
        // Récupère l'élément destiné à afficher les retours sur la tentative de connexion.
        this.feedbackElement = document.getElementById('loginFeedback');

        if (this.loginForm) {
            // Ajoute un écouteur d'événements sur le formulaire de connexion pour gérer la soumission du formulaire.
            this.loginForm.addEventListener('submit', (e) => this.handleSubmit(e));
        } else {
            // Affiche une erreur dans la console si l'élément du formulaire de connexion n'est pas trouvé.
            console.error('Formulaire de connexion introuvable');
        }
    }

    handleSubmit(e) {
        e.preventDefault(); // Empêche la soumission standard du formulaire pour permettre un traitement personnalisé.

        // Récupère les champs d'email et de mot de passe à partir du formulaire.
        const emailField = this.loginForm.querySelector('input[name="email"]');
        const passwordField = this.loginForm.querySelector('input[name="password"]');
        
        if (!emailField || !passwordField) {
            // Affiche une erreur si les champs nécessaires ne sont pas trouvés.
            console.error('Champ email ou mot de passe introuvable');
            return;
        }

        // Extrait les valeurs des champs d'email et de mot de passe.
        const email = emailField.value;
        const password = passwordField.value;

        // Utilise le contrôleur de connexion pour tenter une connexion avec les identifiants fournis.
        const loginSuccess = this.loginController.login(email, password);
        
        // Affiche un retour visuel basé sur le succès ou l'échec de la tentative de connexion.
        if (loginSuccess) {
            this.displayFeedback("Connexion réussie !", true);
        } else {
            this.displayFeedback("Échec de la connexion : email ou mot de passe invalide.", false);
        }
    }

    displayFeedback(message, isSuccess) {
        // Affiche un message de retour dans l'élément dédié, en ajustant la couleur en fonction du succès ou de l'échec.
        if (this.feedbackElement) {
            this.feedbackElement.textContent = message;
            this.feedbackElement.style.color = isSuccess ? 'green' : 'red';
        } else {
            // Affiche une erreur si l'élément destiné à fournir le retour visuel n'est pas trouvé.
            console.error('Élément de retour introuvable');
        }
    }
}
