import { Request, Response } from 'express';
import { IDiscoverFindRequest, IDiscoverFindResponse } from '../dtos';

export const interactionController = (
  req: Request<IDiscoverFindRequest>,
  res: Response<IDiscoverFindResponse>
) => {};
