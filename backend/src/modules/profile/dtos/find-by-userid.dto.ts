import { IResponse } from '../../shared';

export type TFindByUserIdRequest = {
  userId: number;
};

export type TFindByUserIdResponse = IResponse<{
  id: number;
  email: string;
  name: string;
  lastName: string;
  age: number;
  profileImg: string | null;
} | null>;
