import { Request, Response } from 'express';
import { findPrivateChatByIdService } from '../services';
import { TFindChatByIdResponse } from '../dtos';

export const findPrivateChatById = async (
  req: Request,
  res: Response<TFindChatByIdResponse>
) => {
  try {
    const chatId = Number(req.query.chatId);
    const userId = Number(req.query.userId);
    const data = await findPrivateChatByIdService(chatId, userId);
    const response = { data, message: 'Chat Messages Got' };

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
