# Documentation de la Page d'Inscription

Cette documentation détaille la page `register.html` et son intégration avec les scripts JavaScript et les styles SCSS.

## Structure HTML et Correspondance

| Élément HTML                          | Classe/ID               | Fonction JavaScript                       | Description                               | SCSS                           |
|---------------------------------------|-------------------------|-------------------------------------------|-------------------------------------------|--------------------------------|
| `<main class="main-content">`         | `main-content`          | N/A                                       | Conteneur principal pour la page d'inscription | `main.scss`                    |
| `<section id="registration">`         | `card`                  | `registrationController.init()`          | Carte contenant le formulaire d'inscription | `components/_cards.scss`       |
| `<header class="card-header">`        | `card-header`           | N/A                                       | En-tête de la carte de formulaire         | `components/_cards.scss`       |
| `<form id="registration-form">`       | `registration-form`     | `registrationController.handleRegister()` | Formulaire de saisie des données d'inscription | `components/_forms.scss`       |
| `<input type="email">`                | `form-input`            | `validateEmail()`                         | Champ pour l'adresse e-mail de l'utilisateur | `components/_forms.scss`       |
| `<input type="password">`             | `form-input`            | `validatePassword()`                      | Champ pour le mot de passe                | `components/_forms.scss`       |
| `<input type="text">` (username)      | `form-input`            | `validateUsername()`                      | Champ pour le nom d'utilisateur            | `components/_forms.scss`       |
| `<input type="text">` (name, surname) | `form-input`            | `validateName()` `validateSurname()`      | Champs pour le prénom et le nom           | `components/_forms.scss`       |
| `<input type="date">`                 | `form-input`            | `validateDateOfBirth()`                   | Champ pour la date de naissance           | `components/_forms.scss`       |
| `<select id="country">`               | `form-input`            | `fetchCountries()`                        | Menu déroulant pour la sélection du pays  | `components/_forms.scss`       |
| `<button type="submit">`              | `btn btn-primary`       | `registrationController.submitForm()`     | Bouton pour soumettre le formulaire       | `components/_buttons.scss`     |
| `<div id="formFeedback">`             | `formFeedback`          | `displayFeedback()`                       | Zone pour les messages de retour          | `utilities/_feedback.scss`     |

## Fonctionnalités JavaScript

Le script `register.js` gère l'initialisation du formulaire, la validation des champs, la soumission des données et l'affichage des messages de retour.

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

Les styles pour la page d'inscription sont principalement définis dans les fichiers SCSS suivants :

- **`_forms.scss`** : Styles pour les champs de formulaire.
- **`_buttons.scss`** : Styles pour les boutons.

## +Navigation

Des hyperliens sont intégrés pour une navigation fluide vers la documentation associée :

- Retour à la [documentation JavaScript principale](../js/js.md).
- Consultez le [guide de style SCSS](../styles/README.md) pour plus d'informations sur le styling.
