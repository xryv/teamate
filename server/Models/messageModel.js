import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    chatId: String,
    senderId: String,
    text: String,
    read: Boolean,
    imageUrls: {
        type: [String],
        default: [],
    },
}, { timestamps: true });

const MessageModel = mongoose.model('Message', messageSchema);

export default MessageModel;
