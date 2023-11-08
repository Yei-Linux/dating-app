import { IResponse } from '../../shared';

export type TUpdateByUserIdRequest = {
  email: string;
  name: string;
  lastName: string;
  age: number;
  profileImg?: string | null;
};

export type TUpdateByUserIdResponse = IResponse<{
  id: number;
  email: string;
  name: string;
  lastName: string;
  age: number;
  profileImg: string | null;
} | null>;
