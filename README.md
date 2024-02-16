# Teamate: Plateforme de Gestion d'Utilisateurs et d'Authentification

Bienvenue dans la documentation principale de Teamate. Ici, nous détaillons l'architecture du système d'authentification, la gestion des utilisateurs et les interactions entre les différentes parties de notre application.

## Table des Matières
- [Introduction](#introduction)
- [Documentation](#documentation)
- [Architecture du Projet](#architecture-du-projet)
- [Utilisation et Fonctionnalités](#utilisation-et-fonctionnalités)
- [Components](#styles-et-design)
- [Styles et Design](#styles-et-design)
- [Scripts et Logique](#scripts-et-logique)

### Introduction
Découvrez ma vision de Teamate en parcourant la [Présentation](./docs/Presentation.md) que j'ai soigneusement préparée. C'est la façon la plus directe pour saisir l'ampleur de mon projet.

### Documentation
- [Guide pour Git](./docs/guide_git.md)
- [Phase Maquettage](./docs/maquettage.md)
- [Phase HTML/CSS OLD VERSION](./docs/html_css_oldversion.md)
- [Feuille de Route](./docs/ROADMAP.md)

### Architecture du Projet
L'architecture de Teamate s'articule autour de l'approche MVC, offrant modularité et maintenabilité. Explorez nos documents structurant le projet :

- **Modèles** : Gestion des données et règles métiers.
  - [Modèles](./src/scripts/js/models/models.md)
  - [UserDataCenter](./src/scripts/js/models/userDataCenter.js)
- **Vues** : Interfaces et interactions utilisateur.
  - [Vues](./src/scripts/js/views/views.md)
- **Contrôleurs** : Logique intermédiaire entre modèles et vues.
  - [Contrôleurs](./src/scripts/js/controllers/controllers.md)

### Utilisation et Fonctionnalités
Commencez avec Teamate en suivant les [instructions de démarrage](#démarrage) et plongez dans nos fonctionnalités :

- **Dashboard** : Gestion et visualisation de l'espace utilisateur.
  - [Tableau de bord](./src/pages/dashboard/dashboard.html)
- **Authentification** : Sécurité des sessions utilisateur.
  - [Connexion](./src/pages/login/login.html) - [Documentation](./src/pages/login/login.md)
  - [Inscription](./src/pages/register/register.html) - [Documentation](./src/pages/register/register.md)

### Components
  - [HTML Components Guide](./src/components/README.md)

### Styles et Design
Les styles sont gérés via SCSS et Tailwind CSS pour un design cohérent et réactif.
- [SCSS + TAILWIND Styles](./src/styles/README.MD)

### Scripts et Logique
Les scripts JavaScript assurent l'interactivité et le dynamisme de l'application.
- [MVC Scripts](./src/scripts/js/js.md)
- [Navbar](./src/scripts/navbar.js)


### Prérequis
- Node.js et npm ([Node.js](https://nodejs.org/))
- Un éditeur de code comme Visual Studio Code ([Visual Studio Code](https://code.visualstudio.com/))
- Git ([Git SCM](https://git-scm.com/))

## Démarrage
Pour contribuer à Teamate, vous aurez besoin de Node.js, npm, un éditeur de code et Git. Les étapes d'installation sont simples :

### Installation
Clonez et installez le projet :
```bash
git clone https://github.com/xryv/teamate.git
cd teamate
npm install
npm start
```

Pour le développement, lancez `npm start` pour démarrer le serveur de développement local.

## Structure du Projet
La structure de Teamate est conçue pour être claire et facile à naviguer, promouvant une maintenabilité à long terme :

- **`src/assets/`** : Ressources statiques.
- **`src/components/`** : Composants HTML réutilisables.
- **`src/pages/`** : Pages individuelles de l'application.
- **`src/scripts/`** : Logique JavaScript pour l'interactivité.
- **`src/styles/`** : Styles SCSS organisés et maintenables.

## Construit Avec
- HTML, pour la structure de base.
- SCSS, pour les styles dynamiques et modulaires.
- Tailwind CSS, pour le design utilitaire rapide.
- JavaScript, pour l'interactivité et le dynamisme.

## Auteurs 
- **Bruno** - Implémentation de l'authentification et gestion des utilisateurs.
- **Alex** - Développement du profil utilisateur.
- **Yusuf** - Création des interactions sociales.
- **Vero** - Conception du moteur de recherche et des recommandations.



