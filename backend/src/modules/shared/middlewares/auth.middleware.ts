import { Request, Response } from 'express';

import { jwtHelper } from '../helpers';
import { JWT_VARIABLES } from '../../../config';

const { SECRET, ISSUER, AUDIENCE } = JWT_VARIABLES;

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: () => void
) => {
  const isAuthPath = req.path.includes('/auth');
  if (isAuthPath) {
    next();
    return;
  }

  const authorizationHeader = req.headers['authorization'];
  if (!authorizationHeader) {
    res.status(401).send({ data: null, message: 'Token is not passed' });
    return;
  }

  const [bearer_text, token] = authorizationHeader.split(' ');
  const payload = await jwtHelper({
    secret: SECRET,
    issuer: ISSUER,
    audience: AUDIENCE,
  }).verify(token);
  if (!payload) {
    res.status(401).send({ data: null, message: 'Token is not correct' });
    return;
  }

  req.headers['user'] = JSON.stringify(payload);

  next();
};
