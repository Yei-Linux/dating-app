import { Request, Response } from 'express';
import { TSignInRequest, TSignInResponse } from '../dtos';
import { generateTokenService, verifyUserService } from '../services';

export const SigninController = async (
  req: Request<TSignInRequest>,
  res: Response<TSignInResponse>
) => {
  try {
    const body = req.body;

    const user = await verifyUserService(body);
    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      profileImg: user.profileImg ?? '',
    };
    const token = await generateTokenService({ payload });

    const data = { token, email: user.email };
    const response = { data, message: 'Login successful' };
    res.send(response);
  } catch (error) {
    const message = (error as Error).message;
    res.status(500).send({ data: null, message });
  }
};
