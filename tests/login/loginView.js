// Classe LoginView servant à gérer l'interface de connexion.
class LoginView {
    // Constructeur prenant un contrôleur de connexion comme paramètre pour la liaison avec la logique métier.
    constructor(loginController) {
        this.loginController = loginController; // Stockage du contrôleur pour une utilisation ultérieure.
        this.initialize(); // Initialisation de la vue.
    }

    // Méthode d'initialisation qui configure les éléments de l'interface utilisateur nécessaires.
    initialize() {
        // Sélection du formulaire de connexion et de l'élément pour afficher les feedbacks.
        this.loginForm = document.getElementById('login-form');
        this.feedbackElement = document.getElementById('loginFeedback');
        
        // Vérification de la présence du formulaire dans le DOM.
        if (this.loginForm) {
            // Enregistrement d'un écouteur d'événement pour gérer la soumission du formulaire.
            this.loginForm.addEventListener('submit', (e) => this.handleSubmit(e));
        } else {
            // Affichage d'un message d'erreur si le formulaire n'est pas trouvé.
            console.error('Formulaire de connexion introuvable');
        }
    }

    // Méthode gérant la soumission du formulaire.
    handleSubmit(e) {
        e.preventDefault(); // Empêche la soumission standard du formulaire pour traiter les données en interne.
        
        // Récupération des champs de saisie pour l'email et le mot de passe.
        const emailField = this.loginForm.querySelector('input[name="email"]');
        const passwordField = this.loginForm.querySelector('input[name="password"]');
        
        // Vérification de l'existence des champs requis.
        if (!emailField || !passwordField) {
            console.error('Champ email ou mot de passe introuvable');
            return; // Sortie anticipée si les champs ne sont pas trouvés.
        }

        // Récupération des valeurs saisies par l'utilisateur.
        const email = emailField.value;
        const password = passwordField.value;

        // Tentative de connexion avec les identifiants fournis via le contrôleur.
        const loginSuccess = this.loginController.login(email, password);
        // Affichage d'un feedback basé sur le résultat de la tentative de connexion.
        if (loginSuccess) {
            this.displayFeedback("Connexion réussie !", true);
        } else {
            this.displayFeedback("Échec de la connexion : email ou mot de passe invalide.", false);
        }
    }

    // Méthode pour afficher un message de feedback à l'utilisateur.
    displayFeedback(message, isSuccess) {
        // Vérification de la présence de l'élément pour le feedback.
        if (this.feedbackElement) {
            this.feedbackElement.textContent = message; // Mise à jour du texte du feedback.
            // Changement de la couleur du texte basé sur le succès ou l'échec de l'opération.
            this.feedbackElement.style.color = isSuccess ? 'green' : 'red';
        } else {
            console.error('Élément de retour introuvable');
        }
    }
}
