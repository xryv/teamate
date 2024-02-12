// Affichage d'un message dans la console pour indiquer que le script de récupération de la liste des pays a été chargé avec succès.
console.log("fetch a list of countries loaded successfully.");

// Fonction asynchrone pour récupérer une liste de pays depuis l'API RestCountries
async function fetchCountries() {
    try {
        // Envoi d'une requête GET à l'API RestCountries pour obtenir tous les pays
        const response = await fetch('https://restcountries.com/v3/all');
        // Vérification si la réponse est réussie
        if (!response.ok) {
            // Lancement d'une exception en cas d'échec de la requête
            throw new Error('Failed to fetch countries data');
        }
        // Conversion de la réponse en JSON
        const data = await response.json();
        // Retour de la liste des pays
        return data;
    } catch (error) {
        // Affichage d'une erreur dans la console en cas de problème lors de la récupération des données
        console.error(error);
        // Retour null en cas d'erreur
        return null;
    }
}

// Fonction asynchrone pour remplir l'élément de sélection de pays avec des options
async function populateCountrySelect() {
    // Appel de fetchCountries pour obtenir la liste des pays
    const countries = await fetchCountries();

    // Vérification si la liste des pays a été récupérée avec succès
    if (countries) {
        // Récupération de l'élément select pour les pays par son ID
        const countrySelect = document.getElementById('country');
        
        // Tri des pays par ordre alphabétique du nom commun
        countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

        // Création d'une option dans le select pour chaque pays
        countries.forEach((country) => {
            const option = document.createElement('option');
            option.value = country.cca2; // Utilisation du code pays comme valeur
            option.textContent = country.name.common; // Affichage du nom commun du pays
            option.style.color = 'black'; // Style pour rendre le texte visible
            countrySelect.appendChild(option);
        });
    }
}

// Ajout d'un écouteur d'événement pour la sélection d'un pays
document.getElementById('country').addEventListener('change', async (event) => {
    // Gestion de la sélection d'un pays si nécessaire
});

// Remplissage de l'élément de sélection de pays avec des options au chargement de la page
populateCountrySelect();
