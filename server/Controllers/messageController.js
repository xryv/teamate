/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import MessageModel from '../Models/messageModel.js';
import { S3, PutObjectCommand } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
dotenv.config({ path: './server/.env' });

// Configure AWS SDK
const config = {
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: 'eu-west-3',
};
const s3 = new S3(config);

// createMessage
const createMessage = async (req, res) => {
    const { chatId, senderId, text } = req.body;
    const imageFiles = req.files;
    console.log('imageFiles:', imageFiles);
    const imageUrls = [];

    // Parcourir chaque fichier image
    for (const file of imageFiles) {
        const params = {
            Bucket: 'teamate-chat',
            Key: uuidv4() + path.extname(file.originalname), // Utilisez uuidv4 pour générer un identifiant unique
            Body: file.buffer,
        };

        try {
            await s3.send(new PutObjectCommand(params));
            const imageUrl = `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`;
            imageUrls.push(imageUrl);
            console.log('Image URL:', imageUrl); // Log the image URL
        } catch (error) {
            console.error('Error uploading file:', error);
            res.status(500).json(error);
            return;
        }
    }

    // Créer un nouveau message avec les informations fournies et les URL des images
    const message = new MessageModel({
        chatId,
        senderId,
        text,
        read: false,
        imageUrls, // Stockez les URL des images dans le champ imageUrl
    });

    try {
        // Enregistrer le message dans la base de données
        const response = await message.save();
        // Renvoyer le message enregistré en réponse
        res.status(200).json(response);
    } catch (error) {
        // En cas d'erreur lors de l'enregistrement du message, renvoyer une erreur 500
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

const deleteImageUrl = async (req, res) => {
    const { id } = req.params;
    const { imageUrl } = req.body;
    try {
        console.log('id:', id);
        console.log('imageUrl:', imageUrl);
        const message = await MessageModel.findById(id);
        if (message !== null) {
            const index = message.imageUrls.indexOf(imageUrl);
            if (index !== -1) {
                message.imageUrls.splice(index, 1);
                const updatedMessage = await message.save();
                console.log('Image URL deleted successfully:', updatedMessage);
                res.status(200).json({ message: 'Image URL deleted successfully', data: updatedMessage });
            } else {
                res.status(404).json({ message: 'Image URL not found in the message' });
            }
        } else {
            res.status(404).json({ message: 'Message not found' });
        }
    } catch (error) {
        console.error('Error deleting image URL:', error);
        res.status(500).json(error);
    }
};

export {
    createMessage,
    getMessages,
    getMessage,
    deleteMessage,
    editMessage,
    deleteImageUrl,
};
