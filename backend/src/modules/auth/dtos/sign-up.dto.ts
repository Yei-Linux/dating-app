import { IResponse } from '../../shared';

export type TSignupRequest = {
  name: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
};

export type TSignupResponse = IResponse<{
  id: number;
  email: string;
} | null>;
