import express from 'express';
import { createMessage, getMessages, getMessage, deleteMessage, editMessage } from '../Controllers/messageController.js';

const router = express.Router();

router.post('/', createMessage);
router.get('/:chatId', getMessages);
router.get('/:id', getMessage);
router.delete('/:id', deleteMessage);
router.post('/:id', editMessage);

export default router;
