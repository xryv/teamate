// teamate\src\api\app.js

const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use('/users', userRoutes);

// Additional setup...
