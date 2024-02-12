// user.js - Ce fichier définira la classe User et ses méthodes
console.log("user.js loaded successfully.");

class User {
    constructor(email, username, name, surname, born, country, town, state) {
      this.email = email;
      this.username = username;
      this.name = name;
      this.surname = surname;
      this.born = born;
      this.country = country;
      this.state = state; // Verification
      this.role = role;
    }
  
    // Méthode pour mettre à jour les informations du profil de l'utilisateur
    updateProfile(newProfile) {
      // Merge newProfile fields into this user object
      Object.keys(newProfile).forEach(key => {
        this[key] = newProfile[key];
      });
      console.log(`User profile updated with new information:`, newProfile);
    }
  }
  

  export { User };

