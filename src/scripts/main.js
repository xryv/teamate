document.addEventListener('DOMContentLoaded', () => {
    const btnAvatar = document.querySelector("#photo-upload");
    const avatarImg = document.querySelector('#photoDeProfil');

    btnAvatar.addEventListener('change', (e) => {
        const file = e.target.files[0];
    
        if (file) {
            const allowedTypes = ["image/jpeg", "image/png", "image/svg+xml", "image/gif", "image/webp"];
        
            if (allowedTypes.includes(file.type)) {
                const reader = new FileReader();
    
                reader.onload = function (e) {
                    avatarImg.src = e.target.result;
                };
    
                reader.readAsDataURL(file);
            } else {
                alert("Type de fichier non pris en charge. Veuillez sélectionner une image au format JPEG, PNG, SVG ou GIF.");
                // Réinitialisez éventuellement le champ d'entrée de fichier ou effectuez d'autres actions en cas de type de fichier non pris en charge.
                btnAvatar.value = ""; // Efface la sélection du fichier
            }
        }
    });

});


