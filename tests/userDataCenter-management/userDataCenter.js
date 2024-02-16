class UserDataCenter {
    constructor() {
        this.users = [];
        console.log('UserDataCenter initialisé.');
    }
  
    addUser(user) {
        this.users.push(user);
    }

    // Méthode pour changer le rôle d'un utilisateur
    setUserRole(email, newRole) {
        const user = this.users.find(user => user.email === email);
        if (user) {
            user.role = newRole;
        }
    }

    // Méthode pour récupérer des utilisateurs par rôle
    getUsersByRole(role) {
        return this.users.filter(user => user.role === role);
    }
  
    getAllUsers() {
        return this.users;
    }
  
    deleteUserByEmail(email) {
        this.users = this.users.filter(user => user.email !== email);
    }


  
    preloadUsers() {
        const mockUsers = [
            new User("player1@example.com", "password123", "PlayerOne", "Player", "One", "1995-01-01", "TechLand", "Joueur", "Active"),
            new User("admin1@example.com", "adminPassword123", "AdminOne", "Admin", "One", "1990-02-02", "AdminVille", "Admin", "Inactive"),
            new User("player2@example.com", "password456", "PlayerTwo", "Player", "Two", "1998-03-03", "GameCity", "Joueur", "Suspended"),
            new User("player3@example.com", "password789", "PlayerThree", "Player", "Three", "1996-04-04", "Playground", "Joueur", "Active"),
            new User("admin2@example.com", "adminPassword456", "AdminTwo", "Admin", "Two", "1985-05-05", "ControlCenter", "Admin", "Active")
        ];
        this.users.push(...mockUsers);
        console.log('Mock users with statuses preloaded into UserDataCenter.');
    }
    
    
    
  }
  