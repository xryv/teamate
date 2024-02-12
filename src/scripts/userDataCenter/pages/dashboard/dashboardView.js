class DashboardView {
    constructor(controller) {
        this.controller = controller;
        // Assurez-vous que l'élément .players-table est disponible avant de continuer
        this.playersTable = document.querySelector('.players-table');
        if (!this.playersTable) {
            console.error('DashboardView : élément .players-table non trouvé.');
            return; // Arrête l'exécution si l'élément requis n'est pas trouvé
        }
        this.controller.view = this; // Fournit un moyen pour le contrôleur d'appeler des méthodes de la vue
        console.log('DashboardView : Initialisé et affiche les utilisateurs.');
        this.renderUsers(this.controller.getAllUsers());
    }

    renderUsers(users) {
        console.log('DashboardView : Affichage des utilisateurs.', users);
        // Efface les utilisateurs existants
        this.playersTable.innerHTML = '<div class="table-header"><span>Nom</span><span>Email</span><span>Rôle</span><span>Statut</span><span>Actions</span></div>';

        users.forEach(user => {
            const userRow = document.createElement('div');
            userRow.classList.add('player-row');
            userRow.innerHTML = `
                <span>${user.name}</span>
                <span>${user.email}</span>
                <span>${user.role}</span>
                <span class="status-active">${user.status}</span>
                <span class="actions">
                    <button class="btn btn-delete" data-email="${user.email}">Supprimer</button>
                </span>
            `;
            this.playersTable.appendChild(userRow);

            // Associe l'événement de clic au bouton de suppression
            userRow.querySelector('.btn-delete').addEventListener('click', (e) => {
                const email = e.target.getAttribute('data-email');
                console.log(`DashboardView : Suppression de l'utilisateur avec l'email ${email}.`);
                this.controller.deleteUser(email);
            });
        });
    }
}
