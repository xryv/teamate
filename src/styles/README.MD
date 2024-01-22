# Guide de Style du Projet - SCSS

## Aperçu
Ce guide offre un aperçu de la structure SCSS et HTML utilisée dans la partie gestion utilisateur du projet. Le approche de style utilise des composants SCSS réutilisables, assurant un look moderne et cohérent.

## Structure SCSS
Nos fichiers SCSS sont organisés en plusieurs répertoires clés :

- `abstracts/` : Contient des éléments fondamentaux comme les variables et les mixins.
- `base/` : Comprend les styles de base, y compris les réinitialisations et la typographie.
- `components/` : Contient les styles de composants réutilisables tels que les boutons et les cartes.
- `pages/` : Contient des styles spécifiques à chaque page.
- `utilities/` : Inclut des classes utilitaires pour l'espacement, le texte, et autres aides.

### Éléments SCSS Clés
- **Variables (`_variables.scss`)** : Définit la palette de couleurs, les paramètres de police, et autres constantes.
- **Boutons (`_buttons.scss`)** : Styles pour les boutons primaires et secondaires.
- **Cartes (`_cards.scss`)** : Conception standard de carte utilisée sur le site Web.
- **Fichiers spécifiques aux pages (`_nompage.scss`)** : Styles personnalisés pour les pages individuelles.

## Structure HTML
Nos fichiers HTML sont structurés pour maximiser l'utilisation des styles SCSS. Chaque section d'une page est typiquement enveloppée dans une balise `<main>`, en utilisant des ID et des classes spécifiques correspondant à nos styles SCSS.

### Classes Communes
- `.card` : Applique le style de carte à une section.
- `.card-header` : Styles pour l'en-tête d'une carte.
- `.card-content` : Utilisé pour la zone de contenu dans une carte.
- `.btn` et `.btn-primary` : Styles pour les boutons.
- `.form-group`, `.form-label`, `.form-input` : Utilisés pour le style des formulaires.

## Exemple d'Utilisation
Voici un exemple de la combinaison SCSS et HTML :

```html
<!-- Exemple d'une page de connexion -->
<main class="main-content">           
    <section id="login" class="card">
        <header class="card-header">
            <h1>Connexion</h1>
        </header>
        <form class="card-content">
            <!-- Champs de formulaire ici -->
            <button type="submit" class="btn btn-primary">Connexion</button>
        </form>
    </section>
</main>
```

Dans cet exemple :
- La classe `main-content` est utilisée pour le style de la section principale.
- Les classes `card`, `card-header`, et `card-content` sont utilisées pour appliquer le style standard de carte.
- Les classes `btn` et `btn-primary` sont utilisées pour le bouton.

## Personnalisation des Styles
Pour personnaliser les styles d'une page spécifique :
1. Créez un nouveau fichier SCSS dans le répertoire `pages/`.
2. Utilisez des classes et des variables existantes, et ajoutez des styles personnalisés si nécessaire.
3. Importez ce fichier dans le fichier SCSS principal.

et... ``` npm run watch:scss```

---

