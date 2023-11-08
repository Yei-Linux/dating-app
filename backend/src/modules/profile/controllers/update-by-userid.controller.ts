import { Request, Response } from 'express';
import { TUpdateByUserIdRequest, TUpdateByUserIdResponse } from '../dtos';
import { updateByUserIdService } from '../services';

export const updateByUserIdController = async (
  req: Request<TUpdateByUserIdRequest>,
  res: Response<TUpdateByUserIdResponse>
) => {
  try {
    const userId = Number(req.query.userId);
    const body = req.body;
    if (!userId) throw new Error('userId is required');

    const data = await updateByUserIdService({ userId, ...body });
    const response = { data, message: 'User updated' };
    res.send(response);
  } catch (error) {
    const message = (error as Error).message;
    const response = { data: null, message };
    res.send(response);
  }
};
