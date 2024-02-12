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
