class DashboardController {
    constructor(userDataCenter) {
        this.userDataCenter = userDataCenter;
        console.log('DashboardController initialisé.');
    }

    getAllUsers() {
        console.log('Récupération de tous les utilisateurs.');
        return this.userDataCenter.getAllUsers();
    }

    deleteUser(email) {
        console.log(`Suppression de l'utilisateur avec l'email : ${email}`);
        this.userDataCenter.deleteUserByEmail(email);

        if (this.view && typeof this.view.renderUsers === 'function') {
            this.view.renderUsers(this.getAllUsers());
        }
    }
}
