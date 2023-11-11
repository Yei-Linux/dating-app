import { IResponse } from '../../shared';

export type TFindByUserIdRequest = {
  userId: number;
};

type TRelation = {
  id: number;
  name: string;
};

export type TFindByUserIdResponse = IResponse<{
  id: number;
  email: string;
  name: string;
  lastName: string;
  age: number;
  gender: TRelation;
  genderToMatch: TRelation;
  country: TRelation;
  description?: string;
  profileImg: string | null;
} | null>;
