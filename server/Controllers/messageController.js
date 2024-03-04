/* eslint-disable @typescript-eslint/explicit-function-return-type */
import MessageModel from '../Models/messageModel.js';

// createMessage
const createMessage = async (req, res) => {
    const { chatId, senderId, text } = req.body;
    const message = new MessageModel({
        chatId,
        senderId,
        text,
        read: false,
        imageUrl: '',
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

// getMessage
const getMessage = async (req, res) => {
    const { id } = req.params;
    try {
        console.log('id:', id);
        const message = await MessageModel.findById(id);
        if (message !== null) {
            res.status(200).json({ message: 'Message found', data: message });
        } else {
            res.status(404).json({ message: 'Message not found' });
        }
    } catch (error) {
        console.error('Error deleting message:', error);
        res.status(500).json(error);
    }
};
// editMessage
const editMessage = async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    try {
        const message = await MessageModel.findByIdAndUpdate(id, { text }, { new: true });
        if (message !== null) {
            res.status(200).json({ message: 'Message updated successfully', data: message });
        } else {
            res.status(404).json({ message: 'Message not found' });
        }
    } catch (error) {
        console.error('Error updating message:', error);
        res.status(500).json(error);
    }
};

const deleteMessage = async (req, res) => {
    const { id } = req.params;
    try {
        const message = await MessageModel.findOneAndDelete({ _id: id });
        if (message !== null) {
            res.status(200).json({ message: 'Message deleted successfully' });
        } else {
            res.status(404).json({ message: 'Message not found' });
        }
    } catch (error) {
        console.error('Error deleting message:', error);
        res.status(500).json(error);
    }
};

export {
    createMessage,
    getMessages,
    getMessage,
    deleteMessage,
    editMessage,
};
