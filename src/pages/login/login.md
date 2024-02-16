# Documentation de la Page de Connexion

Cette documentation détaille les composants de la page `login.html` et leurs interactions avec les scripts JavaScript et les styles SCSS pour une intégration harmonieuse.

## Éléments Clés et Intégration JavaScript

| Élément HTML                  | Classe/ID              | Fonction JavaScript                | Description                              | SCSS                           |
|-------------------------------|------------------------|------------------------------------|------------------------------------------|--------------------------------|
| `<main class="main-content">` | `main-content`         | N/A                                | Zone principale de contenu               | `main.scss`                    |
| `<section id="login">`        | `card`                 | N/A                                | Carte pour le formulaire de connexion    | `components/_cards.scss`       |
| `<header class="card-header">`| `card-header`          | N/A                                | En-tête de la section de connexion       | `components/_cards.scss`       |
| `<form id="login-form">`      | `login-form`           | `loginController.handleLogin()`    | Formulaire pour saisir les identifiants  | `components/_forms.scss`       |
| `<input type="email">`        | `form-input`           | `loginController.validateEmail()`  | Champ de saisie pour l'e-mail            | `components/_forms.scss`       |
| `<input type="password">`     | `form-input`           | `loginController.validatePassword()`| Champ de saisie pour le mot de passe     | `components/_forms.scss`       |
| `<button type="submit">`      | `btn btn-primary`      | `loginController.submitForm()`     | Bouton pour envoyer le formulaire        | `components/_buttons.scss`     |
| `<div id="loginFeedback">`    | `loginFeedback`        | `loginController.displayFeedback()`| Zone de messages de retour               | `utilities/_feedback.scss`     |
| Liens d'inscription et MDP    | N/A                    | N/A                                | Liens vers inscription et MDP oublié     | N/A                            |

## Fonctionnalités JavaScript

Le script `login.js` incorpore plusieurs fonctions clés :

- **Initialisation de la Vue** : Configuration de l'interface de connexion et écoute des événements de soumission du formulaire.
- **Validation des Entrées** : Vérifie que l'adresse e-mail et le mot de passe respectent les formats attendus.
- **Soumission et Traitement** : Envoie les données de connexion au contrôleur et gère les réponses.
- **Affichage des Retours** : Montre les messages de succès ou d'erreur en fonction des résultats de la tentative de connexion.

## JavaScripts liés

- **UserDataCenter** : Gère les données des utilisateurs.
    - **Fichier** : [userDataCenter.js](../scripts/js/models/userDataCenter.js)
    - **Documentation** : [Documentation des Modèles](../scripts/js/models/models.md#userdatacenter)

- **LoginController** : Contrôle le processus de connexion des utilisateurs.
    - **Fichier** : [loginController.js](../scripts/js/controllers/loginController.js)
    - **Documentation** : [Documentation des Contrôleurs](../scripts/js/controllers/controllers.md#logincontroller)

- **LoginView** : Gère l'affichage et les interactions de la page de connexion.
    - **Fichier** : [loginView.js](../scripts/js/views/loginView.js)
    - **Documentation** : [Documentation des Vues](../scripts/js/views/views.md#loginview)

- **Validation** : Contient des fonctions pour valider les informations de connexion fournies par l'utilisateur.
    - **Fichier** : [validation.js](../scripts/js/utils/validation.js)
    - **Documentation** : [Documentation des Utilitaires](../scripts/js/utils/validation.md)


## Styles SCSS

Les styles de la page de connexion proviennent des fichiers SCSS suivants :

- **`_forms.scss`** : Contient les styles pour les champs de saisie et les étiquettes.
- **`_buttons.scss`** : Décrit les styles pour les boutons de la page.
- **`_feedback.scss`** : (Si existant) Spécifie les styles pour les messages d'erreur ou de confirmation.

## +Intégration 

- La [documentation JavaScript principale](../js/js.md) fournit des détails sur la structure générale et les fichiers JS.
- Le [guide de style SCSS](../styles/README.md) explique comment les styles sont appliqués à la page de connexion.

