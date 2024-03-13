import express from 'express';
import multer from 'multer';
import { createMessage, getMessages, getMessage, deleteMessage, editMessage, deleteImageUrl } from '../Controllers/messageController.js';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.array('imageFiles'), createMessage);
router.get('/:chatId', getMessages);
router.get('/:id', getMessage);
router.delete('/:id', deleteMessage);
router.delete('/:id/imageUrls', deleteImageUrl);
router.post('/:id', editMessage);

export default router;
