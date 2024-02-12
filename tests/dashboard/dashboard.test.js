QUnit.module('Tests du tableau de bord', function(hooks) {
    let dashboardController;
    let userDataCenter;

    hooks.beforeEach(() => {
        userDataCenter = new UserDataCenter();
        userDataCenter.addUser(new User("test@example.com", "password", "testUser", "Test", "User", "2000-01-01", "TestLand"));
        dashboardController = new DashboardController(userDataCenter);
        // Simuler la vue pour éviter les problèmes de innerHTML nul pendant les tests
        dashboardController.view = {
            renderUsers: function(users) {
                console.log('La fonction simulée renderUsers appelée avec les utilisateurs :', users);
            }
        };
        console.log('Configuration du hook beforeEach terminée.');
    });

    QUnit.test('Devrait lister tous les utilisateurs', assert => {
        const users = dashboardController.getAllUsers();
        assert.equal(users.length, 1, "Un utilisateur est listé dans le tableau de bord");
    });

    QUnit.test('Devrait supprimer un utilisateur', assert => {
        dashboardController.deleteUser("test@example.com");
        const usersAfterDeletion = dashboardController.getAllUsers();
        assert.equal(usersAfterDeletion.length, 0, "La liste des utilisateurs devrait être vide après la suppression");
    });
});
