import { Request, Response } from 'express';
import { findUsersToDiscover } from '../services/find.service';
import { IDiscoverFindResponse } from '../dtos';

export const findUserToDiscoverController = async (
  req: Request,
  res: Response<IDiscoverFindResponse>
) => {
  try {
    const userId = Number(req.query?.userId);
    if (!userId) throw new Error('userId is required');

    const usersToDiscover = await findUsersToDiscover(userId);

    const response = { data: usersToDiscover, message: 'Users to discover' };
    res.send(response);
  } catch (error) {
    const message = (error as Error).message;
    const response = { data: [], message: 'There is an error ' + message };
    res.send(response);
  }
};
