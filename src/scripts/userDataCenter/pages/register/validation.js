// validations.js

// Valide le format de l'email
function validateEmail(email) {
    // Utilise une expression régulière plus précise pour valider le format de l'adresse e-mail.
    // Cette expression régulière couvre la plupart des cas d'utilisation courants et se conforme mieux aux spécifications des RFCs.
    const regex = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[?[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\]?)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = regex.test(email);
    if (!isValid) {
        console.log("L'adresse e-mail n'est pas valide. Veuillez entrer une adresse e-mail qui contient un '@' et un domaine valide.");
    }
    return isValid;
}

// Valide la longueur et la complexité du mot de passe
function validatePassword(password) {
    // Initialisation des messages d'erreur possibles pour guider l'utilisateur
    let errorMessage = "";

    // Vérifie la longueur minimale du mot de passe
    if (password.length < 8) {
        errorMessage += "Le mot de passe doit contenir au moins 8 caractères. ";
    }
    // Vérifie la présence d'au moins un chiffre
    if (!/\d/.test(password)) {
        errorMessage += "Incluez au moins un chiffre. ";
    }
    // Vérifie la présence de lettres minuscules
    if (!/[a-z]/.test(password)) {
        errorMessage += "Incluez au moins une lettre minuscule. ";
    }
    // Vérifie la présence de lettres majuscules
    if (!/[A-Z]/.test(password)) {
        errorMessage += "Incluez au moins une lettre majuscule. ";
    }
    // Vérifie la présence d'au moins un symbole (non alphanumérique)
    if (!/[\W_]/.test(password)) {
        errorMessage += "Incluez au moins un symbole. ";
    }

    // Si errorMessage est vide, le mot de passe est valide
    const isValid = errorMessage === "";
    if (!isValid) {
        console.log(`Le mot de passe n'est pas valide: ${errorMessage}Veuillez essayer à nouveau.`);
    }
    return isValid;
}


// Valide le format du nom d'utilisateur
function validateUsername(username) {
    // Vérifie si le nom d'utilisateur est défini et est une chaîne
    if (typeof username !== 'string' || !username) {
        console.log("La validation du nom d'utilisateur a échoué : l'entrée est indéfinie ou n'est pas une chaîne.");
        return false;
    }

    // Vérifie la longueur du nom d'utilisateur
    if (username.length < 4) {
        console.log("Le nom d'utilisateur doit contenir au moins 4 caractères.");
        return false;
    }

    // Utilise une expression régulière pour s'assurer que le nom d'utilisateur contient uniquement des lettres et des chiffres.
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        console.log("Le nom d'utilisateur ne peut contenir que des lettres et des chiffres.");
        return false;
    }

    // Ajout d'une vérification pour éviter les noms d'utilisateur uniquement numériques (si désiré)
    if (/^\d+$/.test(username)) {
        console.log("Le nom d'utilisateur ne peut pas être uniquement numérique.");
        return false;
    }

    // TODO: Ajouter ici une vérification d'unicité si nécessaire, impliquant une recherche dans la base de données ou une autre source de données
    // Exemple : if (!isUsernameUnique(username)) { console.log("Ce nom d'utilisateur est déjà pris. Veuillez en choisir un autre."); return false; }

    return true; // Si toutes les vérifications passent, le nom d'utilisateur est valide
}


// Valide la présence d'un prénom et vérifie sa validité
function validateFirstName(name) {
    // Trim the input to remove leading and trailing whitespace
    const trimmedName = name.trim();

    // Check if the name is not empty
    if (trimmedName.length === 0) {
        console.log("Le prénom ne peut pas être vide.");
        return false;
    }

    // Optional: Check for a maximum length to prevent excessively long names
    const maxLength = 15; // maximum length
    if (trimmedName.length > maxLength) {
        console.log(`Le prénom ne peut pas dépasser ${maxLength} caractères.`);
        return false;
    }

    // Optional: Check for valid characters (e.g., letters, apostrophes, hyphens)
    // This regex allows for letters (including accented characters), apostrophes, and hyphens
    if (!/^[\p{L}'-]+$/u.test(trimmedName)) {
        console.log("Le prénom contient des caractères non autorisés. Utilisez uniquement des lettres, des apostrophes et des tirets.");
        return false;
    }

    return true; // The name is valid
}


// Valide la présence d'un nom de famille et vérifie sa validité
function validateLastName(surname) {
    // Trim the input to remove leading and trailing whitespace
    const trimmedSurname = surname.trim();

    // Check if the surname is not empty
    if (trimmedSurname.length === 0) {
        console.log("Le nom de famille ne peut pas être vide.");
        return false;
    }


    const maxLength = 25; 
    if (trimmedSurname.length > maxLength) {
        console.log(`Le nom de famille ne peut pas dépasser ${maxLength} caractères.`);
        return false;
    }

    // This regex allows for letters (including accented characters), apostrophes, and hyphens
    if (!/^[\p{L}'-]+$/u.test(trimmedSurname)) {
        console.log("Le nom de famille contient des caractères non autorisés. Utilisez uniquement des lettres, des apostrophes et des tirets.");
        return false;
    }

    return true; // The surname is valid
}


function validateDateOfBirth(born) {
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/; // Format AAAA-MM-JJ
    if (!dateFormat.test(born)) {
        console.log("Le format de la date de naissance est incorrect. Utilisez le format AAAA-MM-JJ.");
        return false;
    }

    const parts = born.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Le mois est basé sur 0
    const day = parseInt(parts[2], 10);

    // Création d'une date sans l'effet de la timezone
    const birthDate = new Date(Date.UTC(year, month, day));

    // Vérification de la cohérence de la date
    if (birthDate.getUTCFullYear() !== year || birthDate.getUTCMonth() !== month || birthDate.getUTCDate() !== day) {
        console.log("La date de naissance n'est pas valide. Veuillez entrer une date réelle.");
        return false;
    }

    // Vérification que la date de naissance n'est pas dans le futur
    const today = new Date();
    const todayUTC = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
    if (birthDate > todayUTC) {
        console.log("La date de naissance ne peut pas être dans le futur.");
        return false;
    }

    // Optionnel : Vérifier l'âge minimum (ex : 18 ans)
    const minAge = 18;
    const minBirthDate = new Date(Date.UTC(today.getFullYear() - minAge, today.getMonth(), today.getDate()));
    if (birthDate > minBirthDate) {
        console.log(`Vous devez avoir au moins ${minAge} ans pour vous inscrire.`);
        return false;
    }

    return true; // La date de naissance est valide
}




// Valide la présence d'un pays et vérifie sa validité contre une liste prédéfinie (si applicable)
function validateCountry(country) {
    const trimmedCountry = country.trim();

    // Vérifie que le champ du pays n'est pas vide
    if (trimmedCountry.length === 0) {
        console.log("Le champ du pays ne peut pas être vide.");
        return false;
    }

    // Optionnel: Vérifier que le pays est dans une liste de pays valides
    // Cela nécessite une liste de pays valides, par exemple sous forme d'un tableau de chaînes
    // const validCountries = ["France", "Canada", "Japon", ...]; // Exemple de liste de pays
    // if (!validCountries.includes(trimmedCountry)) {
    //     console.log("Le pays sélectionné n'est pas valide. Veuillez sélectionner un pays dans la liste.");
    //     return false;
    // }

    return true; // Le pays est valide
}

