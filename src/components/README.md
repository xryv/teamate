## Explication de l'utilisation des composants.

Ce dossier correspond aux composants qui seront réutilisés dans les routes de l'application. Par exemple, sur cette page, vous pouvez trouver la barre de navigation originale qui sera constamment importée sur la plupart des pages de l'application. De cette manière, lors de la construction d'une page, ces composants trouvés sur cette page peuvent être simplement copiés et ajustés avec le chemin correct vers un développement plus rapide.

## Composants et comment ils sont construits et devraient être utilisés.

### nav.html

Ceci est la barre de navigation standard, elle contient tous les éléments. Ce fichier, lorsqu'il est copié, devrait être mis à jour en fonction du chemin.

Cette barre de navigation a été principalement construite par les membres du groupe, mais j'ai élaboré les éléments auxquels je réponds. Par exemple, une icône supplémentaire pour un tableau de bord qui se connectera dans le même style que l'existant, ainsi que les icônes pour la connexion, l'inscription, et enfin pour la déconnexion. Ces icônes visent à s'adapter à la barre de navigation existante que l'équipe a construite.

De plus, cette barre de navigation était destinée à être stylisée uniquement avec TailwindCSS. De cette manière, la barre de navigation/l'en-tête se concentre uniquement sur TailwindCSS, car ses capacités sont vastes et elle peut être plus propre, plus rapide et intuitive pour l'objectif d'une telle barre de navigation.

### nav_admin.html

Cette barre de navigation a une section supplémentaire, elle contient le tableau de bord. La raison de la construction de ce composant supplémentaire est de clarifier l'importance que plus tard, seuls les administrateurs pourraient avoir accès à cette barre de navigation.

### footer.html

Ceci est un pied de page simple, il contient les principaux liens de navigation, avec un texte clair pour une lecture facile puisque la barre de navigation l'exprime de manière plus dynamique et interactive avec des icônes.

The footer follows the same strategy than the navbar, using only 