# TeamMate User Data Management System

## Overview

The TeamMate platform is designed with a focus on scalable and efficient user data management. This system centralizes all user-related information within a single data structure, referred to as the "User Data Center." The User Data Center is a dynamic and flexible repository that organizes user data hierarchically, making it easily accessible and manageable throughout the application lifecycle.

## Architecture

### User Data Center

At the core of our user management strategy is the User Data Center, a construct that acts as the primary store for all user records. It is designed to handle multiple user profiles, each containing detailed attributes such as username, personal information, preferences, and more.

### User Object Model

Each user within the Data Center is represented as an individual object. These objects are structured with the following key-value pairs:

- `email`: A unique identifier for each user.
- `state`: Reflects the user's verification status.
- `username`: The user's chosen identifier within the platform.
- `name`: The user's first name.
- `surname`: The user's last name.
- `born`: The user's date of birth.
- `country`: The country where the user resides.
- `town`: The hometown of the user.

### Data Management Functions

A set of dedicated functions will be implemented to manage user data within the Data Center. These functions will allow for:
- List in the section of players on the dashboard all the elements related to the projected planning done before. ( under a small overview of the html initial structure )
``` 

<!-- Tableau pour afficher les joueurs -->
<div class="card-content players-table grid-container">
    <!-- En-tête du tableau définissant les colonnes -->
    <div class="table-header">
        <span>Nom</span>
        <span>Email</span>
        <span>Rôle</span>
        <span>Statut</span>
        <span>Actions</span>
    </div>
```

- Creating new user profiles.
```
```


- Updating existing information.
    - email
    - role ( -- possible remove and add to role page only)
    - statut  ( -- auto verification pass script )
    - 

- Deleting user profiles as needed.
- Querying for specific user data.

## Implementation

The User Data Center is implemented as a JavaScript class within the Node.js environment, leveraging the Express.js framework for handling HTTP requests and responses.

### Core Class

The `UserDataCenter` class encapsulates all the logic required to operate on the user data. This includes methods for adding new users, updating user information, and other CRUD operations.

```javascript
class UserDataCenter {
  constructor() {
    this.users = [];
  }

  // Method implementations...
}
```

### Persistence

User data is stored locally in a JSON file, acting as a mock database. This approach simplifies the development process and avoids the complexity of integrating with a full-fledged database system.

### Reusability

Classes and functions are designed with reusability in mind. They are generic enough to be utilized across different parts of the application, reducing redundancy and promoting a clean codebase.


## Conclusion

The TeamMate User Data Management System is a testament to a thoughtful and methodically structured approach to handling user data. With an emphasis on scalability, maintainability, and ease of management, the system sets a solid foundation for building a robust and user-centric platform.

---