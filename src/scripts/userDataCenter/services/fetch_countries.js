// Function to fetch a list of countries from the RestCountries API~
console.log("fetch a list of countries loaded successfully.");

async function fetchCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3/all');
        if (!response.ok) {
            throw new Error('Failed to fetch countries data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Function to populate the country select element with options
async function populateCountrySelect() {
    const countries = await fetchCountries();

    if (countries) {
        const countrySelect = document.getElementById('country');
        
        // Sort countries alphabetically by name
        countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

        countries.forEach((country) => {
            const option = document.createElement('option');
            option.value = country.cca2; // Use the country code as the value
            option.textContent = country.name.common; // Display the country name
            option.style.color = 'black'; 
            countrySelect.appendChild(option);
        });
    }
}

// Event listener for country selection
document.getElementById('country').addEventListener('change', async (event) => {
    // Handle country selection if needed
});

// Populate the country select element when the page loads
populateCountrySelect();
