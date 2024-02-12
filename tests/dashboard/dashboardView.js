class DashboardView {
    constructor(controller) {
        this.controller = controller;
        // Ensure the .players-table element is available before proceeding
        this.playersTable = document.querySelector('.players-table');
        if (!this.playersTable) {
            console.error('DashboardView: .players-table element not found.');
            return; // Stop execution if the required element is not found
        }
        this.controller.view = this; // Provide a way for the controller to call view methods
        console.log('DashboardView: Initialized and rendering users.');
        this.renderUsers(this.controller.getAllUsers());
    }

    renderUsers(users) {
        console.log('DashboardView: Rendering users.', users);
        // Clear existing users
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
                    <button class="btn btn-delete" data-email="${user.email}">Delete</button>
                </span>
            `;
            this.playersTable.appendChild(userRow);

            // Bind delete button event
            userRow.querySelector('.btn-delete').addEventListener('click', (e) => {
                const email = e.target.getAttribute('data-email');
                console.log(`DashboardView: Deleting user with email ${email}.`);
                this.controller.deleteUser(email);
            });

            
        });
    }
}
