import UserModel from '../Models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'validator';

const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRET_KEY;
    return jwt.sign({ _id }, jwtkey, { expiresIn: '3d' });
};

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        let user = await UserModel.findOne({ email });
        if (user) return res.status(400).json('User already exists');
        if (!username || !email || !password) return res.status(400).json('Please enter all fields');
        if (!validator.isEmail(email)) return res.status(400).json('Invalid email');
        if (!validator.isStrongPassword(password)) return res.status(400).json('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character');

        user = new UserModel({ username, email, password });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();

        const token = createToken(user._id);
        res.status(200).json({ _id: user._id, username, email, token });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) return res.status(400).json('Invalid email or password');
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) return res.status(400).json('Invalid email or password');
        const token = createToken(user._id);
        res.status(200).json({ _id: user._id, username: user.username, email, token });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const findUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await UserModel.findById(userId);
        // if (!user) return res.status(404).json('User not found');
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

export { registerUser, loginUser, findUser, getUsers };
