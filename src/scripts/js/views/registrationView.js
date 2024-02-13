class RegistrationView {
    constructor() {
        console.log("Initialisation de la vue d'inscription...");
        this.registerForm = document.getElementById('registration-form');
        this.registerForm.addEventListener('submit', (e) => this.submitHandler(e));
    }

    bindFormSubmit(callback) {
        console.log("Liaison du callback de soumission du formulaire.");
        this.formSubmitCallback = callback;
    }

    submitHandler(e) {
        e.preventDefault();
        console.log("Événement de soumission du formulaire déclenché.");
        const formData = new FormData(this.registerForm);
        const userData = Object.fromEntries(formData.entries());
        console.log("Données du formulaire capturées :", userData);
        this.formSubmitCallback(userData);
    }

    displayError(message) {

        const feedbackElement = document.getElementById('formFeedback');
        feedbackElement.textContent = message;
        feedbackElement.style.color = 'red'; 
    }

    displaySuccess(message) {
        const feedbackElement = document.getElementById('formFeedback');
        feedbackElement.textContent = message;
        feedbackElement.style.color = 'green'; 
    }

    clearForm() {
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
