import { IResponse } from '../../shared';

export type TSignInRequest = {
  email: string;
  password: string;
};

export type TSignInResponse = IResponse<{
  email: string;
  token: string;
} |  null>;
