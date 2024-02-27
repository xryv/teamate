import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 3,
            max: 30,
        },
        email: {
            type: String,
            required: true,
            min: 6,
            max: 200,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
            max: 1024,
        },
    },
    {
        timestamps: true,
    },
);

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
// Path: server/Models/userModel.js
