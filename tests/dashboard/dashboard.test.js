QUnit.module('Dashboard Tests', function(hooks) {
    let dashboardController;
    let userDataCenter;

    hooks.beforeEach(() => {
        userDataCenter = new UserDataCenter();
        userDataCenter.addUser(new User("test@example.com", "password", "testUser", "Test", "User", "2000-01-01", "TestLand"));
        dashboardController = new DashboardController(userDataCenter);
        // Mock the view to avoid null innerHTML issues during testing
        dashboardController.view = {
            renderUsers: function(users) {
                console.log('Mock renderUsers called with users:', users);
            }
        };
        console.log('BeforeEach hook setup completed.');
    });

    QUnit.test('Should list all users', assert => {
        const users = dashboardController.getAllUsers();
        assert.equal(users.length, 1, "One user is listed in the dashboard");
    });

    QUnit.test('Should delete a user', assert => {
        dashboardController.deleteUser("test@example.com");
        const usersAfterDeletion = dashboardController.getAllUsers();
        assert.equal(usersAfterDeletion.length, 0, "User list should be empty after deletion");
    });
});
