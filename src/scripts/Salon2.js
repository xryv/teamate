// Fonction pour afficher le modal de modification
function afficherModalModifier() {
   
}

// Fonction pour supprimer le salon
function supprimerSalon() {
    // Supprimer l'élément parent (la div contenant le salon)
    event.target.closest('.bg-blue-900').remove();     // a voir c'est pas encore ce que je veux j'ai pas trouvé la solution 
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

// j'ai pas fait les tests parce que depuis des mois seul JavaScript est demandé et la en 2h vendredi 16 c'est trop juste j'ai peur d'embrouiller 
// mon code avant de le rendre du coup je le ferais quand j'aurais compris le cours 

// On peu modifier, créer et modifier. par contre pour la création d'un salon il me faudra PHP pour ce que je veux faire donc à la prochaine étape 
