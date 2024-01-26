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


### footer.html

Ceci est un pied de page simple, il contient les principaux liens de navigation, avec un texte clair pour une lecture facile puisque la barre de navigation l'exprime de manière plus dynamique et interactive avec des icônes.

The footer follows the same strategy than the navbar, using only 