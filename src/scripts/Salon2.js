// Fonction pour afficher le modal de modification
function afficherModalModifier() {
    // Code pour afficher le modal de modification
}

// Fonction pour supprimer le salon
function supprimerSalon() {
    // Supprimer l'élément parent (la div contenant le salon)
    event.target.closest('.bg-blue-900').remove();
}

// Ajout d'un écouteur d'événement au bouton "Supprimer"
document.querySelectorAll('.bg-red-500').forEach(button => {
    button.addEventListener('click', supprimerSalon);
});

// Fonction pour modifier le nombre de joueurs
function modifierNbJoueurs() {
    // Récupérer la nouvelle valeur depuis l'utilisateur
    let nouveauNbJoueurs = prompt('Entrez le nouveau nombre de joueurs :');
    // Mettre à jour l'affichage avec la nouvelle valeur
    document.getElementById('nb-joueurs').innerText = 'Nb joueurs: ' + nouveauNbJoueurs;
}

// Fonction pour modifier la langue
function modifierLangue() {
    // Récupérer la nouvelle langue depuis l'utilisateur
    let nouvelleLangue = prompt('Entrez la nouvelle langue :');
    // Mettre à jour l'affichage avec la nouvelle langue
    document.getElementById('langue').innerText = 'Langue: ' + nouvelleLangue;
}
