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
        console.log(`Deleting user with email: ${email}`);
        this.userDataCenter.deleteUserByEmail(email);
        // Ensure view is refreshed after delete operation
        if (this.view && typeof this.view.renderUsers === 'function') {
            this.view.renderUsers(this.getAllUsers());
        }
    }
}
