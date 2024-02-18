document.addEventListener("DOMContentLoaded", function () {


    const ageSlider = document.getElementById("ageSlider");

    // Sélectionnez l'élément span où  afficher la valeur
    const ageSliderValue = document.getElementById("ageSliderValue");
    const inputName = document.getElementById("nameCreate")
    const nomSalon = document.getElementById("nomSalon")


    inputName.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            nomSalon.textContent = inputName.value
            inputName.style.display = "none"
            nomSalon.style.display = "block"
        }
    })



    // Écoutez les changements de la barre de défilement
    ageSlider.addEventListener("input", function () {
        // Mettre à jour le contenu de l'élément span avec la valeur de la barre de défilement
        ageSliderValue.textContent = ageSlider.value;
        // Sélection de la slide bar et de l'élément où afficher la valeur
        const playerSlider = document.getElementById("playerSlider");
        const sliderValue = document.getElementById("sliderValue");

        // Événement input pour détecter les changements en temps réel sur la slide bar
        playerSlider.addEventListener("input", function () {
            // Mettre à jour la valeur affichée
            sliderValue.textContent = playerSlider.value;
        });

        // Mettre à jour la valeur affichée initialement
        sliderValue.textContent = playerSlider.value;
    });
});
