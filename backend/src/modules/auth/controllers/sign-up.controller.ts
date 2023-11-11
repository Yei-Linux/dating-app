import { Request, Response } from 'express';
import { TSignupRequest, TSignupResponse } from '../dtos/sign-up.dto';
import { signUpService } from '../services';
import { imgbbProxy } from '../../shared';

export const signUpController = async (
  req: Request,
  res: Response<TSignupResponse>
) => {
  try {
    const body = req.body;
    if (!body) {
      throw new Error('Body is required');
    }

    if (!body?.password) {
      throw new Error('Password is required');
    }

    if (body.password?.length < 8) {
      throw new Error('Password is invalid');
    }

    if (!req.file) {
      throw new Error('Image is required');
    }

    const buffer = req.file?.buffer;
    const fileName = req.file?.originalname;

    if (!buffer || !fileName) {
      throw new Error('Image is not valid');
    }

    const profileImg = await imgbbProxy({ buffer, fileName });

    const data = await signUpService({ ...body, profileImg });
    const response = { data, message: 'User created succesfull' };

    res.send(response);
  } catch (error) {
    const message = (error as Error).message;
    res.status(500).send({ data: null, message });
  }
};
