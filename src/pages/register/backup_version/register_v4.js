// Script pour la gestion de l'inscription des utilisateurs

document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner le formulaire d'inscription
    const registerForm = document.getElementById('registration').querySelector('form');

    // Ajouter un écouteur d'événement pour gérer la soumission du formulaire
    registerForm.addEventListener('submit', handleRegisterSubmit);

    async function handleRegisterSubmit(event) {
        event.preventDefault(); // Prévenir le comportement de soumission par défaut

        // Récupérer les valeurs du formulaire
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validation côté client
        if (!validateRegistrationForm(email, password, confirmPassword)) {
            return; // Stopper l'exécution si la validation échoue
        }

        // Créer l'objet FormData pour la soumission
        const formData = {
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };

        try {
            // Envoyer la demande d'inscription au serveur
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la soumission du formulaire d\'inscription');
            }

            const data = await response.json(); // Traiter la réponse JSON
            // Gérer la réponse du serveur ici (ex : redirection, affichage de messages...)
            console.log(data); // Afficher les données pour débogage
        } catch (error) {
            console.error(error);
            // Afficher un message d'erreur à l'utilisateur
        }
    }

    // Fonction pour valider les données du formulaire
    function validateRegistrationForm(email, password, confirmPassword) {
        // Vérifier l'adresse e-mail
        if (!email.includes('@')) {
            alert('Veuillez entrer une adresse e-mail valide.');
            return false;
        }

        // Vérifier la longueur du mot de passe
        if (password.length < 8) {
            alert('Le mot de passe doit contenir au moins 8 caractères.');
            return false;
        }

        // Vérifier que les mots de passe correspondent
        if (password !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas.');
            return false;
        }

        return true; // Retourner vrai si toutes les validations passent
    }
});
