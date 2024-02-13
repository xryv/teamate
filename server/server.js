import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './Routes/userRoute.js';

const app = express();
dotenv.config({ path: './server/.env' });

app.use(express.json());
app.use(cors());
app.use('/api/users', userRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT ?? 3001;
const uri = process.env.ATLAS_URI;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

mongoose.connect(uri)
    .then(() => {
        console.log('MongoDB database connection established successfully');
    })
    .catch(err => { console.log(err); });
