// validations.js

// Valide le format de l'email
function validateEmail(email) {
    // Utilise une expression régulière pour vérifier que l'email contient un @ et un domaine.
    return /\S+@\S+\.\S+/.test(email);
}

// Valide la longueur du mot de passe
function validatePassword(password) {
    // Vérifie que le mot de passe contient au moins 8 caractères.
    return password.length >= 8;
}

// Valide le format du nom d'utilisateur
function validateUsername(username) {
    
    if (typeof username !== 'string' || !username) {
        console.log("Username validation failed: input is undefined or not a string.");
        return false;
    }
    // Utilise une expression régulière pour s'assurer que le nom d'utilisateur contient uniquement des lettres et des chiffres,
    // et qu'il contient au moins 4 caractères.
    return /^[a-zA-Z0-9]+$/.test(username) && username.length >= 4;
}

// Valide la présence d'un prénom
function validateFirstName(name) {
    // Vérifie que le prénom n'est pas vide après avoir supprimé les espaces blancs.
    return name.trim().length > 0;
}

// Valide la présence d'un nom de famille
function validateLastName(surname) {
    // Vérifie que le nom de famille n'est pas vide après avoir supprimé les espaces blancs.
    return surname.trim().length > 0;
}

// Valide la date de naissance
function validateDateOfBirth(born) {
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/; // Format YYYY-MM-DD
    
    // Vérifie le format correct de la date
    if (!dateFormat.test(born)) {
        return false;
    }

    // Convertit les parties de la date en entiers pour validation
    const parts = born.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Le mois est basé sur 0
    const day = parseInt(parts[2], 10);
    const birthDate = new Date(year, month, day);

    // Vérifie la validité de la date et s'assure qu'elle n'est pas dans le futur
    if (birthDate.getFullYear() !== year || birthDate.getMonth() !== month || birthDate.getDate() !== day || birthDate > new Date()) {
        return false;
    }

    return true;
}

// Valide la présence d'un pays
function validateCountry(country) {
    // Vérifie que le pays n'est pas vide après avoir supprimé les espaces blancs.
    return country.trim().length > 0;
}
