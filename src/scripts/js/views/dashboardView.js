class DashboardView {
    constructor(controller) {
        this.controller = controller; // Stocke une référence au contrôleur pour permettre la communication bidirectionnelle.
        
        // Vérifie la présence de l'élément .players-table dans le DOM.
        this.playersTable = document.querySelector('.players-table');
        if (!this.playersTable) {
            console.error('DashboardView : élément .players-table non trouvé.');
            return; // Interrompt l'exécution si l'élément n'est pas trouvé pour éviter des erreurs.
        }

        this.controller.view = this; // Permet au contrôleur d'accéder aux méthodes publiques de cette vue.
        console.log('DashboardView : Initialisé et affiche les utilisateurs.');
        this.renderUsers(this.controller.getAllUsers()); // Affiche initialement tous les utilisateurs.
    }

    renderUsers(users) {
        console.log('DashboardView : Affichage des utilisateurs.', users);
        // Initialise le contenu de la table des joueurs avec l'en-tête.
        this.playersTable.innerHTML = '<div class="table-header"><span>Nom</span><span>Email</span><span>Rôle</span><span>Statut</span><span>Actions</span></div>';

        // Itère sur chaque utilisateur pour créer et afficher une ligne dans la table.
        users.forEach(user => {
            const userRow = document.createElement('div'); // Crée un nouvel élément pour chaque utilisateur.
            userRow.classList.add('player-row'); // Ajoute une classe pour le style.
            // Remplit le contenu de l'élément avec les données de l'utilisateur.
            userRow.innerHTML = `
                <span>${user.name}</span>
                <span>${user.email}</span>
                <span>${user.role}</span>
                <span class="status-active">${user.status}</span>
                <span class="actions">
                    <button class="btn btn-delete" data-email="${user.email}">Supprimer</button>
                </span>
            `;
            this.playersTable.appendChild(userRow); // Ajoute la ligne de l'utilisateur à la table.

            // Ajoute un écouteur d'événements au bouton de suppression pour gérer la suppression de l'utilisateur.
            userRow.querySelector('.btn-delete').addEventListener('click', (e) => {
                const email = e.target.getAttribute('data-email'); // Récupère l'email de l'utilisateur à supprimer.
                console.log(`DashboardView : Suppression de l'utilisateur avec l'email ${email}.`);
                this.controller.deleteUser(email); // Appelle la méthode de suppression du contrôleur.
            });
        });
    }
}
