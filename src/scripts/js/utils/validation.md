# Services

Le répertoire des Services contient des fonctions de validation pour garantir la conformité des données saisies par les utilisateurs.

## `validations.js`

Ce fichier inclut des fonctions de validation pour différents types de données utilisateur, utilisant des critères spécifiques pour chaque validation.

| Fonction                        | Tests effectués                                                                                   |
|---------------------------------|---------------------------------------------------------------------------------------------------|
| `validateEmail(email)`          | - Format valide (contient un '@' et un domaine).                                                  |
| `validatePassword(password)`    | - Au moins 8 caractères.<br>- Au moins un chiffre.<br>- Au moins une lettre minuscule.<br>- Au moins une lettre majuscule.<br>- Au moins un symbole. |
| `validateUsername(username)`    | - Longueur minimale de 4 caractères.<br>- Contient uniquement des lettres et des chiffres.<br>- N'est pas uniquement numérique. |
| `validateFirstName(name)`       | - Non vide.<br>- Moins de 15 caractères.<br>- Contient uniquement des lettres, des apostrophes et des tirets. |
| `validateLastName(surname)`     | - Non vide.<br>- Moins de 25 caractères.<br>- Contient uniquement des lettres, des apostrophes et des tirets. |
| `validateDateOfBirth(born)`     | - Format AAAA-MM-JJ.<br>- Date logique (pas dans le futur, âge minimum respecté).                  |
| `validateCountry(country)`      | - Non vide.<br>- (Optionnel) Correspond à un pays dans une liste prédéfinie.                      |

### Interactions

- Utilisées pour valider les entrées de formulaire avant soumission.
- Peuvent être intégrées à des écouteurs d'événements pour fournir une validation en temps réel et des retours visuels aux utilisateurs.

Ces fonctions de validation jouent un rôle essentiel dans la prévention des erreurs de saisie et l'amélioration de l'expérience utilisateur en fournissant des feedbacks immédiats sur la validité des données entrées.