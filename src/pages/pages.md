# Documentation des Pages HTML

Ce document vise à fournir une vue d'ensemble des différentes pages HTML de l'application Teamate et de faciliter la navigation dans le référentiel de code.

## Table des Contenus HTML

Voici un récapitulatif des pages principales et de leurs sous-pages avec des liens pour une navigation rapide.

### Contrat G-5
- [Inscription](register/register.html) - [Documentation](register/register.md)
- [Connexion](login/login.html) - [Documentation](login/login.md)
- [Joueurs](dashboard/players/dashboard_players.html) - [Documentation](dashboard/players/dashboard_players.md)

### Autres Pages Fonctionnelles

- [Mot de Passe Oublié](forgot_password/reinitialisation_mp.html) - En cours de développement
- [Email Vérifié](verified/verified.html) - En cours de développement
- [Vérification d'Email](verify_email/verify_email.html) - En cours de développement

### Page de Tableau de Bord
- [Tableau de Bord Principal](dashboard/dashboard.html) - En cours de développement
- [Admins](dashboard/admins/dashboard_admins.html) - En cours de développement
- [Comptes Bannis](dashboard/banned_accs/dashboard_banned.html) - En cours de développement
- [Invitations](dashboard/invitations/dashboard_invitations.html) - En cours de développement
- [Rôles](dashboard/roles/dashboard_roles.html) - En cours de développement


Chaque page est conçue pour offrir une expérience utilisateur spécifique et est structurée pour travailler en tandem avec les scripts JavaScript et les styles SCSS correspondants pour assurer fonctionnalité et cohérence visuelle.

## Navigation et Interaction

Le référentiel est structuré pour permettre une interaction fluide entre les fichiers HTML, les scripts JavaScript, et les styles SCSS. Voici comment la navigation et l'interaction sont structurées :

- Les **pages HTML** servent de squelette pour l'affichage du contenu et la collecte d'entrées utilisateur.
- Les **scripts JavaScript** ([js.md](../scripts/js/js.md)) dynamisent les pages, gérant les événements et modifiant le DOM en fonction des actions de l'utilisateur.
- Les **styles SCSS** ([README SCSS](../styles/README.md)) définissent l'apparence visuelle et la disposition des éléments HTML.

Les fichiers markdown spécifiques à chaque page, comme `dashboard_players.md`, `login.md`, et `register.md`, fournissent des détails supplémentaires sur la structure, la fonctionnalité et les styles de ces pages.

## Conclusion

Cette documentation est conçue pour être un point d'entrée pour les développeurs d'equipe, les aidant à comprendre la structure et le fonctionnement de l'application Teamate. Les liens fournis permettent une navigation rapide et efficace à travers les diverses composantes de l'application, favorisant ainsi une meilleure compréhension et un développement plus efficace.