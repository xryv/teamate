//  path: teamate\src\api\models\UserDataCenter.js

class UserDataCenter {
  constructor() {
    // Initializing an empty array to store users
    this.users = [];
    console.log("UserDataCenter initialized.");
  }

  // Method to generate a unique ID for each user
  generateUniqueId() {
    // In a real application, use UUIDs for unique IDs
    return Date.now() + Math.random().toString(16).slice(2);
  }

  // Method to validate user data
  validateUserData(userData) {
    // Add validation logic here (e.g., regex for email)
    return userData.email.includes("@");
  }

  // Method to create a user object
  createUserObject(userData) {
    if (!this.validateUserData(userData)) {
      console.error("Invalid user data.");
      throw new Error("Invalid user data.");
    }
    const userObject = {
      id: this.generateUniqueId(),
      email: userData.email,
      state: userData.state || 'unverified',
      username: userData.username,
      name: userData.name,
      surname: userData.surname,
      born: userData.born,
      country: userData.country,
      town: userData.town,
      role: userData.role || 'player', 
    };
    console.log(`User object created for email: ${userData.email}`);
    return userObject;
  }

  // Method to add a new user
  addUser(userData) {
    const userObject = this.createUserObject(userData);
    this.users.push(userObject);
    console.log(`User added: ${JSON.stringify(userObject)}`);
    return userObject;
  }

  // Method to update user data
  updateUser(userId, newUserData) {
    const userIndex = this.users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
      console.error("User not found.");
      throw new Error("User not found.");
    }
    this.users[userIndex] = { ...this.users[userIndex], ...newUserData };
    console.log(`User updated: ${JSON.stringify(this.users[userIndex])}`);
    return this.users[userIndex];
  }

  // Method to delete a user
  deleteUser(userId) {
    const userIndex = this.users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
      console.error("User not found.");
      throw new Error("User not found.");
    }
    this.users.splice(userIndex, 1);
    console.log(`User with ID ${userId} deleted.`);
    return { status: 'success', message: 'User successfully deleted.' };
  }

  // Method to find a user by criteria
  findUser(criteria) {
    const matchedUsers = this.users.filter(user => {
      return Object.keys(criteria).every(key => user[key] === criteria[key]);
    });
    console.log(`Found users: ${JSON.stringify(matchedUsers)}`);
    return matchedUsers;
  }
}

