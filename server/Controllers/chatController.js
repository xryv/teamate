// createChat

import ChatModel from '../Models/chatModel.js';

const createChat = async (req, res) => {
    const { firstId, secondId } = req.body;

    try {
        const chat = await ChatModel.findOne({
            members: { $all: [firstId, secondId] },
        });

        if (chat) {
            return res.status(200).json(chat);
        }
        const newChat = new ChatModel({
            members: [firstId, secondId],
        });

        const response = await newChat.save();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

// findUserChats

const findUserChats = async (req, res) => {
    const userId = req.params.userId;

    try {
        const chats = await ChatModel.find({
            members: { $in: [userId] },
        });
        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json(error);
    }
};

// findChat

const findChat = async (req, res) => {
    const { firstId, secondId } = req.params;

    try {
        const chat = await ChatModel.findOne({
            members: { $all: [firstId, secondId] },
        });
        return res.status(200).json(chat);
    } catch (error) {
        res.status(500).json(error);
    }
};

export { createChat, findUserChats, findChat };
