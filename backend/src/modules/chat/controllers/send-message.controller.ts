import { Request, Response } from 'express';
import { sendPrivateMessageService } from '../services/send-message.service';
import { SOCKET_EVENTS } from '../../../config';

export const sendMessageController = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const message = body.message;
    const userId = Number(body.userId);
    const chatId = Number(body.chatId);

    const io = req.app.get('io');
    const sockets = req.app.get('sockets');
    const socketId = sockets[userId];
    const socketInstance = io.to(socketId);

    if (!body) throw new Error('Body was not passed.');
    if (!socketInstance) throw new Error('Socket Instance was not passed.');
    if (!userId) throw new Error('UserId Header was not passed.');

    const data = await sendPrivateMessageService({
      senderId: userId,
      message,
      chatId,
    });
    const response = { data, message: 'Chat Messages Got' };

    socketInstance.emit(SOCKET_EVENTS.SEND_PRIVATE_MESSAGE, {
      payload: data,
    });

    res.send(response);
  } catch (error) {
    const message = (error as Error).message;
    const response = {
      data: {} as any,
      message: 'There is an error ' + message,
    };
    res.send(response);
  }
};
