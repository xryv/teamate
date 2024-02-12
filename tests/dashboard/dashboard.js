document.addEventListener('DOMContentLoaded', () => {
    const userDataCenter = new UserDataCenter();

    userDataCenter.preloadUsers(); // Use the preloadUsers method to add mock users

    const dashboardController = new DashboardController(userDataCenter);
    new DashboardView(dashboardController);
    console.log('Dashboard initialized with cooler user IDs.');
});

class DashboardController {
    constructor(userDataCenter) {
        this.userDataCenter = userDataCenter;
        console.log('DashboardController initialized.');
    }

    getAllUsers() {
        console.log('Fetching all users.');
        return this.userDataCenter.getAllUsers();
    }

    deleteUser(email) {
        console.log(`Attempting to delete user with email: ${email}`);
        this.userDataCenter.deleteUserByEmail(email);
        console.log(`User with email ${email} deleted.`);
        // Assuming the view is correctly linked to re-render users
        if (this.view) {
            this.view.renderUsers(this.getAllUsers());
        }
    }
}
