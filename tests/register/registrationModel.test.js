// Suite de tests pour la validation des données d'inscription
QUnit.module('Tests de validation d\'inscription', function() {

    // Test de validation de l'email avec des cas plus précis
    QUnit.test('Validation de l\'email', function(assert) {
        assert.notOk(validateEmail('just@'), 'Un email sans domaine doit échouer à la validation.');
        assert.notOk(validateEmail('noatsign.com'), 'Un email sans @ doit échouer à la validation.');
        assert.ok(validateEmail('correct@example.com'), 'Un email correct doit passer la validation.');
    });

    // Test de validation du mot de passe avec des critères spécifiques
    QUnit.test('Validation du mot de passe', function(assert) {
        assert.notOk(validatePassword('short1'), 'Un mot de passe trop court doit échouer à la validation.');
        assert.notOk(validatePassword('nouppercase1!'), 'Un mot de passe sans majuscule doit échouer à la validation.');
        assert.notOk(validatePassword('NOLOWERCASE1!'), 'Un mot de passe sans minuscule doit échouer à la validation.');
        assert.notOk(validatePassword('NoSpecial123'), 'Un mot de passe sans symbole doit échouer à la validation.');
        assert.ok(validatePassword('Valid1Password!'), 'Un mot de passe conforme doit passer la validation.');
    });

    // Test de validation du nom d'utilisateur avec des règles spécifiques
    QUnit.test('Validation du nom d\'utilisateur', function(assert) {
        assert.notOk(validateUsername('us'), 'Un nom d’utilisateur trop court doit échouer à la validation.');
        assert.notOk(validateUsername('user@name'), 'Un nom d’utilisateur avec des caractères spéciaux doit échouer à la validation.');
        assert.ok(validateUsername('username123'), 'Un nom d\'utilisateur conforme doit passer la validation.');
    });

    // Tests de validation pour les noms, avec des critères clairs
    QUnit.test('Validation du prénom', function(assert) {
        assert.notOk(validateFirstName('   '), 'Un prénom constitué d\'espaces doit échouer à la validation.');
        assert.ok(validateFirstName('Jean'), 'Un prénom valide doit passer la validation.');
    });

    QUnit.test('Validation du nom de famille', function(assert) {
        assert.notOk(validateLastName(''), 'Un nom de famille vide doit échouer à la validation.');
        assert.ok(validateLastName('Dupont'), 'Un nom de famille valide doit passer la validation.');
    });

    // Test de validation de la date de naissance avec le format correct et la logique de date
    QUnit.test('Validation de la date de naissance', function(assert) {
        // Assurez-vous que le format de la date est correct (AAAA-MM-JJ) pour ces tests
        assert.notOk(validateDateOfBirth('1980-02-31'), 'Une date de naissance avec un jour inexistant doit échouer à la validation.'); // February 31st does not exist.
        assert.notOk(validateDateOfBirth('2050-01-01'), 'Une date de naissance dans le futur doit échouer à la validation.'); // A future date.
        assert.ok(validateDateOfBirth('1990-01-01'), 'Une date de naissance valide doit passer la validation.'); // A valid past date.
    });


    // Test de validation du pays, potentiellement contre une liste de pays valides
    QUnit.test('Validation du pays', function(assert) {
        assert.notOk(validateCountry(''), 'Un champ de pays vide doit échouer à la validation.');
        // Supposer que `validateCountry` pourrait aussi vérifier la validité contre une liste pré-définie
        assert.ok(validateCountry('France'), 'Un pays valide doit passer la validation.');
    });

    // Commentaires explicatifs pour chaque test, assurant que les raisons des échecs ou réussites sont bien comprises.
});
