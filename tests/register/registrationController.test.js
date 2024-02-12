QUnit.module('Registration Controller Tests', function(hooks) {

    let registrationModel, registrationView, registrationController;

    // Cette fonction utilitaire crée une fonction simulée (mock function) pour suivre les appels et les arguments.
    // Elle est utilisée pour simuler les comportements de certaines fonctions sans exécuter leur logique réelle.
    function createMockFunction(name) { // Add a name parameter for identification
        const mockFn = function(...args) {
            console.log(`Mock function '${name}' called with arguments:`, args);
            mockFn.calls.push(args);
            mockFn.lastCall = args;
            return mockFn.implementation(...args);
        };
        mockFn.calls = [];
        mockFn.lastCall = null;
        mockFn.implementation = () => { console.log(`Mock function '${name}' default implementation called.`); };
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

        // À ce stade, il est sûr d'instancier RegistrationView et RegistrationModel
        registrationView = new RegistrationView();
        registrationModel = new RegistrationModel();

        // Remplacement de createUser par une fonction mock
        registrationModel.createUser = createMockFunction();
        // Définition de l'implémentation de la fonction mock pour simuler la création d'un utilisateur
        // et retourner directement les données passées en argument
        // Inside beforeEach or where you define your mock functions
        // Inside beforeEach or where you define your mock functions
        registrationModel.createUser.implementation = (email, password, username, name, surname, born, country) => {
            // Ensure the User class is imported or accessible in this scope
            return new User(email, password, username, name, surname, born, country);
        };

        
        


        // Mock des méthodes d'affichage de la vue pour empêcher les mises à jour réelles du DOM
        registrationView.displaySuccess = createMockFunction();
        registrationView.displayError = createMockFunction();

        // OR 

        // Inside beforeEach
        registrationModel.createUser = createMockFunction('createUser');
        registrationView.displaySuccess = createMockFunction('displaySuccess');
        registrationView.displayError = createMockFunction('displayError');


        // Création d'une instance du contrôleur en le reliant au modèle et à la vue mockés
        registrationController = new RegistrationController(registrationModel, registrationView);

        registrationView.displaySuccess.implementation = (message) => {
            console.log("5555displaySuccess called with message:", message);
        };
        
        registrationView.displayError.implementation = (message) => {
            console.log("44444displayError called with message:", message);
        };
        
        });


    QUnit.test('Controller handles registration data correctly', function(assert) {
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
    
        console.log("Starting test: Controller handles registration data correctly");
    
        // Simulate form submission
        registrationController.handleRegisterUser(testData);

        console.log('createUser calls:', registrationModel.createUser.calls);
        console.log('displaySuccess calls:', registrationView.displaySuccess.calls);
        console.log('displayError calls:', registrationView.displayError.calls);

        // After calling handleRegisterUser
        setTimeout(() => {
            // Assuming createUser tracks calls in a 'calls' array
            assert.ok(registrationModel.createUser.calls.length > 0, 'createUser should be called at least once');
            
            // Checking if createUser was called with expected arguments
            let expectedArgs = [testData.email, testData.password, testData.username, testData.name, testData.surname, testData.born, testData.country];
            assert.deepEqual(registrationModel.createUser.calls[0], expectedArgs, 'createUser called with expected args');
            
            // Checking if displaySuccess was called once
            assert.equal(registrationView.displaySuccess.calls.length, 1, 'displaySuccess called once');
            
            done();
        }, 1000); // Adjust timeout as needed
    });

        
});