# Documentation de la Page des Joueurs

Cette documentation détaille la page `dashboard_players.html` et son intégration avec les scripts JavaScript et les styles SCSS.

## Structure HTML et Correspondance

| Élément HTML                       | Classe/ID               | Fonction JavaScript                       | Description                                            | SCSS                           |
|------------------------------------|-------------------------|-------------------------------------------|--------------------------------------------------------|--------------------------------|
| `<div class="main-content">`       | `main-content`          | N/A                                       | Conteneur principal pour la page des joueurs           | `layout/_main-content.scss`    |
| `<aside class="sidebar">`          | `sidebar`               | N/A                                       | Barre latérale pour la navigation                      | `components/_sidebar.scss`     |
| `<nav class="sidebar-nav">`        | `sidebar-nav`           | N/A                                       | Navigation dans la barre latérale                      | `components/_navigation.scss`  |
| `<section class="content">`        | `content`               | `DashboardController.initPlayersView()`  | Section du contenu principal                           | `layout/_content.scss`         |
| `<div class="card">`               | `card`                  | N/A                                       | Carte contenant le tableau des joueurs                 | `components/_cards.scss`       |
| `<header class="card-header">`     | `card-header`           | N/A                                       | En-tête de la carte                                    | `components/_cards.scss`       |
| `<div class="players-table">`      | `players-table`         | `DashboardController.populatePlayers()`  | Tableau pour l'affichage des joueurs                   | `components/_tables.scss`      |
| `<div class="table-header">`       | `table-header`          | N/A                                       | En-tête du tableau avec les titres des colonnes        | `components/_tables.scss`      |
| `<div class="player-row">`         | `player-row`            | `DashboardController.modifyPlayer()`     | Ligne du tableau pour chaque joueur                    | `components/_tables.scss`      |
| `<span class="status-active">`     | `status-active`         | N/A                                       | Indicateur de statut pour le joueur                    | `utilities/_status.scss`       |
| `<button class="btn btn-modify">`  | `btn-modify`            | `DashboardController.modifyPlayer()`     | Bouton pour modifier les informations d'un joueur     | `components/_buttons.scss`     |
| `<button class="btn btn-delete">`  | `btn-delete`            | `DashboardController.deletePlayer()`     | Bouton pour supprimer un joueur                        | `components/_buttons.scss`     |

## Fonctionnalités JavaScript

Le script `dashboard.js` initialise la vue du tableau de bord, gère l'affichage dynamique des joueurs, et lie les actions de modification et de suppression aux boutons correspondants.

## JavaScripts liés

- **UserDataCenter** : Gère les données des utilisateurs.
    - **Fichier** : [userDataCenter.js](../scripts/js/models/userDataCenter.js)
    - **Documentation** : [Documentation des Modèles](../scripts/js/models/models.md#userdatacenter)

- **DashboardController** : Contrôle l'interaction entre les données des utilisateurs et la vue du tableau de bord.
    - **Fichier** : [dashboardController.js](../scripts/js/controllers/dashboardController.js)
    - **Documentation** : [Documentation des Contrôleurs](../scripts/js/controllers/controllers.md#dashboardcontroller)

- **DashboardView** : Affiche l'interface utilisateur du tableau de bord, y compris la liste des utilisateurs.
    - **Fichier** : [dashboardView.js](../scripts/js/views/dashboardView.js)
    - **Documentation** : [Documentation des Vues](../scripts/js/views/views.md#dashboardview)

- **User** : Définit la structure de données pour les utilisateurs.
    - **Fichier** : [user.js](../scripts/js/models/user.js)
    - **Documentation** : [Documentation des Modèles](../scripts/js/models/models.md#user)


## Styles SCSS

Les styles pour la page des joueurs sont principalement définis dans les fichiers SCSS suivants :

- **`_sidebar.scss`** : Styles pour la barre latérale de navigation.
- **`_tables.scss`** : Styles pour les tableaux affichant les données des joueurs.
- **`_buttons.scss`** : Styles pour les boutons d'action.

## +Navigation

Des hyperliens sont intégrés pour une navigation fluide vers d'autres sections ou pages :

- Retour au [tableau de bord principal](../dashboard.html).
- Accès aux pages de gestion des [administrateurs](../admins/dashboard_admins.html), des [comptes bannis](../banned_accs/dashboard_banned.html), des [invitations](../invitations/dashboard_invitations.html), et de la [gestion des rôles](../roles/dashboard_roles.html).
