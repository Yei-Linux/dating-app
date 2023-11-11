import { JWT_VARIABLES } from '../../../config';
import { jwtHelper } from '../../shared/helpers';

const { SECRET, AUDIENCE, ISSUER, TOKEN_EXPIRATION } = JWT_VARIABLES;

export interface IGenerateTokenService {
  payload: {
    id: number;
    email: string;
    name: string;
    lastName: string;
    profileImg: string;
  };
}

export const generateTokenService = async ({
  payload,
}: IGenerateTokenService) => {
  const tokenSigned = await jwtHelper({
    secret: SECRET,
    issuer: ISSUER,
    audience: AUDIENCE,
  }).signToken({ payload, expiration: TOKEN_EXPIRATION });

  return tokenSigned;
};
