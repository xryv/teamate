# Registration Module Testing

This document outlines the testing strategy and results for the registration module. The tests focus on ensuring that the registration process accurately validates user inputs and successfully registers new users in the system.

## Checked Tests

#### Test Matrix

| Test Description                        | Status  | Remarks |
|-----------------------------------------|---------|---------|
| Email Validation Test                   | Passed  | Validates format |
| Password Validation Test                | Passed  | Ensures complexity |
| Username Validation Test                | Passed  | Checks for uniqueness |
| First Name Validation Test              | Passed  | Non-empty, alphabetic |
| Last Name Validation Test               | Passed  | Non-empty, alphabetic |
| Date of Birth Validation Test           | Passed  | Correct format, logical dates |
| Country Validation Test                 | Passed  | Non-empty, valid selection |

### Registration Functionality Tests

Functionality tests verify the end-to-end process of registering a new user, emphasizing the integration of the registration module with backend systems.

#### Test Matrix

| Test Description                | Status  | Remarks |
|---------------------------------|---------|---------|
| User Registration Test          | Passed  | Confirms creation and persistence |

#### FLOWMAP 

```
[User Interface (UI)]
  |   ^
  v   |
[Registration View] -- Captures user input and manages feedback (errors/success)
  |   ^
  v   |
[Registration Controller] -- Orchestrates the process; mediates between View and Model
  |   ^
  v   |
[Registration Model] -- Handles business logic; validates input using `validations.js`
  |   ^
  v   |
[Validations.js] -- Contains functions for specific validations (email, password, etc.)
```

Flow:
1. User fills and submits the registration form on the UI.
2. Registration View captures the form data and invokes a callback to the Registration Controller.
3. Registration Controller receives the form data, invokes the Registration Model to validate and create a user.
4. Registration Model uses functions from `validations.js` to validate each field.
5. Depending on validation:
   - If successful, Model proceeds to create a user. Controller then updates the View to display success.
   - If failed, Controller updates the View to show error messages.


