// register.js

// Ajout d'un écouteur d'événement pour exécuter le code une fois que le contenu du document est entièrement chargé.
document.addEventListener('DOMContentLoaded', () => {

    const userDataCenter = new UserDataCenter();

    
    // Création d'une instance du modèle d'inscription. 
    // Le modèle gère les données, la logique et les règles de l'application.
    const model = new RegistrationModel();

    // Création d'une instance de la vue d'inscription.
    // La vue présente les données (le modèle) et relaie les actions de l'utilisateur au contrôleur.
    const view = new RegistrationView();

    // Création d'une instance du contrôleur d'inscription et liaison avec le modèle et la vue.
    // Le contrôleur agit comme un intermédiaire entre la vue et le modèle, écoutant les événements de la vue
    // et exécutant les actions appropriées sur le modèle.
    new RegistrationController(model, view, userDataCenter);

    // const registrationController = new RegistrationController(registrationModel, registrationView, userDataCenter);
});
