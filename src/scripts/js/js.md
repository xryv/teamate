# Introduction JS

Ce document vise à fournir une vue d'ensemble claire et structurée de l'architecture du code et des différentes composantes qui constituent notre application web. En adoptant une approche modulaire et en suivant le modèle MVC (Modèle-Vue-Contrôleur), nous avons organisé notre code de manière à faciliter la maintenance, l'évolutivité et la compréhension du projet.

## Stratégie d'Organisation

Le cœur de notre stratégie d'organisation repose sur la séparation claire des responsabilités au sein de l'application :

- **Modèles** : Contiennent les structures de données ainsi que la logique métier. Ils sont indépendants de l'interface utilisateur et interagissent directement avec la base de données ou le stockage.
- **Vues** : Gèrent l'affichage et les interactions de l'interface utilisateur. Elles reflètent les données et répondent aux actions de l'utilisateur, en déclenchant des événements dans les contrôleurs.
- **Contrôleurs** : Servent de lien entre les modèles et les vues. Ils reçoivent les entrées de l'utilisateur via les vues, les traitent (éventuellement en mettant à jour les modèles) et retournent la sortie à afficher.

## Flowgraph de l'Architecture


```
   Utilisateur
        |
        v
      Vue
        |
   (Événements)
        |
        v
  Contrôleur  ---->  Modèle  ---->  Base de données (ou autres services)
        |              ^
        |              |
        ----------------
       Mise à jour / Réponse
```


## Navigation dans la Documentation

Utilisez la [Table des Matières](#table-des-matières) pour explorer les différentes parties de ce document. Chaque section fournit des liens vers des fichiers spécifiques ou des documents détaillés, offrant une compréhension approfondie de chaque composante du projet.


## Table des Matières

- [Contrôleurs](#contrôleurs)
- [Modèles](#modèles)
- [Pages](#pages)
- [Services](#services)
- [Utilitaires](#utilitaires)
- [Vues](#vues)

---

## Contrôleurs

Les contrôleurs agissent comme médiateurs entre les vues et les modèles, gérant la logique de l'application.

- [Dashboard Controller](./controllers/dashboardController.js) - Gère les interactions sur la page du tableau de bord.
- [Login Controller](./controllers/loginController.js) - Traite la logique de connexion des utilisateurs.
- [Registration Controller](./controllers/registrationController.js) - Facilite le processus d'inscription des utilisateurs.

[Plus de détails sur les contrôleurs...](./controllers/controllers.md)

---

## Modèles

Les modèles représentent la structure des données, contenant la logique métier de l'application.

- [Registration Model](./models/registrationModel.js) - Gère la création de nouveaux comptes utilisateurs.
- [User Model](./models/user.js) - Définit la structure de données d'un utilisateur.
- [User Data Center](./models/userDataCenter.js) - Centralise la gestion des données utilisateur.

[Approfondir les modèles...](./models/models.md)

---

## Pages

Les scripts de pages initialisent les fonctionnalités clés de chaque page web.

- [Dashboard Page](./pages/dashboard.js) - Initialise la page du tableau de bord.
- [Login Page](./pages/login.js) - Configure la page de connexion.
- [Register Page](./pages/register.js) - Prépare la page d'inscription.

[Découvrir plus sur les pages...](./pages/pages.md)

---

## Services

Les services fournissent des fonctionnalités réutilisables à travers l'application, comme l'interaction avec des APIs externes.

- [Fetch Countries](./services/fetch_countries.js) - Récupère et affiche une liste de pays.

[En savoir plus sur les services...](./services/services.md)

---

## Utilitaires

Les utilitaires offrent des fonctions communes et réutilisables, telles que des validations.

- [Validations](./utils/validation.js) - Contient des fonctions pour valider les entrées utilisateur.

[Plus d'informations sur les utilitaires...](./utils/validation.md)

---

## Vues

Les vues gèrent l'affichage et les interactions de l'interface utilisateur.

- [Dashboard View](./views/dashboardView.js) - Affiche le tableau de bord.
- [Login View](./views/loginView.js) - Gère l'interface de connexion.
- [Registration View](./views/registrationView.js) - Traite l'interface du formulaire d'inscription.

[Approfondir les vues...](./views/views.md)

---
