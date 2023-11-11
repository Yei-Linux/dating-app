import { Request, Response } from 'express';
import { findAllGendersService } from '../services';
import { TFindAllGendersResponse } from '../dtos';

export const findAllGendersController = async (
  req: Request,
  res: Response<TFindAllGendersResponse>
) => {
  try {
    const data = await findAllGendersService();
    const response = { data, message: 'Genders successful' };

    res.send(response);
  } catch (error) {
    const message = (error as Error).message;
    const response = { data: [], message };
    res.status(500).send(response);
  }
};
