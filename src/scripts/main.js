document.addEventListener('DOMContentLoaded', () => {
    const btnAvatar = document.querySelector("#photo-upload");
    const avatarImg = document.querySelector('#photoDeProfil');
    const btnName = document.querySelector('#btn_name');
    const inputName = document.querySelector('#inputName');
    const name = document.querySelector('#name');
    const btnColor = document.querySelector('#btn_color');
    const colorPicker = document.querySelector('#colorPicker');
    const profilMiniatureTop = document.querySelector('#miniature1');
    const profilMiniatureMid = document.querySelector('#miniature2');
    const profilMiniatureBottom = document.querySelector('#miniature3');

    let currentName = "Emma";

    btnColor.addEventListener('click', (e) => {
        if (colorPicker.style.display === "block") {
            colorPicker.style.display = "none";
        } else {
            colorPicker.style.display = "block";
        }
        e.preventDefault();
    });

    btnName.addEventListener('click', (e) => {
        inputName.style.display = 'block';
        name.style.display = 'none';
        btnName.style.display = 'none';
        inputName.focus();
    });

    inputName.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const isValidInput = /^[A-Za-z0-9]{3,}$/.test(inputName.value);

            if (isValidInput) {
                inputName.style.display = 'none';
                name.style.display = 'block';
                btnName.style.display = 'block';
                name.textContent = inputName.value;
                updateTexts(currentName, inputName.value);
                currentName = inputName.value;
            } else {
                alert("Veuillez entrer minimum 3 caractères, sans caractères spéciaux.");
            }
        }
    });

    function updateTexts(oldText, newText) {
        document.querySelectorAll('p').forEach(function(p) {
            if (p.textContent.includes(oldText)) {
                p.textContent = p.textContent.replace(oldText, newText);
            }
        });
    }



    btnAvatar.addEventListener('change', (e) => {
        const file = e.target.files[0];

        if (file) {
            const allowedTypes = ["image/jpeg", "image/png", "image/svg+xml", "image/gif", "image/webp"];

            if (allowedTypes.includes(file.type)) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    avatarImg.src = e.target.result;
                    profilMiniatureTop.src = e.target.result;
                    profilMiniatureMid.src = e.target.result;
                    profilMiniatureBottom.src = e.target.result;
                };

                reader.readAsDataURL(file);
            } else {
                alert("Type de fichier non pris en charge. Veuillez sélectionner une image au format JPEG, PNG, SVG ou GIF.");
                btnAvatar.value = ""; 
            }
        }
    });

    const colorPicker1 = new iro.ColorPicker("#colorPicker1", {
        width: 50,
        padding: 0,
        handleRadius: 5
    });
    const colorPicker2 = new iro.ColorPicker("#colorPicker2", {
        width: 50,
        padding: 0,
        handleRadius: 5
    });
    const colorPicker3 = new iro.ColorPicker("#colorPicker3", {
        width: 50,
        padding: 0,
        handleRadius: 5
    });
    const colorPicker4 = new iro.ColorPicker("#colorPicker4", {
        width: 50,
        padding: 0,
        handleRadius: 5
    });
    const colorPicker5 = new iro.ColorPicker("#colorPicker5", {
        width: 50,
        padding: 0,
        handleRadius: 5
    });

    colorPicker1.on('color:change', (color) => {
        document.documentElement.style.setProperty('--profil-block', color.hexString);
    });

    colorPicker2.on('color:change', (color) => {
        document.documentElement.style.setProperty('--profil-top', color.hexString);
    });

    colorPicker3.on('color:change', (color) => {
        document.documentElement.style.setProperty('--profil-text', color.hexString);
    });

    colorPicker4.on('color:change', (color) => {
        document.documentElement.style.setProperty('--profil-shadow', color.hexString);
    });

    colorPicker5.on('color:change', (color) => {
        document.documentElement.style.setProperty('--profil-border', color.hexString);
    });

});