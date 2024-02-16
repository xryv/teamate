Voici un aperçu structuré de l'architecture de notre application web, présenté pour guider les développeurs à travers les différents scripts et leur interaction au sein de l'application :

```
App
│
├── ... ()
│
├── js/ (Dossiers contenant les fichiers JavaScript)
│   │
│   ├── controllers/ (Contrôleurs gérant la logique métier)
│   │   ├── dashboardController.js (Gère les interactions du tableau de bord)
│   │   ├── loginController.js (Traite les actions de connexion)
│   │   └── registrationController.js (Gère les actions d'inscription)
│   │
│   ├── models/ (Modèles pour la gestion des données)
│   │   ├── registrationModel.js (Modèle pour l'inscription des utilisateurs)
│   │   ├── user.js (Définit la structure des données utilisateur)
│   │   └── userDataCenter.js (Centralise la gestion des utilisateurs)
│   │
│   ├── pages/ (Scripts spécifiques à chaque page)
│   │   ├── dashboard.js (Initialisation spécifique au tableau de bord)
│   │   ├── login.js (Initialisation spécifique à la page de connexion)
│   │   └── register.js (Initialisation spécifique à la page d'inscription)
│   │
│   ├── services/ (Services pour les opérations externes)
│   │   └── fetch_countries.js (Récupère la liste des pays pour le formulaire d'inscription)
│   │
│   ├── utils/ (Utilitaires généraux)
│   │   └── validation.js (Logique de validation des formulaires)
│   │
│   └── views/ (Vues gérant l'interface utilisateur)
│       ├── dashboardView.js (Gère l'affichage du tableau de bord)
│       ├── loginView.js (Gère l'affichage de la page de connexion)
│       └── registrationView.js (Gère l'affichage du formulaire d'inscription)

```

