# Teamate

Plateforme en ligne axée sur la mise en relation et l'interaction sociale entre joueurs, 
a2ec Pes objectifs clés centrés sur la gratuité pour les utilisateurs, la promotion Pe 
la bien2eillance et la maximisation Pes abonnés et Pes clics pour attirer Pes 
sponsors et Pe la publicité8 Voici une Pescription générale Pu projet 

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


Le projet Teamate est structuré de manière claire et logique, favorisant une séparation des préoccupations et une maintenabilité accrue. Voici un aperçu détaillé de la structure du répertoire:

```
teamate/
│
├── src/
│   ├── assets/          # Ressources statiques et médias
│   │   ├── icons/       # Icônes SVG, favicon, etc.
│   │   └── images/      # Images et photographies
│   │
│   ├── components/      # Composants UI réutilisables
│   │   ├── footer.html  # Pied de page commun
│   │   ├── header.html  # En-tête du site
│   │   └── nav.html     # Barre de navigation
│   │
│   ├── features/        # Fonctionnalités spécifiques du projet
│   │
│   ├── pages/           # Pages HTML individuelles
│   │   ├── home.html    # Page d'accueil
│   │   └── profile.html # Page de profil utilisateur
│   │
│   ├── scripts/         # Scripts JavaScript pour l'interactivité
│   │   └── main.js      # Point d'entrée du JavaScript
│   │
│   └── styles/          # Styles SCSS et CSS
│       ├── main.scss    # Style principal
│       ├── output.css   # CSS généré par SCSS
│       ├── style.scss   # Fichiers de style supplémentaires
│       ├── tailwind.css # Importations Tailwind
│       │
│       ├── abstracts/   # SCSS utilitaires, mixins et variables
│       │   ├── _mixins.scss
│       │   └── _variables.scss
│       │
│       ├── base/        # Styles de base, comme les réinitialisations
│       │   └── _body.scss
│       │
│       ├── components/  # Styles des composants
│       │   └── responsive.scss
│       │
│       ├── layout/      # Styles de mise en page, header, footer, etc.
│       │   ├── _footer.scss
│       │   ├── _header.scss
│       │   └── _sidebar.scss
│       │
│       ├── pages/       # Styles spécifiques aux pages
│       │   ├── _
│       │   ├── _
│       │   ├── _
│       │   ├── _
│       │   └── _
│       │
│       └── utilities/   # Classes utilitaires et helpers SCSS
```

### Explication de la Structure

- **`src/assets/`**: Ce répertoire contient toutes les ressources statiques comme les images et les icônes, qui seront utilisées sur l'ensemble du site.

- **`src/components/`**: Ici, vous trouverez des morceaux de HTML réutilisables qui forment les blocs de construction de l'interface utilisateur, tels que les en-têtes, pieds de page, et barres de navigation.

- **`src/pages/`**: Chaque fichier HTML représente une page distincte de l'application. Ils utilisent les composants pour construire l'interface complète de chaque page.

- **`src/scripts/`**: Les fichiers JavaScript nécessaires pour rendre le site interactif sont situés ici. Le fichier `main.js` sert de point d'entrée pour le JavaScript utilisé sur le site.

- **`src/styles/`**: Contient les fichiers SCSS qui sont compilés en CSS. Les dossiers internes organisent les styles en groupes logiques, par exemple `abstracts` pour les variables et mixins, `base` pour les styles de base, `components` pour les styles spécifiques aux composants, `layout` pour la mise en page générale, et `pages` pour les styles propres à chaque page.

Chaque répertoire et fichier a été conçu avec l'intention de rendre le développement aussi intuitif et efficace que possible, en suivant les meilleures pratiques de l'industrie.




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

