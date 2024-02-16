# Modèles

Le répertoire des Modèles encapsule la logique métier de l'application et ses structures de données.

| Fichier               | Description                                        | Classes Utilisables    |
|-----------------------|----------------------------------------------------|------------------------|
| `registrationModel.js`| Gère la création de nouveaux comptes utilisateurs. | - `RegistrationModel`  |
| `user.js`             | Définit la structure de données d'un utilisateur.  | - `User`               |
| `userDataCenter.js`   | Répertoire central pour gérer les données utilisateurs. | - `UserDataCenter`  |

Ces modèles représentent la couche principale de gestion des données dans l'application, fournissant des structures et de la logique pour la gestion des données utilisateurs.

## `registrationModel.js`

**Description**: Ce modèle est conçu pour gérer le processus d'enregistrement des utilisateurs, en facilitant la création de nouveaux comptes utilisateur à partir des données fournies. Il joue un rôle central dans l'inscription des utilisateurs, assurant la validation et l'initialisation des informations d'utilisateur dans le système.

| Méthode             | Paramètres                                                                                          | Description                                                                                                               |
|---------------------|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| **createUser**      | - **email**: Adresse email de l'utilisateur.<br>- **password**: Mot de passe de l'utilisateur.<br>- **username**: Nom d'utilisateur.<br>- **name**: Prénom de l'utilisateur.<br>- **surname**: Nom de famille de l'utilisateur.<br>- **born**: Date de naissance de l'utilisateur.<br>- **country**: Pays de l'utilisateur. | Crée et retourne une nouvelle instance de `User` avec les données fournies. Les rôles et statuts sont assignés par défaut. |


**Interactions**:
- Crée des instances de la classe `User`, en utilisant directement les données saisies lors du processus d'inscription.
- Peut interagir avec `UserDataCenter` pour ajouter directement le nouvel utilisateur créé dans la base de données de l'application.

## `user.js`

**Description**: La classe `User` définit la structure et le comportement de base des objets utilisateur au sein de l'application. Elle encapsule toutes les informations pertinentes d'un utilisateur, offrant une interface standardisée pour accéder et manipuler ces données.

| Méthode              | Description                                                              |
|----------------------|--------------------------------------------------------------------------|
| **Constructeur**     | Initialise une nouvelle instance de `User` avec les attributs spécifiés. |
| **getEmail()**       | Retourne l'adresse email de l'utilisateur.                               |
| **getPassword()**    | Retourne le mot de passe de l'utilisateur.                               |
| **getUsername()**    | Retourne le nom d'utilisateur.                                           |
| **getName()**        | Retourne le prénom de l'utilisateur.                                     |
| **getSurname()**     | Retourne le nom de famille de l'utilisateur.                             |
| **getBorn()**        | Retourne la date de naissance de l'utilisateur.                          |
| **getCountry()**     | Retourne le pays de l'utilisateur.                                       |
| **getRole()**        | Retourne le rôle de l'utilisateur dans l'application.                    |
| **getStatus()**      | Retourne le statut actuel de l'utilisateur (actif, inactif, etc.).       |


**Interactions**:
- Les instances de `User` sont généralement créées et gérées par `RegistrationModel` pour l'enregistrement et par `UserDataCenter` pour la gestion des utilisateurs.
- Les getters offrent une méthode sécurisée pour accéder aux données de l'utilisateur, qui peuvent être utilisées à travers l'application pour diverses fonctionnalités, notamment l'affichage de données utilisateur ou la mise en œuvre de logiques de contrôle d'accès.

## `userDataCenter.js`

**Description**: Agit comme le noyau de la gestion des utilisateurs dans l'application, `UserDataCenter` est responsable du stockage, de la récupération, de la mise à jour, et de la suppression des données utilisateur. Il offre une interface centralisée pour interagir avec la liste des utilisateurs.

| Méthode                             | Description                                                                                   |
|-------------------------------------|-----------------------------------------------------------------------------------------------|
| `addUser(user)`                     | Ajoute un nouvel utilisateur au répertoire.                                                  |
| `setUserRole(email, newRole)`       | Modifie le rôle d'un utilisateur spécifique identifié par son email.                         |
| `getUsersByRole(role)`              | Récupère tous les utilisateurs ayant un rôle spécifique.                                      |
| `getAllUsers()`                     | Retourne la liste de tous les utilisateurs.                                                   |
| `deleteUserByEmail(email)`          | Supprime un utilisateur du répertoire en fonction de son email.                               |
| `preloadUsers()`                    | Précharge dans le répertoire une liste d'utilisateurs fictifs pour des besoins de test ou de démonstration. |

**Interactions**:
- `UserDataCenter` sert de pont entre les différentes parties de l'application nécessitant l'accès ou la modification des données utilisateur, tels que les contrôleurs pour les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer).
- Interagit étroitement avec `RegistrationModel` pour l'ajout de nouveaux utilisateurs et avec les contrôleurs pour fournir les données utilisateur nécessaires lors de diverses opérations.