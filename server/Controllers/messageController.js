import MessageModel from '../Models/messageModel.js';

// createMessage
const createMessage = async (req, res) => {
    const { chatId, senderId, text } = req.body;
    const message = new MessageModel({
        chatId,
        senderId,
        text,
    });
    try {
        const response = await message.save();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

// getMessages
const getMessages = async (req, res) => {
    const { chatId } = req.params;
    try {
        const messages = await MessageModel.find({ chatId });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json(error);
    }
};

export {
    createMessage,
    getMessages,
};
