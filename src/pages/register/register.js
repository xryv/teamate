// Fonction constructeur pour un Utilisateur
function Utilisateur(email, motDePasse) {
    this.email = email;
    this.motDePasse = motDePasse;
    // Méthode pour saluer l'utilisateur
    this.direBonjour = function() {
      console.log('Bonjour, votre email est ' + this.email);
    };
  }
  
  // Fonction pour enregistrer un nouvel utilisateur
  function enregistrerNouvelUtilisateur() {
    // Obtenir les valeurs du formulaire
    let email = document.getElementById('email').value;
    let motDePasse = document.getElementById('password').value;
    let confirmationMotDePasse = document.getElementById('confirm-password').value;
  
    // Vérifier si les mots de passe correspondent
    if (motDePasse !== confirmationMotDePasse) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }
  
    // Créer un nouvel utilisateur et le saluer
    let nouvelUtilisateur = new Utilisateur(email, motDePasse);
    nouvelUtilisateur.direBonjour();
    
    // Ici, vous pouvez ajouter la logique pour envoyer les informations à un serveur
    // Pour cet exemple, nous allons simplement afficher les informations dans la console
    console.log('Utilisateur enregistré avec succès:', nouvelUtilisateur);
  }
  
  // Ajouter un écouteur d'événements au formulaire pour gérer la soumission
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registration').addEventListener('submit', function(event) {
      event.preventDefault(); // Empêcher la soumission classique du formulaire
      enregistrerNouvelUtilisateur();
    });
  });
  