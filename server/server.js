import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './Routes/userRoute.js';
import chatRoute from './Routes/chatRoute.js';

const app = express();
dotenv.config({ path: './server/.env' });

app.use(express.json());
app.use(cors());
app.use('/api/users', userRoute);
app.use('/api/chats', chatRoute);

app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

const port = process.env.PORT ?? 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port: ${port}`);
});

mongoose.connect(uri)
    .then(() => {
        console.log('MongoDB database connection established successfully');
    })
    .catch(err => { console.log(err); });
