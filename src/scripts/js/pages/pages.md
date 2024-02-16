# Pages

Les scripts situés dans le répertoire des Pages initialisent et coordonnent les fonctionnalités clés de l'application, en associant modèles, vues et contrôleurs selon les besoins de chaque page spécifique.

## Tableau Récapitulatif

| Fichier         | Description                                                      | Fonctionnalité Clé                                  |
|-----------------|------------------------------------------------------------------|-----------------------------------------------------|
| `dashboard.js`  | Initialise la page du tableau de bord avec ses fonctionnalités. | Affichage et gestion des utilisateurs.              |
| `login.js`      | Configure la page de connexion et ses interactions.             | Connexion des utilisateurs.                         |
| `register.js`   | Prépare la page d'inscription pour la collecte des données.     | Inscription de nouveaux utilisateurs.               |

Chaque fichier joue un rôle essentiel dans l'initialisation de l'application, s'assurant que les utilisateurs ont accès aux fonctionnalités attendues dès le chargement de la page.

# Détail des Fichiers


## `dashboard.js`

**Fonctionnalité Clé**: Configuration de la page du tableau de bord pour l'affichage et la gestion des utilisateurs.

### Tableau d'Initialisation
| Étape               | Action                                                                                          |
|---------------------|-------------------------------------------------------------------------------------------------|
| Création de données | Instancie `UserDataCenter` pour gérer les données des utilisateurs.                             |
| Liaison MVC         | Instancie `DashboardController` avec `UserDataCenter`, puis crée `DashboardView` liée au contrôleur. |

## `login.js`

**Fonctionnalité Clé**: Mise en place de la page de connexion et traitement des tentatives de connexion des utilisateurs.

### Tableau d'Initialisation
| Étape               | Action                                                                                          |
|---------------------|-------------------------------------------------------------------------------------------------|
| Création de données | Instancie `UserDataCenter` pour l'accès aux données des utilisateurs.                           |
| Liaison MVC         | Crée `LoginController` avec `UserDataCenter`, puis initialise `LoginView` et la lie au contrôleur. |

## `register.js`

**Fonctionnalité Clé**: Configuration de la page d'inscription pour la collecte et le traitement des données des nouveaux utilisateurs.

### Tableau d'Initialisation
| Étape               | Action                                                                                          |
|---------------------|-------------------------------------------------------------------------------------------------|
| Création de données | Instancie `UserDataCenter` pour la gestion centralisée des données des utilisateurs.            |
| Liaison MVC         | Instancie `RegistrationModel`, crée `RegistrationView`, puis lie le tout avec `RegistrationController`. |

Ces tableaux résument les étapes d'initialisation cruciales pour chaque page, démontrant l'approche structurée pour activer les fonctionnalités spécifiques de l'application. Cette organisation permet une clarté dans la mise en place des interactions utilisateur et la gestion des données, assurant une expérience utilisateur cohérente et intuitive à travers les différentes pages de l'application.