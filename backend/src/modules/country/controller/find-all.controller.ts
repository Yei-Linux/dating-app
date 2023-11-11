import { Request, Response } from 'express';
import { findAllCountriesService } from '../services';
import { TFindAllCountriesResponse } from '../dtos';

export const findAllCountriesController = async (
  req: Request,
  res: Response<TFindAllCountriesResponse>
) => {
  try {
    const data = await findAllCountriesService();
    const response = { data, message: 'Countries successful' };

    res.send(response);
  } catch (error) {
    const message = (error as Error).message;
    const response = { data: [], message };
    res.status(500).send(response);
  }
};
