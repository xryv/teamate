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
