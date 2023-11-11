import { Request, Response } from 'express';
import { sendPrivateMessageService } from '../services/send-message.service';
import {
  TSendMessageRequest,
  TSendMessageResponse,
} from '../dtos/send-message.dto';

export const sendMessageController = async (
  req: Request<TSendMessageRequest>,
  res: Response<TSendMessageResponse>
) => {
  try {
    const payload = req.headers?.['user'] as string;
    const senderId = JSON.parse(payload)?.id;

    if (!senderId) {
      throw new Error('Token is not signed correctly');
    }

    const body = req.body;
    const message = body.message;
    const chatId = Number(body.chatId);

    const io = req.app.get('io');
    const socketInstance = io.to(chatId);

    if (!body) throw new Error('Body was not passed.');
    if (!socketInstance) throw new Error('Socket Instance was not passed.');

    const data = await sendPrivateMessageService({
      senderId,
      message,
      chatId,
    });
    const response = { data, message: 'Chat Messages Got' };

    socketInstance.emit('chat', data);

    res.send(response);
  } catch (error) {
    const message = (error as Error).message;
    const response = {
      data: {} as any,
      message: 'There is an error ' + message,
    };
    res.status(500).send(response);
  }
};
