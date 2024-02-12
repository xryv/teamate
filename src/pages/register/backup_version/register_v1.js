document.addEventListener('DOMContentLoaded', function() {
  // Sélectionne le formulaire d'inscription
  const registrationForm = document.querySelector('#registration form');

  // Écoute l'événement de soumission du formulaire
  registrationForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prévient le comportement de soumission par défaut

      // Récupère les valeurs du formulaire
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      // Validation de base des entrées
      if (validateRegistrationForm(email, password, confirmPassword)) {
          console.log('Registration Data:', { email, password }); // Simule l'enregistrement
          // TODO: Ajouter l'intégration avec le backend ici
      } else {
          console.error('Validation Failed'); // Log l'erreur en cas de validation échouée
      }
  });
});

// Fonction pour valider les données du formulaire d'inscription
function validateRegistrationForm(email, password, confirmPassword) {
  // Vérifie si les mots de passe correspondent
  if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return false;
  }
  // TODO: Ajouter d'autres validations selon les besoins (format d'email, force du mot de passe, etc.)
  return true;
}
