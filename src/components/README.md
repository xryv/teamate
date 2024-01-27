## Explication de l'utilisation des composants.

Ce dossier correspond aux composants qui seront réutilisés dans les routes de l'application. Par exemple, sur cette page, vous pouvez trouver la barre de navigation originale qui sera constamment importée sur la plupart des pages de l'application. De cette manière, lors de la construction d'une page, ces composants trouvés sur cette page peuvent être simplement copiés et ajustés avec le chemin correct vers un développement plus rapide.

## Composants et comment ils sont construits et devraient être utilisés.

### nav.html

Ceci est la barre de navigation standard, elle contient tous les éléments. Ce fichier, lorsqu'il est copié, devrait être mis à jour en fonction du chemin.

Cette barre de navigation a été principalement construite par les membres du groupe, mais j'ai élaboré les éléments auxquels je réponds. Par exemple, une icône supplémentaire pour un tableau de bord qui se connectera dans le même style que l'existant, ainsi que les icônes pour la connexion, l'inscription, et enfin pour la déconnexion. Ces icônes visent à s'adapter à la barre de navigation existante que l'équipe a construite.

De plus, cette barre de navigation était destinée à être stylisée uniquement avec TailwindCSS. De cette manière, la barre de navigation/l'en-tête se concentre uniquement sur TailwindCSS, car ses capacités sont vastes et elle peut être plus propre, plus rapide et intuitive pour l'objectif d'une telle barre de navigation.

Je souhaite simplement exprimer tous les icônes qui existent dans la barre de navigation. Par exemple, il y a des boutons de connexion (login), de déconnexion (logout), un tableau de bord pour les amis, des éléments d'administration. Il y a des éléments qui apparaissent uniquement lorsque l'utilisateur n'est pas connecté, d'autres qui ne s'affichent que lorsque l'utilisateur est connecté, et d'autres qui sont seulement visibles par les administrateurs.

**Visibilité des Icônes de la Barre de Navigation :**

1. **Icônes Visibles à 100% :**
   - Icône Accueil (Accueil ICON)
   - Icône Recherche (Recherche ICON)
   - Icône Événement (Event ICON)
   - Icône Navigation (Browse ICON)

2. **Icônes Spécifiques à l'Administrateur :**
   - Icône Tableau de Bord (Dashboard ICON) --> Visible uniquement pour les administrateurs

3. **Icônes Conditionnées par le Statut de Connexion de l'Utilisateur :**
   - Icône Connexion (Login Icon) --> Visible lorsque l'utilisateur n'est pas connecté
   - Icône Inscription (Register Icon) --> Visible lorsque l'utilisateur n'est pas connecté
   - Icône Déconnexion (Logout Icon) --> Visible lorsque l'utilisateur est connecté

4. **Icônes Visibles Uniquement Lorsque l'Utilisateur est Connecté :**
   - Liste des Amis (Friends List Icon)
   - Notifications (Notifications Icon)
   - Classement (Rank Icon)
   - Les Trois Points (Three Dots Icon) - Menu supplémentaire


### Composants pour le MAIN HTML avec SCSS classes.
[Guide SCSS ](https://github.com/xryv/teamate/blob/BRUNO/src/styles/README.MD).

#### card.html
- **Carte pour afficher informations de la manière TEAMATE.**
- **Personnalisable** pour différents contenus, facile à comprendre.
- **Cohérence de style** avec l'application.

```html
    <div class="card">
        <div class="card-header">Titre de la Carte</div>
        <div class="card-content">Contenu de la carte...</div>
    </div>
```

#### form.html
- Éléments de formulaire pour la collecte d'informations.
- Champs clairement étiquetés, intuitifs et esthétiques d'accord avec TEAMATE.
- Adaptés pour inscription, connexion et saisie de données.

```html
   <form>
         <div class="form-group">
            <label for="name" class="form-label">Nom :</label>
            <input type="text" id="name" class="form-input">
         </div>
         <div class="form-group">
            <label for="email" class="form-label">Email :</label>
            <input type="email" id="email" class="form-input">
         </div>
         <button type="submit" class="btn btn-primary">Envoyer</button>
   </form>
```

#### sidebar.html
- Barre latérale pour navigation rapide dans l'application.
- Contient liens vers sections principales.
- Usage dans le dashboard.

```html
   <aside class="sidebar">
      <nav>
            <ul>
               <li><a href="#" class="nav-link">Accueil</a></li>
               <li><a href="#" class="nav-link">Profil</a></li>
               <li><a href="#" class="nav-link">Messages</a></li>
               <li><a href="#" class="nav-link">Paramètres</a></li>
            </ul>
      </nav>
   </aside>
```

#### table.html
- Design pour tables de données claires et organisées.
- Présente données structurées (jouers, datas, etc.).
- Lisibilité et adaptation aux différents écrans assurées.

```html
   <div class="players-table">
         <div class="table-header">En-tête de Table</div>
         <div class="player-row">Ligne de Joueur</div>
   </div>
```

Chaque composant est conçu pour être réutilisé et facilement intégré dans diverses parties de l'application, assurant une expérience utilisateur & developpeur est cohérente et efficace. Ces composants sont utilisés en respectant les guidelines établies pour maintenir une uniformité dans l'interface de l'application.