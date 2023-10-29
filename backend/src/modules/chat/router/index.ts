import { Router } from 'express';
import { findPrivateChatById } from '../controllers/find-by-id.controller';

export const ChatRouter = Router();

ChatRouter.get('/private', findPrivateChatById);
