Voici un aperçu structuré de l'architecture de notre application web, présenté pour guider les développeurs à travers les différents scripts et leur interaction au sein de l'application :

```
Application Web
│
├── index.html (Point d'entrée)
│
├── js/ (JavaScript)
│   ├── models/ (Gestion des données)
│   │   ├── User.js (Définit la structure des données utilisateur)
│   │   └── UserDataCenter.js (Gère la collection d'utilisateurs)
│   │
│   ├── views/ (Interface Utilisateur)
│   │   ├── LoginView.js (Gère l'interface de connexion)
│   │   ├── DashboardView.js (Gère l'interface du tableau de bord)
│   │   └── RegistrationView.js (Gère l'interface d'inscription)
│   │
│   ├── controllers/ (Logique Métier)
│   │   ├── LoginController.js (Traite les actions de connexion)
│   │   │   └── interagit avec -> UserDataCenter.js
│   │   │
│   │   ├── DashboardController.js (Gère les actions du tableau de bord)
│   │   │   └── interagit avec -> UserDataCenter.js
│   │   │
│   │   └── RegistrationController.js (Gère les actions d'inscription)
│   │       └── crée des instances -> User.js
│   │       └── interagit avec -> UserDataCenter.js
│   │
│   ├── navbar/
│   │   └── navbar.js (Gère l'UI et les interactions de la barre de navigation)
│   │
│   ├── services/
│   │   └── fetch_countries.js (Récupère les données des pays pour RegistrationView)
│   │
│   ├── utils/
│   │   └── Validator.js (Fournit la logique de validation pour RegistrationView)
│   │
│   └── app.js (Initialisation Principale de l'Application)
│       └── initialise -> LoginView.js
│       └── initialise -> DashboardView.js
│       └── initialise -> RegistrationView.js
│       └── initialise -> navbar.js
```

