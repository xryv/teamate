# Guide de Style du Projet - SCSS

**Abstracts (/abstracts)** :
- Contient `_variables.scss` : Définit les palettes de couleurs, la typographie, les espacements, les bordures et les ombres. Ces variables encapsulent le thème visuel du projet TEAMATE et assurent une langue de conception cohérente dans l'application.

**Base (/base)** :
- `_reset.scss` : Réinitialise les styles par défaut du navigateur, assurant une base cohérente sur différents navigateurs. Inclut les ajustements de `box-sizing`, les marges par défaut, les paddings et les héritages de police.
- `_typography.scss` : Établit les règles de typographie, y compris l'importation des polices, les paramètres de base des polices et les styles pour les en-têtes, paragraphes, liens, listes et citations. Cela garantit une apparence uniforme du texte dans l'application.

**Composants (/components)** :
- Contient les styles individuels de composants tels que `_buttons.scss`, `_cards.scss`, `_forms.scss`, etc. Chaque fichier définit les styles pour un composant UI spécifique, comme les boutons, les cartes, les formulaires et les modaux, les rendant réutilisables et faciles à gérer.

    ### 1. `_buttons.scss` :

    - **`.btn`** : 
    - Style général pour les boutons, y compris le padding, le border-radius, le style du curseur, le poids de la police, et la transition pour la couleur de fond.
    - **`.btn-primary`** :
    - Style spécifique pour les boutons principaux avec un fond en dégradé linéaire, couleur du texte, et effet au survol.
    - **`.btn-secondary`** :
    - Style pour les boutons secondaires, incluant la couleur de fond, la couleur du texte, et l'effet au survol.

    ### 2. `_cards.scss` :

    - **`.card`** :
    - Style général des cartes avec un fond en dégradé, couleur du texte, border-radius, box-shadow, padding, et un effet au survol.
    - **`.card-header`** :
    - Style spécifique pour l'en-tête de la carte, y compris la taille de la police et la marge.
    - **`.card-content`** :
    - Style pour la zone de contenu à l'intérieur d'une carte, y compris la taille de la police, le type d'affichage, et l'espace.

    ### 3. `_content.scss` :

    - **`.main-content`** :
    - Style pour la zone de contenu principale, y compris le type d'affichage, l'alignement, la hauteur minimale, le padding, et le fond en dégradé.

    ### 4. `_forms.scss` :

    - **`.form-input`** :
    - Style pour les champs de saisie dans les formulaires, y compris la couleur de fond, le style des bordures, le padding, la largeur, et les effets de focus.
    - **`.form-label`** :
    - Style pour les étiquettes de formulaire, y compris le type d'affichage, la marge, et la couleur du texte.
    - **`.form-group`** :
    - Style pour les groupes de formulaires, principalement la gestion de la marge inférieure pour l'espacement.

    ### 5. `_modals.scss` :

    - **`.modal`** :
    - Style de base pour les composants modaux, y compris la position, la taille, le fond, le padding, le border-radius, le box-shadow, et l'état d'affichage.
    - **`.modal.active`** :
    - Style pour l'état actif du modal.
    - **`.modal-content`** :
    - Style pour la zone de contenu du modal.
    - **`.modal-footer`** :
    - Style pour le pied du modal, principalement l'alignement du texte.

    ### 6. `_sidebar.scss` :

    - **`.sidebar`** :
    - Style général pour la barre latérale, y compris la couleur, le padding, la largeur, et la hauteur minimale.
    - **`.nav-link`** :
    - Style pour les liens de navigation dans la barre latérale, y compris le type d'affichage, le padding, la couleur, la décoration du texte, et l'effet au survol.

    ### 7. `_tables.scss` :

    - **`.players-table`** :
    - Style pour les tables de joueurs, y compris le type d'affichage, les colonnes de la grille, l'espace, et les styles spécifiques pour les en-têtes et les lignes.
    - **`.table-header`**, **`.player-row`**, **`.actions`** :
    - Styles spécifiques pour les en-têtes de table, les lignes, et les boutons d'action dans la table.


**Mise en page (/layout)** :
- Contient des styles spécifiques à la mise en page comme `_dashlayout.scss` et `_grid.scss`. `_dashlayout.scss` est utilisé pour le style de la mise en page du tableau de bord, tandis que `_grid.scss` fournit un système de grille flexible pour l'agencement réactif des éléments.

    **1. `_dashlayout.scss`**:

    - **`.dashboard-layout`**:
    - Style pour la mise en page du tableau de bord. Il définit un affichage flexible, une hauteur minimale, et intègre des styles spécifiques pour les éléments comme la barre latérale.
    - **`.sidebar`** dans `.dashboard-layout` :
        - Style spécifique pour la barre latérale dans le layout du tableau de bord, y compris la largeur, la couleur de fond, le padding, et l'alignement du texte.
    - **`.players-table`** dans `.dashboard-layout` :
        - Style pour les tables dans le dashboard, incluant la couleur de fond, le border-radius, le box-shadow, le padding, et des styles dédiés pour les en-têtes et les lignes de la table.

    **2. `_grid.scss`**:

    - **`.grid`**:
    - Système de grille flexible pour l'agencement des éléments. Définit un affichage en grille avec des colonnes répétitives et un espacement entre les éléments.
    - **`.grid-item`** :
        - Style pour chaque élément dans la grille, incluant la couleur de fond, le padding, et le border-radius.
    - **`.grid-container`** :
        - Style pour les conteneurs de grille, définissant un affichage en grille avec des colonnes ajustables et un espacement.


**Pages (/pages)** :
- Destiné aux styles spécifiques à chaque page. Actuellement vide, mais c'est là que vous ajouteriez un style unique à chaque page.

**Utilitaires (/utilities)** :
- `_spacing.scss` : Fournit des classes utilitaires pour les marges et les paddings, permettant des ajustements rapides de la mise en page sans CSS personnalisé.
- `_text.scss` : Comprend des classes utilitaires pour l'alignement, le poids et le style du texte, offrant un moyen pratique de modifier le texte dans l'application.

**Fichier principal (main.scss)** :
- Le point d'entrée de votre SCSS, important tous les autres fichiers dans l'ordre correct. Il assemble les différents abstracts, styles de base, composants, mises en page et utilitaires en un seul fichier CSS compilé.