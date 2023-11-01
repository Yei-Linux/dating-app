import { Router } from 'express';
import { findPrivateChatById } from '../controllers/find-by-id.controller';
import { sendMessageController } from '../controllers';

export const ChatRouter = Router();

ChatRouter.get('/private', findPrivateChatById);
ChatRouter.post('/send', sendMessageController);
