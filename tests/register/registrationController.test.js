QUnit.module('Tests du contrôleur d\'inscription', function(hooks) {

    let registrationModel, registrationView, registrationController;

    // Cette fonction utilitaire crée une fonction simulée (mock function) pour suivre les appels et les arguments.
    function createMockFunction(name) {
        const mockFn = function(...args) {
            console.log(`Fonction simulée '${name}' appelée avec les arguments :`, args);
            mockFn.calls.push(args);
            mockFn.lastCall = args;
            return mockFn.implementation(...args);
        };
        mockFn.calls = [];
        mockFn.lastCall = null;
        mockFn.implementation = () => { console.log(`Implémentation par défaut de la fonction simulée '${name}' appelée.`); };
        return mockFn;
    }

    

    hooks.beforeEach(() => {
        // Préparation de l'environnement HTML pour les tests.
        // Cette étape configure le DOM nécessaire pour tester le contrôleur d'inscription.
        document.getElementById('qunit-fixture').innerHTML = `
        <main class="main-content">
            <section id="registration" class="card">
                <header class="card-header">
                    <h1 class="text-2xl font-bold mb-4">Inscription</h1>
                </header>
                <form id="registration-form" class="card-content">
                    <div class="form-group">
                        <label for="email" class="form-label">Adresse e-mail :</label>
                        <input type="email" id="email" name="email" required class="form-input">
                    </div>
                    <div class="form-group">
                        <label for="password" class="form-label">Mot de passe :</label>
                        <input type="password" id="password" name="password" required class="form-input">
                    </div>
                    <div class="form-group">
                        <label for="confirm-password" class="form-label">Confirmez le mot de passe :</label>
                        <input type="password" id="confirm-password" name="confirm-password" required class="form-input">
                    </div>
                    <div class="form-group">
                        <label for="username" class="form-label">Nom d'utilisateur :</label>
                        <input type="text" id="username" name="username" required class="form-input">
                    </div>
                    <div class="form-group">
                        <label for="name" class="form-label">Prénom :</label>
                        <input type="text" id="name" name="name" required class="form-input">
                    </div>
                    <div class="form-group">
                        <label for="surname" class="form-label">Nom de famille :</label>
                        <input type="text" id="surname" name="surname" required class="form-input">
                    </div>
                    <div class="form-group">
                        <label for="born" class="form-label">Date de naissance :</label>
                        <input type="date" id="born" name="born" required class="form-input">
                    </div>
                    <div class="form-group">
                        <label for="country" class="form-label">Pays:</label>
                        <select id="country" name="country" class="form-input">
                            <!-- Options will be populated here -->
                        </select>
                    </div>
                    <div class="form-group">
                        <button type="submit" id="registerButton" class="btn btn-primary">S'inscrire</button>
                    </div>
                    <div id="formFeedback"></div> 
                </form>
            </section>
        </main>
        `;
        registrationView = new RegistrationView();
        registrationModel = new RegistrationModel();

        registrationModel.createUser = createMockFunction('createUser');
        registrationView.displaySuccess = createMockFunction('displaySuccess');
        registrationView.displayError = createMockFunction('displayError');

        registrationController = new RegistrationController(registrationModel, registrationView);

        registrationView.displaySuccess.implementation = (message) => {
            console.log("displaySuccess appelée avec le message :", message);
        };
        
        registrationView.displayError.implementation = (message) => {
            console.log("displayError appelée avec le message :", message);
        };
    });

    QUnit.test('Le contrôleur gère correctement les données d\'inscription', function(assert) {
        let done = assert.async();
        let testData = {
            email: 'test@example.com',
            password: 'password123',
            username: 'user123', 
            name: 'Toto',
            surname: 'Man',
            born: '1990-01-01',
            country: 'France'
        };
    
        console.log("Début du test : Le contrôleur gère correctement les données d'inscription");
    
        registrationController.handleRegisterUser(testData);

        setTimeout(() => {
            assert.ok(registrationModel.createUser.calls.length > 0, 'createUser devrait être appelée au moins une fois');
            
            let expectedArgs = [testData.email, testData.password, testData.username, testData.name, testData.surname, testData.born, testData.country];
            assert.deepEqual(registrationModel.createUser.calls[0], expectedArgs, 'createUser appelée avec les arguments attendus');
            
            assert.equal(registrationView.displaySuccess.calls.length, 1, 'displaySuccess devrait être appelée une fois');
            
            done();
        }, 1000);
    });
});