import { Request, Response } from 'express';
import { TUpdateByUserIdRequest, TUpdateByUserIdResponse } from '../dtos';
import { updateByUserIdService } from '../services';

export const updateByUserIdController = async (
  req: Request<TUpdateByUserIdRequest>,
  res: Response<TUpdateByUserIdResponse>
) => {
  try {
    const body = req.body;
    const payload = req.headers?.['user'] as string;
    const userId = JSON.parse(payload)?.id;

    if (!userId) {
      throw new Error('Token is not signed correctly');
    }

    const data = await updateByUserIdService({ userId, ...body });
    const response = { data, message: 'User updated' };
    res.send(response);
  } catch (error) {
    const message = (error as Error).message;
    const response = { data: null, message };
    res.status(500).send(response);
  }
};
