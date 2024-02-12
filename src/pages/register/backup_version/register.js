// Tableau pour stocker les utilisateurs simulés
const users = [];

// Fonction pour afficher les messages de retour
const displayFeedback = (message, isError = false) => {
  const formFeedback = document.getElementById('formFeedback');
  formFeedback.textContent = message;
  formFeedback.style.color = isError ? 'red' : 'green';
};

// Vérifie si un email est déjà enregistré
const isEmailRegistered = (email) => users.some((user) => user.email === email);

// Gère la soumission du formulaire d'inscription
const handleRegistrationForm = (event) => {
  event.preventDefault();

  // Fonctions pour obtenir les valeurs des champs
  const getEmailValue = () => document.getElementById('email').value.trim();
  const getPasswordValue = () => document.getElementById('password').value.trim();
  const getConfirmPasswordValue = () =>
    document.getElementById('confirm-password').value.trim();

  // Récupère les valeurs des champs
  const email = getEmailValue();
  const password = getPasswordValue();
  const confirmPassword = getConfirmPasswordValue();

  // Vérifie si les mots de passe correspondent
  if (password !== confirmPassword) {
    return displayFeedback('Les mots de passe ne correspondent pas.', true);
  }

  // Vérifie si l'email est déjà enregistré
  if (isEmailRegistered(email)) {
    return displayFeedback('Cet e-mail est déjà enregistré.', true);
  }

  // Crée un nouvel utilisateur et l'ajoute au tableau
  const newUser = { email, password };
  users.push(newUser);

  // Efface les valeurs des champs
  [getEmailValue, getPasswordValue, getConfirmPasswordValue].forEach((getter) =>
    getter().value = ''
  );

  // Affiche un message de succès
  displayFeedback('Inscription réussie !', false);
};

// Récupère le formulaire d'inscription
const registrationForm = document.getElementById('registration-form');

// Ajoute un écouteur d'événement pour la soumission du formulaire
registrationForm.addEventListener('submit', handleRegistrationForm);

// Message initial dans la console
console.log('Script chargé et prêt pour l\'inscription des utilisateurs.');
