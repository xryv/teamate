// Écouteur d'événement qui attend que le contenu du DOM soit entièrement chargé.
document.addEventListener('DOMContentLoaded', () => {
    // Crée une nouvelle instance de UserDataCenter pour gérer les données des utilisateurs.
    const userDataCenter = new UserDataCenter();

    // Appelle la méthode preloadUsers pour remplir le UserDataCenter avec un ensemble d'utilisateurs prédéfinis.
    // Ceci est utile pour simuler un environnement de test ou de démonstration avec des données déjà présentes.
    userDataCenter.preloadUsers();

    // Crée une nouvelle instance de DashboardController, en lui passant le UserDataCenter.
    // Le DashboardController sert de médiateur entre la vue du tableau de bord et les données des utilisateurs.
    const dashboardController = new DashboardController(userDataCenter);

    // Crée une nouvelle instance de DashboardView et la lie au DashboardController.
    // La DashboardView est responsable de l'affichage de l'interface utilisateur du tableau de bord,
    // y compris la liste des utilisateurs et les actions possibles comme leur suppression.
    new DashboardView(dashboardController);

    // Affiche un message dans la console pour indiquer que le tableau de bord a été initialisé avec succès.
    console.log('Tableau de bord initialisé.');
});