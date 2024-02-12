// tests\userDataCenter-management\userDataCenter-tests.js

// Définition d'un module QUnit nommé 'UserDataCenter Tests'.
// Ce module est destiné à regrouper les tests unitaires vérifiant le bon fonctionnement des opérations
// au sein de la classe 'UserDataCenter', responsable de la gestion des utilisateurs.
QUnit.module('UserDataCenter Tests', function() {

    // Premier test unitaire vérifiant la fonctionnalité d'ajout d'un utilisateur.
    // L'objectif est de s'assurer que la méthode 'addUser' ajoute effectivement un nouvel utilisateur
    // dans la structure de données interne du UserDataCenter.
    QUnit.test('Add User Test', function(assert) {
        // Création d'une instance de 'UserDataCenter', prête à être testée.
        const userDataCenter = new UserDataCenter();
        
        // Ajout d'un nouvel utilisateur au centre de données en utilisant la méthode 'addUser'.
        // Cela simule l'action d'inscrire un nouvel utilisateur dans le système.
        userDataCenter.addUser(new User('newuser@example.com', 'password123'));
        
        // Assertion vérifiant si, après l'ajout, la longueur de la liste des utilisateurs est égale à 1.
        // Cela confirme que l'utilisateur a bien été ajouté à la structure de données.
        assert.equal(userDataCenter.getAllUsers().length, 1, 'User was successfully added.');
    });

    // Deuxième test unitaire évaluant la capacité à récupérer la liste de tous les utilisateurs.
    // Ce test vise à confirmer que la méthode 'getAllUsers' retourne une liste complète des utilisateurs inscrits.
    QUnit.test('Get All Users Test', function(assert) {
        // Initialisation d'un nouveau 'UserDataCenter' pour le contexte de ce test.
        const userDataCenter = new UserDataCenter();
        
        // Ajout de deux utilisateurs distincts au centre de données, simulant un scénario où plusieurs utilisateurs sont enregistrés.
        userDataCenter.addUser(new User('user1@example.com', 'password123'));
        userDataCenter.addUser(new User('user2@example.com', 'password123'));
        
        // Assertion s'assurant que la méthode 'getAllUsers' renvoie une liste contenant exactement deux utilisateurs,
        // confirmant ainsi le bon fonctionnement de la gestion des utilisateurs au sein de 'UserDataCenter'.
        assert.equal(userDataCenter.getAllUsers().length, 2, 'All users were successfully retrieved.');
    });
});
