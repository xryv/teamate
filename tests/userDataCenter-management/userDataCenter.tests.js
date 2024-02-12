// Définition d'un module QUnit pour les tests sur 'UserDataCenter'.
// Teste les fonctionnalités d'ajout, récupération et suppression d'utilisateurs.
QUnit.module('Tests UserDataCenter', function() {

    // Teste l'ajout d'un utilisateur.
    QUnit.test('Test d\'ajout d\'un utilisateur', function(assert) {
        const userDataCenter = new UserDataCenter();
        
        userDataCenter.addUser(new User('newuser@example.com', 'password123'));
        
        assert.equal(userDataCenter.getAllUsers().length, 1, 'Un utilisateur a été ajouté avec succès.');
    });

    // Teste la récupération de tous les utilisateurs.
    QUnit.test('Test de récupération de tous les utilisateurs', function(assert) {
        const userDataCenter = new UserDataCenter();
        
        userDataCenter.addUser(new User('user1@example.com', 'password123'));
        userDataCenter.addUser(new User('user2@example.com', 'password123'));
        
        assert.equal(userDataCenter.getAllUsers().length, 2, 'Tous les utilisateurs ont été récupérés avec succès.');
    });

    // Teste la suppression d'un utilisateur par email.
    QUnit.test('Test de suppression d\'un utilisateur par email', function(assert) {
        const userDataCenter = new UserDataCenter();
        
        userDataCenter.preloadUsers();
        
        const userEmailToDelete = "uniqueuser@example.com";
        userDataCenter.addUser(new User(userEmailToDelete, "uniquePassword", "UniqueUser", "Unique", "User", "1990-01-01", "UniqueLand"));
        
        assert.equal(userDataCenter.getAllUsers().some(user => user.email === userEmailToDelete), true, 'L\'utilisateur à supprimer est initialement présent dans la liste.');
        
        userDataCenter.deleteUserByEmail(userEmailToDelete);
        
        assert.equal(userDataCenter.getAllUsers().some(user => user.email === userEmailToDelete), false, 'L\'utilisateur a été supprimé avec succès de la liste.');
    });
});
