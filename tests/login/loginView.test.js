QUnit.module('Tests de LoginView', function(hooks) {
    hooks.beforeEach(function() {
        // Configuration initiale avec le formulaire de connexion
        const fixture = document.getElementById('qunit-fixture');
        fixture.innerHTML = `
            <form id="login-form">
                <input type="email" name="email" value="test@example.com">
                <input type="password" name="password" value="password123">
                <button type="submit">Connexion</button>
            </form>
            <div id="loginFeedback"></div>
        `;

        // Mock de LoginController avec une méthode de connexion simple
        const mockLoginController = {
            login: function(email, password) {
                return email === "test@example.com" && password === "password123";
            }
        };

        // Initialisation de LoginView avec le contrôleur simulé
        this.loginView = new LoginView(mockLoginController);
    });

    QUnit.test('La soumission du formulaire déclenche la méthode de connexion', function(assert) {
        const done = assert.async();
        const feedbackElement = document.getElementById('qunit-fixture').querySelector('#loginFeedback');

        // Déclenchement de la soumission du formulaire
        const form = document.querySelector('#login-form');
        form.dispatchEvent(new Event('submit'));

        // Utilisation de setTimeout pour permettre à la gestion asynchrone de la soumission de se compléter
        setTimeout(() => {
            assert.strictEqual(feedbackElement.textContent, "Connexion réussie !", "Le feedback doit indiquer une connexion réussie.");
            done();
        }, 100); // Ajustez le délai au besoin
    });
});
