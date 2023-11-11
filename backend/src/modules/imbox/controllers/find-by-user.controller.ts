import { Request, Response } from 'express';
import { IFindImboxByUserResponse } from '../dtos';
import { findImboxByUserService } from '../services';

export const findImboxByUser = async (
  req: Request,
  res: Response<IFindImboxByUserResponse>
) => {
  try {
    const payload = req.headers?.['user'] as string;
    const userId = JSON.parse(payload)?.id;

    if (!userId) {
      throw new Error('Token is not signed correctly');
    }

    const data = await findImboxByUserService({ userId });
    const response = { data, message: 'Imbox got' };
    res.send(response);
  } catch (error) {
    const message = (error as Error).message;
    const response = { data: [], message: 'There is an error ' + message };
    res.status(500).send(response);
  }
};
