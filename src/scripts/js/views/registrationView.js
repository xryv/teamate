class RegistrationView {
    constructor() {
        console.log("Initialisation de la vue d'inscription...");
        // Récupère l'élément du formulaire d'inscription pour une utilisation ultérieure.
        this.registerForm = document.getElementById('registration-form');
        // Attache un gestionnaire d'événements pour gérer la soumission du formulaire.
        this.registerForm.addEventListener('submit', (e) => this.submitHandler(e));
    }

    bindFormSubmit(callback) {
        // Stocke le callback à exécuter lors de la soumission du formulaire.
        console.log("Liaison du callback de soumission du formulaire.");
        this.formSubmitCallback = callback;
    }

    submitHandler(e) {
        e.preventDefault(); // Empêche la soumission standard du formulaire.
        console.log("Événement de soumission du formulaire déclenché.");
        // Crée un objet FormData à partir du formulaire pour capturer les données saisies par l'utilisateur.
        const formData = new FormData(this.registerForm);
        // Convertit FormData en un objet JavaScript simple pour un traitement facile.
        const userData = Object.fromEntries(formData.entries());
        console.log("Données du formulaire capturées :", userData);
        // Exécute le callback fourni, passant les données de l'utilisateur, pour gérer la logique d'inscription.
        this.formSubmitCallback(userData);
    }

    displayError(message) {
        // Affiche un message d'erreur dans l'élément de feedback dédié.
        const feedbackElement = document.getElementById('formFeedback');
        feedbackElement.textContent = message;
        feedbackElement.style.color = 'red';
    }

    displaySuccess(message) {
        // Affiche un message de succès dans l'élément de feedback dédié.
        const feedbackElement = document.getElementById('formFeedback');
        feedbackElement.textContent = message;
        feedbackElement.style.color = 'green';
    }

    clearForm() {
        // Efface tous les champs du formulaire après une soumission réussie.
        console.log("Effacement des champs du formulaire.");
        const form = document.getElementById('registration-form');
        if (form) {
            form.reset();
            console.log("Les champs du formulaire ont été effacés.");
        } else {
            console.log("Formulaire non trouvé, impossible d'effacer les champs.");
        }
    }
}