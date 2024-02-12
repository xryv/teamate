```
api/: Contains Express.js routes, controllers, middleware, and models.
- controllers/: Functions that respond to HTTP requests and delegate to services.
- middleware/: Express middleware for handling cross-cutting concerns like authentication and logging.
- models/: Represents data models and interacts with the database or data layer. Here, you'll include your UserDataCenter class.
- routes/: Defines your application's routes and their corresponding controllers.
- config/: Configuration files and environment-specific settings.
- services/: Business logic and service layer. Interacts with models.
- utils/: Utility functions and helpers.
- app.js: Initializes the application and middleware.
```

# API Documentation Overview

## Introduction
This document outlines the structure, endpoints, and usage of Teamate's API. The API is designed to facilitate user management, including operations like creating, retrieving, updating, and deleting user profiles.

## API Structure
The API is structured around RESTful principles, providing clear, predictable URLs for accessing user resources.

### Endpoints

- **/users**: 
  - `GET` - Retrieves a list of users.
  - `POST` - Creates a new user.

- **/users/{id}**: 
  - `GET` - Retrieves a user by ID.
  - `PUT` - Updates a user by ID.
  - `DELETE` - Deletes a user by ID.

### Models
- **UserDataCenter**: Central model for handling user data operations.

## Usage
To interact with the API, clients will send HTTP requests to the specified endpoints. Responses will be returned in JSON format.

### Example
To add a new user:
```http
POST /users
Content-Type: application/json

{
  "email": "newuser@example.com",
  "password": "hashed_password",
  "username": "newuser",
  ...
}
```

## Security
All user passwords are stored as hashed values. Sensitive endpoints require authentication.

## Error Handling
Standard HTTP status codes are used to indicate the success or failure of an API request.

For detailed examples and usage, please refer to the specific sections for each endpoint in this documentation.


Test Registering a User:

You can create a POST request in Postman to your API's registration endpoint.
In the body of the request, include the user details you want to register.
Send the request and check the response to ensure that the user is added to the users array.
Test User Login:

Create a POST request to the login endpoint.
Include the login credentials in the request body.
Send the request and verify that the response confirms a successful login, and the session is started.
Test Dashboard Functionalities:

For actions that require an authenticated user, you may first need to login to get a token (if your API uses token-based authentication).
Then, create GET, POST, PUT, or DELETE requests to the respective dashboard endpoints.
Include the token in the request headers if necessary.
Send the requests and observe the responses to ensure the dashboard functionalities are working as expected.

let's proceed to the code verification, and analyzis to see if its accordingly ready to be easy implemented for the rest of the website.

// \teamate\src\api\controllers\userController.js

const userService = require('../services/userService');

async function getUsers(req, res) {
    const users = await userService.readUsers();
    res.json(users);
}

async function addUser(req, res) {
    const newUser = req.body; // Validate this in real applications
    const users = await userService.readUsers();
    users.push(newUser); // Consider assigning a unique ID here
    await userService.writeUsers(users);
    res.status(201).send('User added');
}

module.exports = {
    getUsers,
    addUser,
    // Define more functions for update and delete operations
};


---

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
      // Add other user properties here
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



---


// \teamate\src\api\services\userService.js

// Get all users
app.get('/users', async (req, res) => {
    const users = await readUsersFromFile();
    res.json(users);
});

// Add a new user
app.post('/users', async (req, res) => {
    const newUser = req.body; // Assuming a valid user object is passed
    const users = await readUsersFromFile();
    users.push(newUser);
    await writeUsersToFile(users);
    res.status(201).send('User added');
});

// Additional routes for updating and deleting users can be implemented similarly

---

// \teamate\src\api\utils\plug.js

const fs = require('fs').promises; // Uses promises for async/await
const path = require('path');

const usersFilePath = path.join(__dirname, 'users.json');

// Functions to read users data
async function readUsersFromFile() {
    try {
        const data = await fs.readFile(usersFilePath, 'utf8');
        return JSON.parse(data).users;
    } catch (err) {
        console.error('Error reading from file', err);
        return [];
    }
}

// Functions to write users data
async function writeUsersToFile(users) {
    try {
        const data = JSON.stringify({ users }, null, 2);
        await fs.writeFile(usersFilePath, data, 'utf8');
    } catch (err) {
        console.error('Error writing to file', err);
    }
}


---

// teamate\src\api\app.js

const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use('/users', userRoutes);

// Additional setup...


----

// \teamate\server.js

---

this are the files that i have written until the moment.

# TeamMate User related data Structure

This document outlines the architecture of the TeamMate user management system, detailing the data structures, role management, middleware, and dashboard interfaces that comprise the core of the user management mechanics.

## Table of Contents
- [Overview](#overview)
- [Architecture](#architecture)... continue accordingly the representation bellow


## Architecture Overview

The TeamMate repository is structured to provide a scalable and secure system for managing user data and roles and other elements that may appear in the road accordingly to the rest of the team systems. Below is an overview of my system's architecture, represented in a clear and organized format.

### User Data Center

The User Data Center is the heart of our user management system, designed as a centralized array that stores all user data to serve any other component with the middlewares.

```markdown
- User Data Center (Array)
  - User[0] (Object)
    - Email: user@example.com
    - State: verified
    - Username: user123
    - name: Bob
    - surname: Lightson
    - born: 12 12 1222
    - country: France
    - region: ----
    - ...additional user attributes...
  - User[1] (Object)
    - ...attributes...
  - ...
  - User[N] (Object)
    - ...attributes...
```

## System Class Diagram

The following diagram illustrates the class structure of the TeamMate User Data Management System:

![System Class Diagram](../data/imagedata.png)

### Description

The diagram represents the core classes and their relationships within the system:

- ***Mainclass:***
- **UserDataCenter**: Central class that manages the collection of users.
    - ***Attributes:***
  - `users`: An array that stores all user objects.
    - ***Functions:***
    - `constructor()`: Initializes the UserDataCenter.
    - `createUser()`: Creates a new user object.
    - `updateUser()`: Updates an existing user's information.
    - `deleteUser()`: Removes a user object from the array.
    - `queryData()`: Retrieves data for a particular user.
    - `manageUserRoles()`: Assigns or updates user roles.
    - `verifyUserEmail()`: Verifies a user's email address.
    - `initDataStorage()`: Initializes the data storage system.

- ***Subclass:***
- **User**: Represents an individual user within the system.
    - ***Attributes:***
  - `email`: The user's email address.
  - `username`: The user's chosen username.
  - `name`: The user's first name.
  - `surname`: The user's last name.
  - `born`: The user's date of birth.
  - `country`: The user's country of residence.
  - `town`: The user's hometown.
  - `state`: The user's account state. <-- ON HOLD || REMOVE -->
    - ***Functions:***
    - `updateProfile()`: Method to update the user's profile information.

- **Persistence**: Handles data storage and retrieval.
  - `storeData()`: Saves the user data to a file.
  - `loadData()`: Loads user data from a file.


### Roles Management

Roles within TeamMate are predefined and include 'Super Admin', 'Admin', and 'User'. Each role comes with its own set of permissions.
Some of the integrations of this component is to resolve access on the plataform, for example on dashbord page where the access is exclusivly to super admin and admin. while user is still being a necessary access meaning that the user is logged, then the page and interface is another.

```markdown
- Roles Management
  - Super Admin (Hardcoded, highest privileges)
  - Admin (Assignable by Super Admin)
  - User (Default role upon email verification)

  const Roles = {
  SUPER_ADMIN: 'super_admin',
  ADMIN: 'admin',
  USER: 'user'
};

```

### Middleware for Access Control

Our middleware ensures that actions within the platform are gated by user roles, enforcing security and proper access across the system.

```markdown
- Middleware (Access Control)
  - Access Checks
    - isAdmin: Verifies if the user has admin-level permissions.
    - isSuperAdmin: Verifies if the user is a super admin.

function checkRole(req, res, next) {
  const userRole = req.currentUser.role;
  if (userRole === Roles.SUPER_ADMIN || userRole === Roles.ADMIN) {
    next(); // Grant access for admin levels
  } else {
    res.status(403).send('Access Denied'); // Restrict access for other roles
  }
}

  - Role Assignment
    - assignRole: Assigns roles to users within the system.

function assignRole(userId, role) {
  const user = userDataCenter.findUserById(userId);
  if (user) {
    user.role = role;
    userDataCenter.updateUser(user); // Update the central user data repository
    console.log(`Role ${role} assigned to user ${userId}`);
  } else {
    console.log('User not found');
  }
}

```

### Dashboard Interface

The dashboard interface adapts to the user's role, providing a tailored experience for Super Admins, Admins, and Users.

```markdown
- Dashboard Interface
  - Super Admin Dashboard
    - Full control over the platform.
        - move role from ( player to admin )
        - move role from ( admin to player )
  - Admin Dashboard
    - Limited administrative capabilities.
        - move role from ( player to admin )
  - User Dashboard
    - Personal account management.
        - no user management capabilities.
```

Middleware for Role-based Access Control:
This middleware checks the user's role before rendering the dashboard, ensuring that users can only access features and information appropriate to their role.

```
app.get('/dashboard', checkRole, (req, res) => {
  // `checkRole` middleware directs users to the correct dashboard based on their role
  const role = req.user.role;
  switch(role) {
    case Roles.SUPER_ADMIN:
      return res.render('dashboard_super_admin.html');
    case Roles.ADMIN:
      return res.render('dashboard_admin.html');
    case Roles.USER:
      return res.render('dashboard_user.html');
    default:
      return res.status(403).send('Access Denied');
  }
});
```



### Implementation

#### Authentication
#### Register (`register.html`)
Registration Management

The registration page is a straightforward form allowing new players to create a profile within the TeamMate system:

- **Register New User**: The form captures essential information such as email, password, and password confirmation. Upon submission, it calls the `createUser()` function from the UserDataCenter class to add a new user to the system.

#### Login (`login.html`)
Login Management

The login page provides existing users a secure entry point into the TeamMate platform:

- **User Authentication**: The login form prompts users for their email and password. Submitting this form calls upon the `authenticateUser()` function within the UserDataCenter class.
  - **Integration with UserDataCenter**:
    - The `authenticateUser()` method checks the provided credentials against the existing user data, utilizing the `queryData()` function to locate the relevant user object.
    - This method ensures the security of the login process, verifying the hashed password and email, and allowing access only if a match is found.
    - Successful authentication results in the user being granted access to their dashboard, while failure prompts them to try again or reset their password.

- **Persistence**:
  - The UserDataCenter ensures that user session information is appropriately managed post-login, with the user's active state being recorded in the system.
  - Should the user choose to remain logged in, the `storeData()` function is used to maintain the session state, allowing for persistent user sessions across visits.

### Forgot Password (`reinitialisation_mp.html`)
Password Reset Management

The forgot password page offers users the ability to reset their password if they have trouble logging in:

- **Password Reset**: Through a straightforward form, users can request a password reset by entering their email address. The submission of this form triggers the `resetUserPassword()` method in the UserDataCenter class.
  - **Integration with UserDataCenter**:
    - The `resetUserPassword()` function, upon being called, searches for the user object associated with the provided email using the `queryData()` method. This ensures that the password reset request is linked to the correct user.
    - Once the user is identified, the `UserDataCenter` class facilitates the password update while ensuring the user's data integrity and security.
    - This process may involve generating a temporary password or a password reset link, which is then sent to the user's email for confirmation and to complete the reset process.

- **Persistence**:
  - After the user's password has been reset, the new password information needs to be securely stored. This is accomplished through the `storeData()` function, which updates the user's profile within the persistent storage.
  - Subsequent logins will utilize the `loadData()` function to retrieve and verify the updated password, maintaining a seamless user experience and the integrity of the login process.


### Complete Registration (`complete_register.html`)
Account Completion Management

The account completion section is dedicated to enriching user profiles with additional information after their initial registration:

- **Complete User Profile**: The form gathers supplementary user details, including a username, first name, last name, date of birth, country, and city. When the form is submitted, it activates the `completeUserProfile()` method in the UserDataCenter class, which appends these details to the user's existing profile.
  - **Integration with UserDataCenter**:
    - Upon form submission, the `completeUserProfile()` method is invoked. This method is part of the `UserDataCenter` class, designed to update the user's information with additional details provided during account completion.
    - The `updateUser()` method within the `UserDataCenter` class is leveraged to ensure that all new data is correctly associated with the corresponding user object.
    - Once the form data is submitted, it is processed by the UserDataCenter, where the `users` array is updated to include the new details, enhancing the individual `User` object with the newly provided attributes.

- **Persistence**:
  - The updated user profile information is then persisted to the system using the `storeData()` function, ensuring that all changes are saved and can be retrieved in future sessions through the `loadData()` function.



### Dashboard Management
#### Players(`dashboard_players.html`)
Players Management

The players management area of the dashboard is where I interact with the user profiles. It's structured to provide a comprehensive overview and control over player accounts:

- **Add New Player**: A button is prominently displayed, enabling me to add new player profiles by invoking the `createUser()` function from the UserDataCenter class.
- **Edit Players**: Next to each player's details, I find a modify button, which allows me to adjust player information through the `updateUser()` method.
- **Remove Players**: Should the need arise to remove a player from the system, I can use the delete button linked to the `deleteUser()` method, which securely removes the player's profile from the UserDataCenter.


### Dashboard 
#### Admins(`dashboard_admins.html`)
Administrative Management

Similar to the players section, the administrative management area features a table where I can:

- **Add New Admin**: Utilize a button to register new admin profiles, invoking the `createUser()` function from the UserDataCenter class.
- **Edit Admins**: Each row offers a modify button, allowing me to update admin profiles using the `updateUser()` method.
- **Remove Admins**: The delete button invokes the `deleteUser()` method, ensuring that admin rights are revoked and the profile is removed securely.


