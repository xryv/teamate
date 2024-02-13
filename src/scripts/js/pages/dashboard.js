document.addEventListener('DOMContentLoaded', () => {
    const userDataCenter = new UserDataCenter();

    userDataCenter.preloadUsers(); // 

    const dashboardController = new DashboardController(userDataCenter);
    new DashboardView(dashboardController);
    console.log('Tableau de bord initialisé.');
});
