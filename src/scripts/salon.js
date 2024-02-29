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



   
    ageSlider.addEventListener("input", function () {
        
        ageSliderValue.textContent = ageSlider.value;
 
        const playerSlider = document.getElementById("playerSlider");
        const sliderValue = document.getElementById("sliderValue");

  
        playerSlider.addEventListener("input", function () {
            // Mettre à jour la valeur affichée
            sliderValue.textContent = playerSlider.value;
        });

        // Mettre à jour la valeur affichée initialement
        sliderValue.textContent = playerSlider.value;
    });
});
