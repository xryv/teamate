class LoginView {
    constructor(loginController) {
        this.loginController = loginController;
        this.initialize(); // Assurez-vous que les éléments sont configurés dans la méthode initialize
    }

    initialize() {
        this.loginForm = document.getElementById('login-form');
        this.feedbackElement = document.getElementById('loginFeedback');
        if (this.loginForm) {
            this.loginForm.addEventListener('submit', (e) => this.handleSubmit(e));
        } else {
            console.error('Formulaire de connexion introuvable');
        }
    }

    handleSubmit(e) {
        e.preventDefault(); // Empêche le formulaire de soumettre de manière traditionnelle
        const emailField = this.loginForm.querySelector('input[name="email"]');
        const passwordField = this.loginForm.querySelector('input[name="password"]');
        
        if (!emailField || !passwordField) {
            console.error('Champ email ou mot de passe introuvable');
            return; // Arrête l'exécution si les champs ne sont pas trouvés
        }

        const email = emailField.value;
        const password = passwordField.value;

        // Tente de se connecter avec les identifiants fournis
        const loginSuccess = this.loginController.login(email, password);
        if (loginSuccess) {
            this.displayFeedback("Connexion réussie !", true);
        } else {
            this.displayFeedback("Échec de la connexion : email ou mot de passe invalide.", false);
        }
        
    }

    displayFeedback(message, isSuccess) {
        // Affiche les retours visuels sur l'état de la connexion
        if (this.feedbackElement) {
            this.feedbackElement.textContent = message;
            this.feedbackElement.style.color = isSuccess ? 'green' : 'red';
        } else {
            console.error('Élément de retour introuvable');
        }
    }
}
