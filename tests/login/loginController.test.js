QUnit.module('Tests du LoginController', function() {
    // Configuration pour les tests : création d'instances de UserDataCenter et de LoginController
    let userDataCenter = new UserDataCenter();
    let loginController = new LoginController(userDataCenter);

    QUnit.test('Connexion avec des identifiants corrects', function(assert) {
        // Configuration : Ajout d'un utilisateur fictif
        userDataCenter.addUser(new User('test@example.com', 'correctPassword'));

        // Action : Tentative de connexion avec les bons identifiants
        let result = loginController.login('test@example.com', 'correctPassword');

        // Vérification : La connexion devrait réussir
        assert.ok(result, 'La connexion devrait réussir avec les bons identifiants.');
    });

    QUnit.test('Connexion avec des identifiants incorrects', function(assert) {
        // Configuration : Assurer que l'utilisateur existe dans UserDataCenter
        userDataCenter.addUser(new User('test@example.com', 'correctPassword'));

        // Action : Tentative de connexion avec des identifiants incorrects
        let result = loginController.login('test@example.com', 'wrongPassword');

        // Vérification : La connexion devrait échouer
        assert.notOk(result, 'La connexion devrait échouer avec des identifiants incorrects.');
    });

    // Des tests supplémentaires pourraient inclure la gestion de cas limites, tels que des utilisateurs non existants
});
