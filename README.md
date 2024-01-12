# Teamate

Teamate est une application moderne, conçue pour être un point de départ robuste pour des projets de développement web. Ce boilerplate intègre les meilleures pratiques et les dernières technologies pour garantir une expérience de développement fluide.

## Démarrage

Ces instructions vous aideront à lancer une copie du projet sur votre machine locale à des fins de développement et de test.

### Prérequis

- Node.js et npm (Télécharger depuis [Node.js](https://nodejs.org/))
- Un éditeur de code comme Visual Studio Code (Télécharger depuis [Visual Studio Code](https://code.visualstudio.com/))
- Git (Télécharger depuis [Git SCM](https://git-scm.com/))

### Installation

Clonez le dépôt :

```bash
git clone https://github.com/xryv/teamate.git
cd teamate
```

Installez les dépendances :

```bash
npm install
```

Lancez l'application :

```bash
npm start
```

## Flux de Travail de Développement

- **Développement** : Exécutez `npm start` pour démarrer le serveur de développement.
- **Linting** : Exécutez `npm run lint` pour identifier et corriger les erreurs de linting.
- **Formatage** : Exécutez `npm run format` pour formater votre base de code.

## Structure du Projet

- `src/components`: Contient des composants UI comme Header, Footer et composants partagés.
- `src/pages`: Contient les différentes pages de l'application telles que Accueil, Profil, etc.
- `src/assets`: Stocke les assets statiques comme les images, icônes et styles.
- `src/routes`: Gère la configuration du routage pour l'application.
- `src/services`: Contient la logique de service, y compris les appels API et la gestion des données.
- `src/hooks`: Hooks React personnalisés pour diverses fonctionnalités.
- `src/store`: Configuration du store Redux (si Redux est utilisé).

## Construit Avec

- **HTML**
- **SCSS**
- **Tailwind CSS**
- **JavaScript**

## Contribution

Les contributions rendent la communauté open-source un endroit incroyable pour apprendre, s'inspirer et créer. Toute contribution que vous faites est grandement appréciée.

---

## Guide de Contribution

Pour contribuer au projet Teamate, suivez ces étapes simples et claires :

### 1. **Forkez le Projet**
   - Rendez-vous sur la page du projet : `https://github.com/xryv/teamate`
   - Cliquez sur le bouton **Fork** en haut à droite pour créer une copie du projet sur votre compte GitHub.

### 2. **Créez votre Branche de Fonctionnalité**
   - Ouvrez votre terminal.
   - Naviguez vers le répertoire de votre projet cloné :
     ```bash
     cd teamate
     ```
   - Créez une nouvelle branche pour vos changements :
     ```bash
     git checkout -b feature/NouvelleFonctionnalité
     ```

### 3. **Commitez vos Changements**
   - Faites vos modifications dans le code.
   - Ajoutez les fichiers modifiés à l'index Git :
     ```bash
     git add .
     ```
   - Enregistrez vos changements avec un message descriptif :
     ```bash
     git commit -m 'Ajout de NouvelleFonctionnalité'
     ```

### 4. **Poussez sur la Branche**
   - Envoyez vos changements à votre dépôt GitHub :
     ```bash
     git push origin feature/NouvelleFonctionnalité
     ```

### 5. **Ouvrez une Pull Request**
   - Allez sur votre fork du projet sur GitHub.
   - Cliquez sur **Pull Request** en haut de la page.
   - Assurez-vous de sélectionner `xryv/teamate` comme dépôt de base et votre branche `feature/NouvelleFonctionnalité` pour la comparaison.
   - Remplissez le formulaire de Pull Request avec les détails de vos changements.
   - Cliquez sur **Create Pull Request** pour soumettre vos modifications pour révision.

---


## Versioning

Nous utilisons SemVer pour le versioning. Pour les versions disponibles, consultez les tags sur ce dépôt.

## Auteurs et Contributions

**Bruno** - *Authentification et Sécurité des Utilisateurs*
- Responsable du développement des fonctionnalités d'authentification, y compris la connexion/déconnexion, l'enregistrement, la récupération de mot de passe, et l'implémentation de mesures de sécurité pour les comptes utilisateurs.
- Intégration de protocoles d'authentification robustes et de services d'authentification tiers.

**Alex** - *Gestion et Personnalisation de Profil*
- Conception de la fonctionnalité permettant aux utilisateurs de créer et de personnaliser leurs profils, d'ajouter des informations personnelles, des préférences de jeux, et d'intégrer des comptes de jeux externes.
- Création d'une interface utilisateur pour l'édition de profil et mise en place de la logique backend nécessaire.

**Yusuf** - *Interaction Sociale et Fonctionnalités de Réseautage*
- Développement des fonctionnalités sociales permettant aux utilisateurs de se connecter, d'interagir, de suivre, d'envoyer des messages et de créer des groupes ou des communautés de jeux.

**Vero** - *Moteur de Recherche et de Recommandation*
- Mise en place d'un système de recherche et de recommandation permettant aux utilisateurs de trouver d'autres joueurs et de suggérer des amis ou des jeux basés sur les préférences et activités des utilisateurs.


## Licence

Ce projet est sous licence MIT - voir le fichier LICENSE.md pour plus de détails.

## Remerciements

- Chapeau à tous ceux dont le code a été utilisé
- Inspiration
- etc


### Création de l'Application

Pour commencer, créez le squelette de votre application en utilisant les technologies choisies :

```bash
mkdir teamate && cd teamate
```

*Note : Nous créons le dossier manuellement, car ce n'est pas une application React, donc `create-your-app` n'est pas nécessaire.*

### Configuration du Contrôle de Version

Initialisez Git pour gérer les versions de votre projet :

```bash
git init
```

### Installation des Packages Essentiels

Installez Tailwind CSS et ses dépendances pour un design responsive et personnalisable :

```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Mise en Place du Linting et du Formatage

Configurez ESLint pour maintenir la qualité du code :

```bash
npx eslint --init
```

Puis, configurez Prettier pour uniformiser le formatage :

```bash
echo "{\n  \"semi\": false,\n  \"singleQuote\": true\n}" > .prettierrc
```

### Configuration des Scripts dans package.json

Ajoutez des scripts pour faciliter le linting et le formatage :

```json
"scripts": {
  "start": "serve .",
  "lint": "eslint '*/**/*.js'",
  "format": "prettier --write '**/*.{html,scss,js}'"
}
```

*Note : Le script `start` sert à lancer un serveur local pour tester l'application.*

### Organisation du Projet pour l'Évolutivité

- Créez une structure de dossiers cohérente et intuitive :

  ```bash
  mkdir src && cd src
  mkdir assets components layouts pages styles utils
  cd ..
  ```

- Dans `src/assets`, stockez les images, icônes et autres ressources statiques.
- Les composants réutilisables se placent dans `src/components`.
- Pour les feuilles de style SCSS globales et de configuration Tailwind, utilisez `src/styles`.
- `src/pages` contiendra le HTML pour chaque page de votre application.
- `src/utils` est dédié aux fonctions JavaScript utilitaires.

### Documentation et Repository

- Créez un dossier `docs` pour votre documentation :

  ```bash
  mkdir docs
  ```

- Documentez chaque aspect de l'application, y compris les décisions de conception, les configurations et l'utilisation des composants.

### Engagement pour les Bonnes Pratiques de Développement

- Adoptez une approche **Mobile First** lors de la conception de l'interface utilisateur.
- Suivez les principes de **code propre** : clarté, utilisation de composants réutilisables et évitement de la duplication.
- Utilisez **Git Flow** pour la gestion des branches : développement de fonctionnalités, corrections et déploiements.
- Assurez-vous que le code est bien commenté et que chaque fonction, composant et classe dispose d'une documentation appropriée.


**Organisez la Structure du Projet** :

- Créez des répertoires : components, hooks, utils, routes.
- Initialisez un dépôt Git et faites le premier commit :

  ```bash


  git add .
  git commit -m "Initialisation de Teamate"
  ```

- Poussez sur GitHub :

  ```bash
  git remote add origin https://github.com/xryv/teamate.git
  git push -u origin master
  ```

---

Ce README est conçu pour guider les développeurs, en particulier les juniors, à travers toutes les étapes du développement du projet Teamate. Suivre ces instructions aidera à maintenir la cohérence et la qualité tout au long du développement.