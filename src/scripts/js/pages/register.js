// Attente du chargement complet du contenu du document avant d'exécuter le code d'initialisation.
document.addEventListener('DOMContentLoaded', () => {
    // Instanciation du UserDataCenter pour gérer les données des utilisateurs au sein de l'application.
    const userDataCenter = new UserDataCenter();
  
    // Création d'une instance de RegistrationModel.
    // Ce modèle contient la logique et les données nécessaires à l'inscription, comme la validation des informations fournies par l'utilisateur.
    const model = new RegistrationModel();

    // Instanciation de RegistrationView.
    // Cette vue s'occupe de l'interface utilisateur pour l'inscription, affichant le formulaire et collectant les entrées utilisateur.
    const view = new RegistrationView();

    // Assemblage du contrôleur d'inscription, en le reliant au modèle et à la vue.
    // Le RegistrationController coordonne les interactions entre la vue (entrées de l'utilisateur) et le modèle (logique de traitement des données).
    new RegistrationController(model, view, userDataCenter);

    // La ligne commentée ci-dessous montre une autre façon de déclarer et initialiser le RegistrationController,
    // avec des variables explicites pour le modèle, la vue et le UserDataCenter.
    // const registrationController = new RegistrationController(registrationModel, registrationView, userDataCenter);
});