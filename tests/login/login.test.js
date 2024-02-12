QUnit.module('Tests de fonctionnalité de connexion', function() {
    // Test de connexion réussie avec des identifiants corrects
    QUnit.test('Connexion réussie', function(assert) {
        const userDataCenter = new UserDataCenter();
        // Supposons que addUser est une méthode qui ajoute des utilisateurs à userDataCenter
        userDataCenter.addUser(new User('valid@example.com', 'validPassword123', 'validUser'));

        const loginController = new LoginController(userDataCenter);
        const result = loginController.login('valid@example.com', 'validPassword123');

        assert.ok(result, 'L\'utilisateur devrait se connecter avec succès avec les bons identifiants.');
    });

    // Test de connexion échouée avec un mot de passe incorrect
    QUnit.test('Échec de la connexion - Mot de passe incorrect', function(assert) {
        const userDataCenter = new UserDataCenter();
        userDataCenter.addUser(new User('user@example.com', 'userPassword', 'testUser'));

        const loginController = new LoginController(userDataCenter);
        const result = loginController.login('user@example.com', 'wrongPassword');

        assert.notOk(result, 'L\'utilisateur devrait échouer à se connecter avec un mot de passe incorrect.');
    });

    // Test de connexion échouée avec un utilisateur non existant
    QUnit.test('Échec de la connexion - Utilisateur inexistant', function(assert) {
        const userDataCenter = new UserDataCenter();
        // Aucun utilisateur ajouté à userDataCenter pour ce test

        const loginController = new LoginController(userDataCenter);
        const result = loginController.login('nonexistent@example.com', 'anyPassword');

        assert.notOk(result, 'Un utilisateur inexistant devrait échouer à se connecter.');
    });

    // Test pour la gestion des champs de saisie vides
    QUnit.test('Échec de la connexion - Champs vides', function(assert) {
        const userDataCenter = new UserDataCenter();
        const loginController = new LoginController(userDataCenter);
        const resultEmptyEmail = loginController.login('', 'password123');
        const resultEmptyPassword = loginController.login('user@example.com', '');

        assert.notOk(resultEmptyEmail, 'La connexion avec un email vide devrait échouer.');
        assert.notOk(resultEmptyPassword, 'La connexion avec un mot de passe vide devrait échouer.');
    });

});
