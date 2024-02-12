// userDataCenter.js - Ce fichier gérera une collection d'utilisateurs.
console.log("userDataCenter.js loaded successfully.");

import { User } from './user.js';

export class UserDataCenter {
  constructor() {
    this.users = []; // Un tableau pour stocker les objets utilisateur.
    this.initTestUsers();
  }

  // Method to create test users
  initTestUsers() {
    const testUsers = [
        { email: 'user1@example.com', username: 'user1', name: 'User', surname: 'One', born: '1990-01-01', country: 'Country1', town: 'Town1', state: 'active', role: 'player', password: 'password1' },
        { email: 'user2@example.com', username: 'user2', name: 'User', surname: 'Two', born: '1991-02-02', country: 'Country2', town: 'Town2', state: 'active', role: 'player', password: 'password2' },
        // Add more test users as needed
    ];

    // Loop through each test user and add them to the users array
    testUsers.forEach(user => {
        this.users.push(new User(user.email, user.username, user.name, user.surname, user.born, user.country, user.town, user.state, user.role, user.password));
    });

    console.log('Test users initialized:', this.users);
  }

  // Crée et ajoute un nouvel utilisateur à la collection.
  createUser(userInfo) {
    const newUser = new User(
      userInfo.email,
      userInfo.username,
      userInfo.name,
      userInfo.surname,
      userInfo.born,
      userInfo.country,
      userInfo.state,
      userInfo.role
    );
    // Vérifiez si l'email est déjà utilisé.
    const emailExists = this.users.some(user => user.email === userInfo.email);
    if (!emailExists) {
      this.users.push(newUser);
      return newUser;
    }
    throw new Error('Un utilisateur avec cet email existe déjà.');
  }

  // Met à jour les informations d'un utilisateur existant en utilisant son email.
  updateUser(email, newProfile) {
    console.log(`Attempting to update profile for user with email: ${email}`);
    
    const userIndex = this.users.findIndex(user => user.email === email);
    if (userIndex === -1) {
      console.error('Update failed: No user found with email:', email);
      throw new Error('Aucun utilisateur trouvé avec cet email.');
    }

    // Assuming User class has an `updateProfile` method that intelligently merges provided fields
    try {
      this.users[userIndex].updateProfile(newProfile);
      console.log(`Profile updated successfully for user with email: ${email}`);
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error; // Re-throwing the error to be handled by the caller
    }
  }


  // Supprime un utilisateur de la collection en utilisant son email.
  deleteUser(email) {
    const initialLength = this.users.length;
    this.users = this.users.filter(user => user.email !== email);
    // Vérifiez si un utilisateur a été supprimé.
    if (this.users.length === initialLength) {
      throw new Error('Aucun utilisateur trouvé avec cet email pour supprimer.');
    }
  }

  // Récupère les données d'un utilisateur en utilisant son email.
  queryData(email) {
    const user = this.users.find(user => user.email === email);
    if (!user) {
      throw new Error('Aucun utilisateur trouvé avec cet email.');
    }
    return user;
  }

  // Gère les rôles des utilisateurs en utilisant leur email.
  manageUserRoles(email, newRole) {
    const user = this.queryData(email);
    user.role = newRole;
  }

  // Vérifie l'email d'un utilisateur en utilisant son email.
  verifyUserEmail(email) {
    const user = this.queryData(email);
    user.emailVerified = true;
  }

  // Initialise le système de stockage de données avec des données fictives.
  // Cette méthode sera mise à jour pour intégrer un stockage de données réel.
  initDataStorage() {
    // Pour l'instant, cette méthode peut initialiser les données à partir de données fictives ou de localStorage.
  }
}

// Exportez UserDataCenter pour l'utiliser dans d'autres fichiers JavaScript.
export { UserDataCenter };
