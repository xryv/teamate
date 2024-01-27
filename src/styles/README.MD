# Guide de Style du Projet - SCSS

## Table des Matières
1. [Abstracts](#abstracts)
2. [Base](#base)
3. [Composants](#composants)
4. [Mise en page](#mise-en-page)
5. [Pages](#pages)
6. [Utilitaires](#utilitaires)
7. [Fichier principal](#fichier-principal)

## Abstracts
**Chemin : `/abstracts`**
- `_variables.scss` : Définit les palettes de couleurs, la typographie, les espacements, les bordures et les ombres.

## Base
**Chemin : `/base`**
- `_reset.scss` : Réinitialise les styles par défaut du navigateur.
- `_typography.scss` : Établit les règles de typographie.

## Composants
**Chemin : `/components`**
- Contient les styles individuels de composants tels que `_buttons.scss`, `_cards.scss`, `_forms.scss`, etc.

### 1. `_buttons.scss`
- **`.btn`** : Style général pour les boutons.
- **`.btn-primary`** : Style pour les boutons principaux.
- **`.btn-secondary`** : Style pour les boutons secondaires.

### 2. `_cards.scss`
- **`.card`** : Style général des cartes.
- **`.card-header`** : Style pour l'en-tête de la carte.
- **`.card-content`** : Style pour la zone de contenu.

### 3. `_content.scss`
- **`.main-content`** : Style pour la zone de contenu principale.

### 4. `_forms.scss`
- **`.form-input`** : Style pour les champs de saisie.
- **`.form-label`** : Style pour les étiquettes de formulaire.
- **`.form-group`** : Style pour les groupes de formulaires.

### 5. `_modals.scss`
- **`.modal`** : Style de base pour les modaux.
- **`.modal.active`** : Style pour l'état actif du modal.
- **`.modal-content`** : Style pour la zone de contenu du modal.
- **`.modal-footer`** : Style pour le pied du modal.

### 6. `_sidebar.scss`
- **`.sidebar`** : Style général pour la barre latérale.
- **`.nav-link`** : Style pour les liens de navigation.

### 7. `_tables.scss`
- **`.players-table`** : Style pour les tables de joueurs.
- **`.table-header`**, **`.player-row`**, **`.actions`** : Styles spécifiques.

## Mise en page
**Chemin : `/layout`**
- `_dashlayout.scss` : Style de la mise en page du tableau de bord.
- `_grid.scss` : Système de grille flexible.

### 1. `_dashlayout.scss`
- **`.dashboard-layout`** : Style pour la mise en page du tableau de bord.
- **`.sidebar`** dans `.dashboard-layout` : Style spécifique pour la barre latérale.
- **`.players-table`** dans `.dashboard-layout` : Style pour les tables.

### 2. `_grid.scss`
- **`.grid`** : Système de grille.
- **`.grid-item`** : Style pour chaque élément de la grille.
- **`.grid-container`** : Style pour les conteneurs de grille.

## Pages
**Chemin : `/pages`**
- Destiné aux styles spécifiques à chaque page.

## Utilitaires
**Chemin : `/utilities`**
- `_spacing.scss` : Classes utilitaires pour marges et paddings.
- `_text.scss` : Classes utilitaires pour l'alignement et le style du texte.

## Fichier principal
**Chemin : `main.scss`**
- Point d'entrée du SCSS, important tous les fichiers dans l'ordre correct.
