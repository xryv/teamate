// Classe RegistrationController : Gère le processus d'inscription des utilisateurs.
class RegistrationController {
    constructor(registrationModel, registrationView, userDataCenter) {
        console.log("Initialisation du contrôleur d'inscription...");
        this.registrationModel = registrationModel; // Référence au modèle gérant la création de nouveaux utilisateurs.
        this.registrationView = registrationView; // Référence à la vue d'inscription pour interagir avec l'interface utilisateur.
        this.userDataCenter = userDataCenter; // Référence au centre de données utilisateur pour l'ajout de nouveaux utilisateurs.

        // Configure le gestionnaire d'événements pour le formulaire d'inscription.
        this.registrationView.bindFormSubmit(this.handleRegisterUser.bind(this));
        console.log("Le gestionnaire de soumission de formulaire est lié.");
    }

    // Gère la soumission du formulaire d'inscription.
    handleRegisterUser(formData) {
        console.log("Traitement de l'inscription de l'utilisateur avec les données :", formData);

        // Valide les données du formulaire.
        const validationErrors = this.validateFormData(formData);
        if (validationErrors.length > 0) {
            // Affiche les erreurs de validation si présentes.
            this.registrationView.displayError("La validation a échoué. Veuillez vérifier votre saisie : " + validationErrors.join(" "));
            return;
        }
        
        try {
            console.log("La validation des données du formulaire a réussi. Création d'un nouvel utilisateur...");
            // Crée un nouvel utilisateur si les données sont valides.
            const newUser = this.registrationModel.createUser(formData.email, formData.password, formData.username, formData.name, formData.surname, formData.born, formData.country);
            if (newUser) {
                // Ajoute le nouvel utilisateur au centre de données et affiche un message de succès.
                this.userDataCenter.addUser(newUser);
                this.registrationView.displaySuccess("Utilisateur enregistré avec succès.");
                this.registrationView.clearForm(); // Nettoie le formulaire après une inscription réussie.
            } else {
                // Affiche une erreur si la création de l'utilisateur échoue.
                this.registrationView.displayError("Une erreur s'est produite lors de l'inscription.");
            }

            console.log("Nouvel utilisateur créé avec succès :", newUser);
            console.log("Utilisateurs actuels dans le Centre de Données Utilisateur :", this.userDataCenter.getAllUsers());
        } catch (error) {
            // Gère les exceptions survenues pendant le processus d'inscription.
            console.error("Erreur survenue lors de l'inscription de l'utilisateur :", error);
            this.registrationView.displayError("Une erreur s'est produite lors de l'inscription.");
        }
    }

    // Valide les données du formulaire d'inscription.
    validateFormData(formData) {
        console.log("Validation des données du formulaire...");
        let errors = []; // Accumule les messages d'erreur de validation.

        // Applique des fonctions de validation spécifiques à chaque champ du formulaire.
        // Note : Les fonctions de validation (validateEmail, validatePassword, etc.) doivent être définies ailleurs, typiquement dans '/utils/validation.js'.
        if (!validateEmail(formData.email)) {
            errors.push("L'adresse e-mail doit contenir un '@' et un domaine valide.");
        }
        if (!validatePassword(formData.password)) {
            errors.push("Le mot de passe doit contenir au moins 8 caractères, incluant des majuscules, des minuscules, des chiffres et des symboles.");
        }
        if (!validateUsername(formData.username)) {
            errors.push("Le nom d'utilisateur doit contenir au moins 4 caractères et ne peut inclure que des lettres et des chiffres.");
        }
        if (!validateFirstName(formData.name)) {
            errors.push("Le prénom ne peut pas être vide ou constitué uniquement d'espaces.");
        }
        if (!validateLastName(formData.surname)) {
            errors.push("Le nom de famille ne peut pas être vide ou constitué uniquement d'espaces.");
        }
        if (!validateDateOfBirth(formData.born)) {
            errors.push("La date de naissance doit être au format JJ-MM-AAAA et ne peut pas être une date future.");
        }
        if (!validateCountry(formData.country)) {
            errors.push("Vous devez sélectionner un pays dans la liste.");
        }
    
        return errors; // Retourne un tableau des messages d'erreur de validation.
    }
    
}