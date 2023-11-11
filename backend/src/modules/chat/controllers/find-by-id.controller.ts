import { Request, Response } from 'express';
import { findPrivateChatByIdService } from '../services';
import { TFindChatByIdResponse } from '../dtos';

export const findPrivateChatById = async (
  req: Request,
  res: Response<TFindChatByIdResponse>
) => {
  try {
    const payload = req.headers?.['user'] as string;
    const userId = JSON.parse(payload)?.id;

    if (!userId) {
      throw new Error('Token is not signed correctly');
    }

    const chatId = Number(req.query.chatId);
    const data = await findPrivateChatByIdService(chatId, userId);
    const response = { data, message: 'Chat Messages Got' };

    res.send(response);
  } catch (error) {
    const message = (error as Error).message;
    const response = {
      data: {} as any,
      message: message,
    };
    res.status(500).send(response);
  }
};
