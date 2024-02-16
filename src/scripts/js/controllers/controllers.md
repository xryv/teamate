# Contrôleurs

Le répertoire des Contrôleurs contient la logique pour gérer les entrées des utilisateurs et intégrer les vues de l'application avec ses modèles sous-jacents.

| Fichier                      | Description                                               | Méthodes Utilisables     |
|------------------------------|-----------------------------------------------------------|--------------------------|
| `dashboardController.js`     | Gère les interactions sur la page du tableau de bord.     | - `initDashboard()`      |
| `loginController.js`         | Gère la logique de connexion des utilisateurs.            | - `authenticateUser()`   |
| `registrationController.js`  | Facilite le processus d'inscription des utilisateurs.     | - `registerUser()`       |

Ces contrôleurs sont conçus pour être appelés depuis les vues correspondantes ou lors de flux d'application spécifiques, tels que l'authentification ou l'inscription des utilisateurs.

# Documentation des Contrôleurs

Le répertoire des Contrôleurs orchestre les interactions entre l'interface utilisateur de l'application (vues) et son modèle de données (modèles), assurant un flux de données et d'événements logique et fluide. Ci-dessous, vous trouverez une documentation détaillée pour chaque contrôleur au sein de ce répertoire, incluant leurs fonctionnalités et les méthodes qu'ils exposent pour une utilisation dans le contexte plus large de l'application.

## `dashboardController.js`

**Description** : Gère les interactions sur la page du tableau de bord, telles que la récupération et la suppression des utilisateurs, facilitant les mises à jour dynamiques de l'interface utilisateur en fonction de l'état de l'application.

| Méthode               | Description                                                           |
|-----------------------|-----------------------------------------------------------------------|
| `getAllUsers()`       | Récupère tous les utilisateurs du `UserDataCenter` pour l'affichage. |
| `deleteUser(email)`   | Supprime un utilisateur par email et met à jour la vue pour refléter ce changement. |

**Interactions** :
- Interagit avec `UserDataCenter` pour récupérer et manipuler les données des utilisateurs.
- Interagit éventuellement avec un composant de vue pour mettre à jour l'UI dynamiquement après la suppression d'un utilisateur.

## `loginController.js`

**Description** : Gère la logique de connexion des utilisateurs, incluant l'authentification en validant les identifiants des utilisateurs par rapport aux données utilisateurs stockées.

| Méthode                 | Description                                                           |
|-------------------------|-----------------------------------------------------------------------|
| `login(email, password)`| Authentifie un utilisateur basé sur l'email et le mot de passe, renvoyant une valeur booléenne indiquant le succès ou l'échec de la tentative de connexion. |

**Interactions** :
- Utilise `UserDataCenter` pour accéder aux données des utilisateurs de l'application pour l'authentification.
- Aucune interaction directe avec la vue n'est détaillée, mais une authentification réussie ou échouée déclenche généralement des mises à jour de l'UI ou de la navigation.

## `registrationController.js`

**Description** : Supervise le processus d'inscription des utilisateurs, de la collecte et validation des données à la création de l'utilisateur et son ajout au répertoire de données utilisateur.

| Méthode                        | Description                                                           |
|--------------------------------|-----------------------------------------------------------------------|
| `handleRegisterUser(formData)` | Traite l'inscription de l'utilisateur en utilisant les données du formulaire fournies, inclut la validation et la création de l'utilisateur. |
| `validateFormData(formData)`   | Valide les données saisies par l'utilisateur contre des critères spécifiques, renvoyant une liste d'erreurs le cas échéant. |

**Interactions** :
- Engage avec `RegistrationModel` pour la création de nouvelles instances d'utilisateur basées sur des données de formulaire validées.
- Interagit avec `UserDataCenter` pour ajouter les nouveaux utilisateurs créés dans le répertoire central des utilisateurs.
- Communique avec `registrationView` pour afficher des messages de succès, des erreurs, ou pour nettoyer le formulaire après l'inscription.

### Résumé

Chaque contrôleur joue un rôle spécifique dans la gestion des interactions des utilisateurs au sein de l'application, assurant que les données circulent sans heurt entre l'interface utilisateur et le modèle de données sous-jacent. Ils sont conçus pour encapsuler et abstraire les complexités de la manipulation des données, de la validation, et des mises à jour de l'UI, les rendant cruciaux pour maintenir l'intégrité opérationnelle et l'expérience utilisateur de l'application.