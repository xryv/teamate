# Services

Le répertoire des Services contient des fonctionnalités spécifiques qui fournissent des opérations réutilisables à travers l'application, telles que la communication avec des API externes, la manipulation de données ou des services d'authentification.

## `fetch_countries.js`

**Description**: Gère la récupération de la liste des pays via l'API RestCountries et remplit un élément `<select>` HTML avec ces pays.

| Fonction                        | Description                                                                                   |
|---------------------------------|-----------------------------------------------------------------------------------------------|
| `fetchCountries()`              | Récupère la liste des pays de l'API RestCountries.                                            |
| `populateCountrySelect()`       | Remplit un élément `<select>` avec les noms des pays récupérés.                               |

**Interactions**:
- Interagit avec l'API RestCountries pour obtenir les pays.
- Modifie le DOM pour afficher la liste des pays dans un `<select>`.


# Navigation Rapide

| Section          | Lien                                                   |
|------------------|--------------------------------------------------------|
| **Accueil**      | [Accueil](../js.md)                                      |
| **Contrôleurs**  | [Contrôleurs](../controllers/controllers.md)           |
| **Modèles**      | [Modèles](../models/models.md)                         |
| **Pages**        | [Pages](../pages/pages.md)                             |
| **Services**     | [Services](../services/services.md)                    |
| **Utilitaires**  | [Utilitaires](../utils/utils.md)                       |
| **Vues**         | [Vues](../views/views.md)                              |

