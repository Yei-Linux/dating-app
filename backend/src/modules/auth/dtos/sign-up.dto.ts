import { IResponse } from '../../shared';

export type TSignupRequest = {
  name: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  description: string;
  genderId: number;
  countryId: number;
  genderToMatchId: number;
};

export type TSignupResponse = IResponse<{
  id: number;
  email: string;
} | null>;
