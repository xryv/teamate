// Définition du module de tests QUnit pour la classe 'User'.
QUnit.module('Tests de la classe User', function() {
    
    // Test de création d'un utilisateur
    QUnit.test('Test de création d\'utilisateur', function(assert) {
        // Création d'une instance de la classe 'User' avec des valeurs d'exemple pour tous les champs
        const user = new User('test@example.com', 'password123', 'user123', 'Toto', 'Man', '1990-01-01', 'France');
        
        // Test pour vérifier que chaque attribut de l'utilisateur créé correspond à ceux passés au constructeur
        assert.equal(user.email, 'test@example.com', 'L\'email doit être correctement attribué.');
        assert.equal(user.password, 'password123', 'Le mot de passe doit être correctement attribué.');
        assert.equal(user.username, 'user123', 'Le nom d\'utilisateur doit être correctement attribué.');
        assert.equal(user.name, 'Toto', 'Le prénom doit être correctement attribué.');
        assert.equal(user.surname, 'Man', 'Le nom de famille doit être correctement attribué.');
        assert.equal(user.born, '1990-01-01', 'La date de naissance doit être correctement attribuée.');
        assert.equal(user.country, 'France', 'Le pays doit être correctement attribué.');
    });
});
