document.addEventListener('DOMContentLoaded', () => {
    const userDataCenter = new UserDataCenter();
    userDataCenter.preloadUsers(); 

    const dashboardController = new DashboardController(userDataCenter);


    if (currentPageIsAdminPage()) {
        const adminDashboardView = new DashboardView(dashboardController);
        adminDashboardView.renderAdmins(dashboardController.getUsersByRole("Admin"));
    } else {
        const playerDashboardView = new DashboardView(dashboardController);
        playerDashboardView.renderUsers(dashboardController.getAllUsers());
    }
});
