# Teamate: La Plateforme Sociale pour Gamers

Bienvenue dans l'univers de Teamate, où la passion du jeu crée des liens. Découvrez, connectez-vous et partagez votre univers gaming!

## Table des Matières
1. [Introduction](#introduction)
2. [Documentation](#documentation)
3. [Architecture du Projet](#architecture-du-projet)
4. [Utilisation](#utilisation)
5. [Styles et Design](#styles-et-design)
6. [Scripts et Fonctionnalités](#scripts-et-fonctionnalités)
7. [Contribuer](#contribuer)
8. [Licence et Droits](#licence-et-droits)

### Introduction
Découvrez Teamate, un réseau dédié aux amateurs de jeux vidéo. [README Principal](./README.md).

### Documentation
- [Phase Initiale](./docs/phase-1.md)
- [Feuille de Route](./docs/ROADMAP.md)

### Architecture du Projet
- [Composants Web](./src/components/README.md)
- [Pages Utilisateur](./src/pages/README.md)
- [Gestion des Styles](./src/styles/README.MD)

### Utilisation
- [Dashboard](./src/pages/dashboard/README.md)
- [Fonctionnalités Clés](./src/pages/README.md)

### Styles et Design
- [SCSS et Thèmes](./src/styles/README.MD)
- [Responsive Design](./src/styles/README.MD)

### Scripts et Fonctionnalités
- [Interactivité](./src/scripts/README.md)

### Contribuer
- [Guide de Contribution](#)

### Licence et Droits
- [Termes et Conditions](#)

## Démarrage
Ces instructions vous guideront pour lancer une copie du projet sur votre machine locale à des fins de développement et de test.

### Prérequis
- Node.js et npm ([Node.js](https://nodejs.org/))
- Un éditeur de code comme Visual Studio Code ([Visual Studio Code](https://code.visualstudio.com/))
- Git ([Git SCM](https://git-scm.com/))

### Installation
Clonez et installez le projet :
```bash
git clone https://github.com/xryv/teamate.git
cd teamate
npm install
npm start
```

## Flux de Travail de Développement
- **Développement** : `npm start` pour le serveur de développement.

## Structure du Projet
La structure détaillée du projet est conçue pour une clarté maximale et une maintenabilité accrue.

```
teamate/
├── docs/
│   └── assets/
├── public/
│   └── build/
└── src/
    ├── assets/
    │   ├── icons/
    │   ├── messagerie/
    │   └── navbar/
    ├── components/
    ├── pages/
    │   ├── complete_registration/
    │   ├── dashboard/
    │   │   ├── admins/
    │   │   ├── banned_accs/
    │   │   ├── invitations/
    │   │   ├── players/
    │   │   └── roles/
    │   ├── forgot_password/
    │   ├── login/
    │   ├── register/
    │   ├── verified/
    │   └── verify_email/
    ├── scripts/
    └── styles/
        ├── abstracts/
        ├── base/
        ├── components/
        ├── layout/
        ├── pages/
        └── utilities/
```

### Explication de la Structure
- **`src/assets/`**: Ressources statiques (images, icônes).
- **`src/components/`**: Morceaux de HTML réutilisables (en-têtes, pieds de page, barres de navigation).
- **`src/pages/`**: Fichiers HTML pour chaque page de l'application.
- **`src/scripts/`**: Scripts JavaScript pour l'interactivité.
- **`src/styles/`**: Fichiers SCSS compilés en CSS.

## Construit Avec
- HTML
- SCSS
- Tailwind CSS
- JavaScript

## Contribution
Instructions claires pour contribuer au projet Teamate.

## Auteurs et Contributions
- **Bruno** - Authentification et Sécurité
- **Alex** - Gestion de Profil
- **Yusuf** - Interactions Sociales
- **Vero** - Moteur de Recherche et Recommandation


