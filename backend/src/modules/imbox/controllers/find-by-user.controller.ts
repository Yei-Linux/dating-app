import { Request, Response } from 'express';
import { IFindImboxByUserResponse } from '../dtos';
import { findImboxByUserService } from '../services';

export const findImboxByUser = async (
  req: Request,
  res: Response<IFindImboxByUserResponse>
) => {
  try {
    const userId = Number(req.query.userId);

    const data = await findImboxByUserService({ userId });
    const response = { data, message: 'Imbox got' };
    res.send(response);
  } catch (error) {
    const message = (error as Error).message;
    const response = { data: [], message: 'There is an error ' + message };
    res.send(response);
  }
};
