# Bienvenue sur le Projet Teamate

Ce document fournit des instructions détaillées pour aider chaque membre de l'équipe à configurer et à travailler avec le dépôt Git de Teamate.

## Cloner le Répertoire

Pour commencer, vous devez cloner le répertoire sur votre machine locale. Ouvrez votre terminal ou invite de commande et suivez ces étapes :

```bash
# Naviguez vers le répertoire où vous souhaitez cloner le projet
cd chemin/vers/le/dossier/cible

# Clonez le dépôt
git clone https://github.com/xryv/teamate.git

# Accédez au dossier du projet
cd teamate
```

## Créer Votre Propre Branche

Chaque membre de l'équipe doit travailler sur sa propre branche. Voici comment procéder :

```bash
# Assurez-vous d'être sur la branche principale
git checkout main

# Mettez à jour votre liste de branches et autres références
git fetch

# Créez et passez à votre propre branche (remplacez 'votre_nom' par votre nom ou pseudo)
git checkout -b votre_nom

# Poussez la nouvelle branche sur le serveur distant
git push -u origin votre_nom
```

## Travailler avec Git

Voici quelques commandes Git couramment utilisées qui vous seront utiles :

- **Vérifier le statut de vos fichiers** :
  ```bash
  git status
  ```
  
- **Ajouter des fichiers modifiés à l'index** :
  ```bash
  git add chemin/vers/le/fichier
  # Ou pour ajouter tous les fichiers modifiés
  git add .
  ```

- **Créer un commit avec vos changements** :
  ```bash
  git commit -m "Votre message de commit"
  ```

- **Récupérer les derniers changements de la branche principale** :
  ```bash
  git pull origin main
  ```

- **Fusionner les changements de la branche principale dans votre branche** :
  ```bash
  git merge main
  ```

- **Pousser vos commits sur votre branche distante** :
  ```bash
  git push
  ```

## Contribution au Projet

Avant de pousser vos changements, assurez-vous de toujours tirer (`pull`) les dernières mises à jour de la branche principale et de résoudre les conflits éventuels. Une fois vos changements prêts et après avoir effectué les tests nécessaires, ouvrez une "Pull Request" pour la révision de votre code.

En suivant ces directives, nous pouvons travailler ensemble de manière efficace et organisée pour faire avancer le projet Teamate. Votre collaboration et votre rigueur sont essentielles pour le succès de ce projet.
