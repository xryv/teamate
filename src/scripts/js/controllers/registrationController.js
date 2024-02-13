class RegistrationController {
    constructor(registrationModel, registrationView, userDataCenter) {
        console.log("Initialisation du contrôleur d'inscription...");
        this.registrationModel = registrationModel;
        this.registrationView = registrationView;
        this.userDataCenter = userDataCenter;
        
        // Lie le formulaire d'inscription avec le gestionnaire de soumission
        this.registrationView.bindFormSubmit(this.handleRegisterUser.bind(this));
        console.log("Le gestionnaire de soumission de formulaire est lié.");
    }

    handleRegisterUser(formData) {
        console.log("Traitement de l'inscription de l'utilisateur avec les données :", formData);

        // Validation des données du formulaire
        const validationErrors = this.validateFormData(formData);
        if (validationErrors.length > 0) {
            // Affiche les erreurs de validation
            this.registrationView.displayError("La validation a échoué. Veuillez vérifier votre saisie : " + validationErrors.join(" "));
            return;
        }
        
        try {
            console.log("La validation des données du formulaire a réussi. Création d'un nouvel utilisateur...");
            // Tente de créer un nouvel utilisateur avec les données validées
            const newUser = this.registrationModel.createUser(formData.email, formData.password, formData.username, formData.name, formData.surname, formData.born, formData.country);
            if (newUser) {
                // Ajoute le nouvel utilisateur et affiche un message de succès
                this.userDataCenter.addUser(newUser);
                this.registrationView.displaySuccess("Utilisateur enregistré avec succès.");
                this.registrationView.clearForm(); // Nettoie le formulaire après l'inscription réussie
            } else {
                // Gère le cas où la création de l'utilisateur échoue
                this.registrationView.displayError("Une erreur s'est produite lors de l'inscription.");
            }

            console.log("Nouvel utilisateur créé avec succès :", newUser);
            console.log("Utilisateurs actuels dans le Centre de Données Utilisateur :", this.userDataCenter.getAllUsers()); // Journalise tous les utilisateurs       

        } catch (error) {
            // Gère les erreurs survenues pendant le processus d'inscription
            console.error("Erreur survenue lors de l'inscription de l'utilisateur :", error);
            this.registrationView.displayError("Une erreur s'est produite lors de l'inscription.");
        }
    }

    validateFormData(formData) {
        console.log("Validation des données du formulaire...");
        let errors = [];
    
        // Effectue la validation pour chaque champ et ajoute des messages d'erreur spécifiques
        if (!validateEmail(formData.email)) {
            errors.push("L'adresse e-mail doit contenir un '@' et un domaine valide (exemple : utilisateur@domaine.com).");
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
    
        return errors; // Retourne les erreurs de validation, s'il y en a
    }
    
}
