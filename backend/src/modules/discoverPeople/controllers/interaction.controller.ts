import { Request, Response } from 'express';
import {
  IDiscoverInteractionRequest,
  IDiscoverInteractionResponse,
} from '../dtos';
import { interactionUserWithPeople } from '../services/interaction.service';

export const interactionController = async (
  req: Request<IDiscoverInteractionRequest>,
  res: Response<IDiscoverInteractionResponse>
) => {
  try {
    const payload = req.headers?.['user'] as string;
    const userIdTransmitter = JSON.parse(payload)?.id;

    if (!userIdTransmitter) {
      throw new Error('Token is not signed correctly');
    }

    const reqBody = req.body as IDiscoverInteractionRequest | null;
    if (!reqBody) throw new Error('Body is required');

    const usersToDiscover = await interactionUserWithPeople({
      userIdTransmitter: userIdTransmitter,
      userIdReceiver: reqBody.userIdReceiver,
      interaction: reqBody.interaction === 'like' ? 1 : 2,
    });
    const responseServ = {
      data: usersToDiscover,
      message: 'Users to discover',
    };
    res.send(responseServ);
  } catch (error) {
    const message = (error as Error).message;
    const response = {
      data: { id: 0 },
      message: 'There is an error ' + message,
    };
    res.status(500).send(response);
  }
};
