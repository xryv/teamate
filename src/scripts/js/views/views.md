# Vues

Le répertoire des Vues orchestre l'interaction utilisateur avec l'interface graphique de l'application, reliant directement les actions des utilisateurs à la logique métier et aux données gérées par les contrôleurs et les modèles.

| Fichier               | Description                                  | Utilitaires Clés                                                                                    | Compléments                              |
|-----------------------|----------------------------------------------|-----------------------------------------------------------------------------------------------------|------------------------------------------|
| `DashboardView.js`    | Gère l'affichage du tableau de bord.         | - Affichage des utilisateurs<br>- Suppression d'utilisateurs                                        | Appelé par `dashboardController`.       |
| `LoginView.js`        | Traite l'interface de connexion utilisateur. | - Traitement de la connexion<br>- Affichage des messages de retour                                  | Utilise `loginController` pour la logique de connexion. |
| `RegistrationView.js` | Gère l'interface du formulaire d'inscription.| - Gestion du formulaire d'inscription<br>- Affichage des messages d'erreur et de succès              | Interagit avec `registrationController` pour l'enregistrement des utilisateurs. |

Chaque vue dans ce répertoire est conçue pour offrir une expérience utilisateur fluide et intuitive, en fournissant des retours visuels et en facilitant la navigation à travers l'application. Elles permettent une séparation claire entre l'interface utilisateur et la logique d'application, contribuant à l'architecture globale de l'application en rendant le code plus modulaire, maintenable et évolutif.

# Documentation des Vues

# Vues

Le répertoire des Vues connecte les actions utilisateur avec la logique applicative, orchestrant l'interface utilisateur.

## `DashboardView.js`

**Description**: Gère l'affichage et les interactions sur le tableau de bord, notamment la liste des utilisateurs.

### Méthodes
| Méthode            | Description                                                                                   | Utilitaires Clés                                                                    |
|--------------------|-----------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| `constructor(controller)` | Initialise la vue, configure l'élément du tableau des utilisateurs et lie le contrôleur.      | -                                                                                    |
| `renderUsers(users)`      | Affiche les utilisateurs dans le tableau de bord, permettant leur gestion.                    | - Affichage des utilisateurs<br>- Suppression d'utilisateurs                        |

## `LoginView.js`

**Description**: Assure la gestion de l'interface de connexion, facilitant la saisie des identifiants par l'utilisateur.

### Méthodes
| Méthode              | Description                                                                                 | Utilitaires Clés                                                     |
|----------------------|---------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| `initialize()`       | Met en place le formulaire de connexion et attache l'écouteur d'événements pour sa soumission. | -                                                                     |
| `handleSubmit(e)`    | Traite la soumission du formulaire de connexion, en validant les entrées utilisateur.       | - Traitement de la connexion<br>- Affichage des messages de retour   |

## `RegistrationView.js`

**Description**: Encadre le processus d'inscription, collectant les informations utilisateur via un formulaire.

### Méthodes
| Méthode                  | Description                                                                                   | Utilitaires Clés                                                               |
|--------------------------|-----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| `initialize()`           | Initialise l'élément de formulaire d'inscription et ses écouteurs d'événements.               | -                                                                              |
| `bindFormSubmit(callback)` | Lie un callback à la soumission du formulaire, permettant de traiter les données utilisateur. | -                                                                              |
| `submitHandler(e)`       | Gère la soumission du formulaire d'inscription, en capturant et validant les données.         | - Gestion du formulaire d'inscription<br>- Affichage des messages d'erreur et de succès |
| `displayError(message)`  | Affiche un message d'erreur pour informer l'utilisateur d'un problème.                        | -                                                                              |
| `displaySuccess(message)`| Montre un message de succès pour confirmer l'inscription réussie.                             | -                                                                              |
| `clearForm()`            | Nettoie les champs du formulaire post-inscription.                                            | -                                                                              |

