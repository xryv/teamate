import express from 'express';
import { registerUser, loginUser, findUser, getUsers } from '../Controllers/userController.js';

const router = express.Router();

router.get('/register', registerUser);

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/find/:userId', findUser);
router.get('/', getUsers);

export default router;

// Path: server/Routes/userRoute.js
