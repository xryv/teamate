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
