export type TFindByUserIdResponse = {
  id: number;
  email: string;
  name: string;
  lastName: string;
  age: number;
  profileImg: string | null;
};

export type TUpdateByUserIdRequest = {
  email: string;
  name: string;
  lastName: string;
  age: number;
  profileImg?: string | null;
};

export type TUpdateByUserIdResponse = {
  id: number;
  email: string;
  name: string;
  lastName: string;
  age: number;
  profileImg: string | null;
};
