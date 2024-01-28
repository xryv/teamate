# Étape 1 : Configuration de l'Environnement de Développement pour Teamate

Il est essentiel de configurer votre environnement de manière méthodique et efficace. Suivez ces instructions détaillées pour préparer votre espace de travail. Je serai là à chaque étape pour vous guider.

## Commencer avec le Pied Droit

Nous allons commencer par configurer notre projet. Ouvrez PowerShell et suivez-moi :

```powershell
# Naviguez vers le dossier de votre projet. Remplacez avec votre propre chemin si nécessaire.
cd C:\Users\......................

# Vérifiez que vous êtes au bon endroit avec:
pwd
```

## Créons Ensemble la Fondation

Notre projet a besoin d'un fichier `package.json`. Si vous n'en avez pas déjà un, créons-le :

```powershell
# Ceci crée un package.json avec les valeurs par défaut.
npm init -y
```

## Intégrons Tailwind CSS

Tailwind CSS sera notre moteur de style, permettant de créer une interface utilisateur attrayante et réactive.

```powershell
# Installons Tailwind CSS, PostCSS et Autoprefixer.
npm install -D tailwindcss postcss autoprefixer

# Maintenant, initialisons Tailwind CSS, qui créera notre fichier de configuration.
npx tailwindcss init
```

## Structurons Notre Projet

Une structure de projet claire est vitale. Ensemble, établissons une architecture solide :

```powershell
# Créons des dossiers pour nos assets, styles et composants.
mkdir src

# Créez le dossier 'assets' dans 'src'.
mkdir src\assets

# Créez le dossier 'components' dans 'src'.
mkdir src\components

# Créez le dossier 'styles' dans 'src'.
mkdir src\styles

# Une fois que le dossier 'styles' est créé, créez le fichier 'tailwind.css'.
New-Item src\styles\tailwind.css -Type File

```

## Préparons nos Styles

Dans notre `tailwind.css`, importons ce dont nous avons besoin :

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Utilisez votre éditeur de texte préféré pour ajouter ce contenu à `src\styles\tailwind.css`.

## Compilons notre Style

Convertissons notre code Tailwind en CSS utilisable :

```powershell
# Exécutez cette commande pour compiler votre CSS.
npx tailwindcss build src\styles\tailwind.css -o src\styles\output.css
```

## Relions le Tout

Assurez-vous que votre `index.html` est prêt à utiliser vos styles :

```powershell
# Créons notre fichier HTML principal.
New-Item index.html -Type File

# Ouvrez index.html et ajoutez cette ligne dans la section <head>:
<link rel="stylesheet" href="src/styles/output.css">
```

## Engageons notre Travail

Nous avons fait du bon travail. Sauvegardons nos progrès :

```powershell
# Ajoutez tous les fichiers à votre prochain commit.
git add .

# Engageons nos fichiers avec un message descriptif.
git commit -m "Configuration initiale du projet Teamate avec Tailwind CSS"

# Poussez vos modifications sur le dépôt distant.
git push
```

## En Conclusion

Vous avez brillamment configuré l'environnement de développement de Teamate. Votre répertoire est propre, structuré et prêt pour l'évolutivité. Prenez un moment pour apprécier votre travail et préparez-vous pour la prochaine phase de notre aventure de développement.
