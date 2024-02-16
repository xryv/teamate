// Définition de la classe DashboardView pour la gestion de l'affichage du tableau de bord.
class DashboardView {
    // Constructeur de la classe prenant en paramètre le contrôleur pour lier la vue et la logique métier.
    constructor(controller) {
        this.controller = controller; // Liaison avec le contrôleur.
        this.playersTable = document.querySelector('.players-table'); // Sélection de l'élément du DOM représentant le tableau des joueurs.

        // Vérification de l'existence de l'élément '.players-table' dans le DOM.
        if (!this.playersTable) {
            console.error('DashboardView: .players-table element not found.'); // Message d'erreur si l'élément est absent.
            return; // Sortie précoce du constructeur pour éviter toute exécution ultérieure.
        }

        this.controller.view = this; // Association de la vue actuelle avec le contrôleur pour permettre les interactions bidirectionnelles.
        console.log('DashboardView: Initialized and displaying users.'); // Confirmation de l'initialisation de la vue.

        // Appel initial pour le rendu des administrateurs basé sur les données fournies par le contrôleur.
        this.renderAdmins(this.controller.getUsersByRole("Admin"));
    }

    // Méthode pour le rendu des administrateurs dans le tableau.
    renderAdmins(users) {
        console.log('DashboardView: Rendering administrators.', users); // Log pour le suivi du processus de rendu.

        // Initialisation de l'entête du tableau dans 'playersTable'.
        this.playersTable.innerHTML = '<div class="table-header"><span>Name</span><span>Email</span><span>Role</span><span>Status</span><span>Actions</span></div>';

        // Itération sur chaque utilisateur (admin) pour créer et insérer une ligne dans le tableau.
        users.forEach(user => {
            const userRow = document.createElement('div'); // Création de l'élément de ligne.
            userRow.classList.add('player-row'); // Ajout de la classe CSS pour le style.
            // Définition du contenu de la ligne avec les informations de l'utilisateur.
            userRow.innerHTML = `
                <span>${user.name}</span>
                <span>${user.email}</span>
                <span>${user.role}</span>
                <span class="status-${user.status.toLowerCase()}">${user.status}</span>
                <span class="actions">
                    <button class="btn btn-delete" data-email="${user.email}">Delete</button>
                </span>
            `;
            this.playersTable.appendChild(userRow); // Insertion de la ligne dans le tableau.

            // Ajout d'un écouteur d'événement sur le bouton 'Delete' pour gérer la suppression d'un utilisateur.
            userRow.querySelector('.btn-delete').addEventListener('click', (e) => {
                const email = e.target.getAttribute('data-email'); // Récupération de l'email de l'utilisateur à supprimer.
                console.log(`DashboardView: Deleting user with email ${email}.`); // Log pour le suivi de l'action de suppression.
                this.controller.deleteUser(email); // Appel de la méthode du contrôleur pour supprimer l'utilisateur.

                // Rafraîchissement de l'affichage des administrateurs après la suppression.
                this.renderAdmins(this.controller.getUsersByRole("Admin"));
            });
        });
    }
}
