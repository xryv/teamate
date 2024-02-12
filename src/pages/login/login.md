# Login Script

## Overview
`login.js` manages the user login process on the `login.html` page. It validates user input, sends credentials to the server, and handles the server's response.

## Connection to HTML
This script targets the form element within `login.html`, specifically handling the form submission event to perform the login action.

## HTML Elements Manipulated:
- The form element with ID `login-form`.
- Input elements within the form for the user's email and password.

## Interconnection with Other Scripts
`login.js` might interact with:
- `userAuth.js` if there's a separate script managing user sessions, to set the user's logged-in state.
- `dashboard_players.js` indirectly, as successful login will potentially redirect the user to the dashboard where `dashboard_players.js` takes over.

## External Dependencies
Relies on the server's login endpoint (e.g., `/api/login`) to authenticate the user.
