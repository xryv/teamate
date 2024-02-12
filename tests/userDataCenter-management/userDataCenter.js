class UserDataCenter {
    constructor() {
        this.users = [];
        console.log('UserDataCenter initialisé.');
    }
  
    addUser(user) {
        this.users.push(user);
    }
  
    getAllUsers() {
        return this.users;
    }
  
    deleteUserByEmail(email) {
        this.users = this.users.filter(user => user.email !== email);
    }
  
    preloadUsers() {
        const mockUsers = [
            new User("jane.doe@example.com", "securePassword123", "JaneDoe", "Jane", "Doe", "1985-01-01", "Global Tech"),
            new User("john.smith@example.com", "passwordSecure456", "JohnSmith", "John", "Smith", "1982-02-02", "Tech Innovations"),
            new User("sarah.connor@example.com", "future123", "SarahConnor", "Sarah", "Connor", "1987-03-03", "Cybernetics"),
            new User("james.bond@example.com", "007Secret", "JamesBond", "James", "Bond", "1965-04-04", "British Intelligence"),
            new User("ada.lovelace@example.com", "algorithmic", "AdaLovelace", "Ada", "Lovelace", "1815-12-10", "Analytical Engine Co")
        ];
        this.users.push(...mockUsers);
        console.log('Utilisateurs préchargés dans UserDataCenter.');
    }
    
  }
  