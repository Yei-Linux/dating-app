import { Request, Response } from 'express';
import { findByUserIdService } from '../services/find-by-userid.service';
import { TFindByUserIdResponse } from '../dtos';

export const findByUserIdController = async (
  req: Request,
  res: Response<TFindByUserIdResponse>
) => {
  try {
    const payload = req.headers?.['user'] as string;
    const userId = JSON.parse(payload)?.id;

    if (!userId) {
      throw new Error('Token is not signed correctly');
    }

    const data = await findByUserIdService({ userId });
    const response = { data, message: 'User found' };
    res.send(response);
  } catch (error) {
    const message = (error as Error).message;
    const response = { data: null, message };
    res.status(500).send(response);
  }
};
