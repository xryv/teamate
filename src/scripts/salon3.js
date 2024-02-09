function updateSalonName(element) {
    const newName = element.innerText;
 
    console.log("Nouveau nom du salon :", newName);
}

// Fonction pour afficher une alerte
function showAlert() {
    const newName = document.querySelector('.editable').innerText;
    alert("Nom du salon modifié : " + newName);
}